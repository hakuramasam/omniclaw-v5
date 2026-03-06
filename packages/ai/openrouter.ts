import OpenRouter from "@openrouter/sdk"

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
})

export async function askModel(messages:any[]) {

  const response = await client.chat.completions.create({
    model: process.env.MODEL || "openrouter/auto",
    messages
  })

  return response.choices?.[0]?.message?.content
}
