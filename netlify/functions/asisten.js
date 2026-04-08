exports.handler = async (event) => {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;

  const GOOGLE_API = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;

  try {
    const aiResponse = await fetch(GOOGLE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Berikan sapaan semangat singkat untuk Frans Marcellino!" }] }]
      })
    });

    const aiData = await aiResponse.json();
    
    // PENGAMAN: Cek apakah data dari Google valid
    let pesanAi = "Sistem Online! Semangat Frans Marcellino."; // Pesan cadangan
    if (aiData.candidates && aiData.candidates[0] && aiData.candidates[0].content) {
      pesanAi = aiData.candidates[0].content.parts[0].text;
    }

    // Kirim ke Discord
    await fetch(DISCORD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Elite Vault Assistant",
        content: pesanAi
      })
    });

    return {
      statusCode: 200,
      body: "MISI SELESAI! Cek Discord kamu sekarang."
    };

  } catch (error) {
    // Jika benar-benar gagal, tetap lapor ke layar
    return {
      statusCode: 500,
      body: "Ada kendala teknis: " + error.message
    };
  }
};
