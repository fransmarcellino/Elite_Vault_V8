const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  // Hanya jalankan jika ada pesan masuk atau trigger otomatis
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;
  
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    // Simulasi respon asisten untuk Pak Frans
    const prompt = "Berikan sapaan pendek yang sangat keren dan profesional untuk Pak Frans Sroyer. Katakan bahwa sistem Elite Vault V8 miliknya sedang diawasi dengan aman.";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Kirim ke Discord
    await fetch(DISCORD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "Asisten Elite",
        content: text
      }),
    });

    return { statusCode: 200, body: "Asisten Berhasil Mengirim Pesan!" };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
