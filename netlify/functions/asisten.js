const nacl = require('tweetnacl');

exports.handler = async (event) => {
  // 1. Ambil kunci keamanan dari Environment Variables Netlify
  const PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;
  const signature = event.headers['x-signature-ed25519'];
  const timestamp = event.headers['x-signature-timestamp'];
  const body = event.body;

  // 2. Verifikasi keamanan (Wajib agar Discord mau verifikasi URL)
  try {
    const isVerified = nacl.sign.detached.verify(
      Buffer.from(timestamp + body),
      Buffer.from(signature, 'hex'),
      Buffer.from(PUBLIC_KEY, 'hex')
    );

    if (!isVerified) {
      return { statusCode: 401, body: 'Invalid request signature' };
    }
  } catch (err) {
    return { statusCode: 401, body: 'Verification failed' };
  }

  const data = JSON.parse(body);

  // 3. Jawab PING dari Discord (Ini yang bikin Save Changes berhasil!)
  if (data.type === 1) {
    return {
      statusCode: 200,
      body: JSON.stringify({ type: 1 })
    };
  }

  // 4. Jika ada pesan masuk (Interaction)
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 4,
      data: { content: "Halo Pak Frans! Saya sudah siap membalas." }
    })
  };
};
