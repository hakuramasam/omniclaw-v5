import { researchAgent } from "./research.agent.js"
import { codeAgent } from "./code.agent.js"
import { selfEvolveAgent } from "./selfEvolve.agent.js"

export const swarm = {

  agents: [
    researchAgent,
    codeAgent,
    selfEvolveAgent
  ],

  async runTask(task: string) {

    for (const agent of this.agents) {

      const result = await agent.execute(task)

      if (result) return result

    }

    return "No agent available"

  }

}
