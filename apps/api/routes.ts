import { Router } from "express"
import { swarm } from "../agents/swarmManager.js"
import { calculatePrice } from "../../packages/protocol/pricingEngine.js"

const router = Router()

router.post("/task", async (req, res) => {

  const { task } = req.body

  const price = calculatePrice(task)

  const result = await swarm.runTask(task)

  res.json({
    task,
    price,
    result
  })

})

export default router
