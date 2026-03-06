import { askModel } from "../../packages/ai/openrouter.js"

export const selfEvolveAgent = {

  name: "evolution",

  async execute(task: string) {

    if (!task.includes("improve")) return null

    return askModel([
      { role: "system", content: "Suggest improvements to the protocol." },
      { role: "user", content: task }
    ])

  }

}
