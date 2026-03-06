import { ethers } from "ethers"

const provider = new ethers.JsonRpcProvider(
  process.env.MONAD_RPC
)

export const monadProvider = provider
