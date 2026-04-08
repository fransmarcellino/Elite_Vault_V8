// Baris ini WAJIB ada di paling atas
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Berikan sapaan singkat dan semangat untuk Frans Sroyer yang sedang lembur membangun Elite Vault V8!";
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Kirim ke Discord
    await fetch(DISCORD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "Asisten Elite",
        content: responseText
      }),
    });

    return {
      statusCode: 200,
      body: "Pesan Gemini berhasil dikirim ke Discord!"
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: "Error: " + error.message
    };
  }
};
