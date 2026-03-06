import { ethers } from "ethers"

const provider = new ethers.JsonRpcProvider(
  process.env.BASE_RPC
)

export const baseProvider = provider
