exports.handler = async (event, context) => {
  const URL = process.env.DISCORD_WEBHOOK_URL;

  const data = {
    username: "Asisten Elite Vault",
    content: "📢 **LAPORAN AKTIVASI!** \n\nHalo Pak Frans! Saya sudah aktif di server Netlify. Koneksi ke Discord berhasil 100%. Saya siap menjaga proyek **Elite Vault V8** Anda!",
    avatar_url: "https://i.imgur.com/4M34unZ.png" 
  };

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return { 
      statusCode: 200, 
      body: "Pesan berhasil dikirim ke Discord!" 
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: "Gagal mengirim: " + error.message 
    };
  }
};
