import { askModel } from "../../packages/ai/openrouter.js"

export const researchAgent = {

  name: "research",

  async execute(task: string) {

    if (!task.includes("research")) return null

    return askModel([
      { role: "system", content: "You are a research assistant." },
      { role: "user", content: task }
    ])

  }

}
