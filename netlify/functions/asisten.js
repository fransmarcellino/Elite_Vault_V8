const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;
  
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    // Memberikan konteks waktu agar laporan tidak "stuck" di jam lama
    const waktuSekarang = new Date().toLocaleString("id-ID", { timeZone: "Asia/Makassar" });
    const prompt = `Berikan laporan status singkat untuk Pak Frans Sroyer. Beritahu bahwa sistem aman pada pukul ${waktuSekarang}. Tambahkan satu tips singkat tentang AI Cinematic.`;
    
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    await fetch(DISCORD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "Asisten Elite Vault",
        content: text
      }),
    });

    return { statusCode: 200, body: "Laporan Terkirim!" };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
