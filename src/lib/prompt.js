import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { generateText } from "ai"

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
})
const model = google('models/gemini-1.5-flash-latest', { topK: 2 })

export const buildPrompt = (settings) => {
  console.log(settings)

  const usage = settings.filter(item => item.category === 'usage')[0].value
  const specs = settings.filter(item => item.category === 'specs')[0].value
  const budget = settings.filter(item => item.category === 'budget')[0].value
  const design = settings.filter(item => item.category === 'design')[0].value

  return `
    Hey! I wanna buy a new smartphone but I don't have any technical knowledge so I made this list of attributes that
    I would like my smartphone to have. I want you to find the device that matches the better these conditions:

    1. The main use of the device will be: ${usage}
    2. The spec I value the most is: ${specs}
    3. The design must be something ${design}

    Take into account that I have a ${budget} budget.

    Please respond in spanish only with a JSON file with this format:

    {
      device_name: <device's brand and model>,
      device_description: <a short review of the device in no more than 40 words>,
      cpu: <device's CPU model>
      storage: <device's storage size>
      screen: <screen's resolution>
      battery: <battery's power>
      camera: <camera's quality>
    }
  `
}

export const executePrompt = async (prompt) => {
  console.log(prompt)
  
  const { text } = await generateText({
    model: model,
    prompt: prompt
  })

  const cleanResponse = text.replace('```json', '').replace('```', '')
  const result = JSON.parse(cleanResponse)

  console.log(result)
  return result
}