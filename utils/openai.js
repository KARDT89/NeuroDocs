import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function openAI(description) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "I need help writing about the description I provided, suggest me some ideas about the story unfolding or resume writing if resume details are provided",
      },

      {
        role: "user",
        content: JSON.stringify({
          description: [description],
        }),
      },
    ],
    model: "gpt-4o-mini",
  });

  const messageContent = response.choices[0].message?.content;

  if (messageContent) {
    return messageContent;
  }
}