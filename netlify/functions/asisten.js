// BARIS INI WAJIB ADA DI PALING ATAS (Baris 1)
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  // Ambil kunci rahasia dari Netlify
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;

  // Pastikan kunci tersedia
  if (!GEMINI_KEY || !DISCORD_URL) {
    return { statusCode: 500, body: "Error: Key belum diset di Netlify!" };
  }

  try {
    // Inisialisasi AI
    const genAI = new GoogleGenerativeAI(GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Buat pesan spesial
    const prompt = "Berikan sapaan singkat dan semangat untuk Frans Marcellino yang sedang lembur di Makassar!";
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
      body: "MISI SUKSES! Pesan sudah meluncur ke Discord."
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: "Masalah teknis: " + error.message
    };
  }
};
