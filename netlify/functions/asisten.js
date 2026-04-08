const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Membuat sapaan otomatis
    const result = await model.generateContent("Halo Gemini, berikan salam sukses untuk Frans Sroyer yang sedang membangun Elite Vault V8!");
    const responseText = result.response.text();

    // Kirim ke Discord lewat Webhook
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
      body: "Misi Sukses! Pesan sudah meluncur ke Discord Frans Sroyer."
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: "Masalah teknis: " + error.message
    };
  }
};
