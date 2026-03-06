export function routeChain(chain:string){

  if(chain==="base")
    return process.env.BASE_RPC

  if(chain==="monad")
    return process.env.MONAD_RPC

}
