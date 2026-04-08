exports.handler = async (event) => {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL;

  // Gunakan URL langsung ke API Google
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;

  try {
    // 1. Minta jawaban langsung ke Google
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Berikan sapaan semangat singkat untuk Frans Marcellino!" }] }]
      })
    });

    const data = await response.json();
    const aiText = data.candidates[0].content.parts[0].text;

    // 2. Kirim hasilnya ke Discord
    await fetch(DISCORD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Asisten Elite",
        content: aiText
      })
    });

    return { statusCode: 200, body: "MISI SUKSES TOTAL!" };

  } catch (error) {
    return { statusCode: 500, body: "Error: " + error.message };
  }
};
