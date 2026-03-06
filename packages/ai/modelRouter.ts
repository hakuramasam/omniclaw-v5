export function chooseModel(task:string){

  if(task.includes("code"))
    return "anthropic/claude-3.5-sonnet"

  if(task.includes("research"))
    return "perplexity/sonar-medium"

  return "openrouter/auto"
}
