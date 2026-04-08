exports.handler = async (event) => {
  // 1. Ambil data dari Discord
  const body = JSON.parse(event.body || "{}");

  // 2. Respon PING (Ini yang dicari Discord saat kamu klik Save)
  if (body.type === 1) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: 1 })
    };
  }

  // 3. Respon jika ada pesan masuk
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: 4,
      data: { content: "Halo Pak Frans! Saya sudah online dan siap membantu." }
    })
  };
};
