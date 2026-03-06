import { askModel } from "../../packages/ai/openrouter.js"

export const codeAgent = {

  name: "coder",

  async execute(task: string) {

    if (!task.includes("code")) return null

    return askModel([
      { role: "system", content: "You are a senior developer." },
      { role: "user", content: task }
    ])

  }

}
