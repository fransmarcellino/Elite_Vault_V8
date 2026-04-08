// Update paksa jam 22.35 const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  // 1. Ambil kunci dari Environment Variables Netlify
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;

  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    // 2. Minta Gemini buat pesan
    const prompt = "Halo Gemini, buatkan satu kalimat sapaan keren untuk Pak Frans Sroyer yang sedang membangun Elite Vault V8. Katakan sistem sudah online!";
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // 3. KIRIM KE DISCORD (Jalur Webhook)
    await fetch(DISCORD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "Elite Vault Assistant",
        content: responseText
      }),
    });

    // 4. Munculkan pesan sukses di browser kamu
    return {
      statusCode: 200,
      body: "Pesan berhasil dikirim ke Discord!"
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: "Gagal mengirim: " + error.toString()
    };
  }
};
