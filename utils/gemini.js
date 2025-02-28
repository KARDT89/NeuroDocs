import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function geminiAI(description) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
   I need help generating content based on the provided description.  

- If the description is about a **story**, craft a short but engaging narrative with a strong hook, rising tension, and a satisfying resolution. Keep it spicy yet concise.  
- If it's a **resume**, format it professionally, emphasizing clarity, structure, and achievements using bullet points.  
- If it's a **general document**, structure it logically, ensuring clarity and professionalism.  

Description: ${description}

  `;

  try {
    const response = await model.generateContent(prompt);
    const text = response.response.text();

    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    return null;
  }
}
