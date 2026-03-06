export function routeTask(task:string){

  if(task.includes("code"))
    return "codeAgent"

  if(task.includes("research"))
    return "researchAgent"

  return "default"

}
