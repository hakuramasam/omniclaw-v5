export function calculatePrice(task:string){

  const base = 10000

  const complexity =
    task.length / 100

  return Math.floor(base + complexity * base)

}
