const accessKeys = [
  "84c64417-950b-4be4-98a6-b0694dfd977e", // Existing key
  "8862f5e6-9150-4839-9155-bc68a9828bad", // New key provided by user
];

const emailMessage = "This is a test message from the server to check Web3Forms integration.";

async function testEmails() {
  const promises = accessKeys.map(async (key) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        },
        body: JSON.stringify({
          access_key: key,
          subject: "Test Order Email",
          from_name: "Test Store",
          name: "Test Customer",
          email: "test@example.com",
          message: emailMessage,
        }),
      });
      
      const text = await res.text();
      console.log(`Key ${key}: Status ${res.status}, Response: ${text}`);
    } catch (e) {
      console.error(`Key ${key}: Fetch error:`, e);
    }
  });

  await Promise.all(promises);
}

testEmails();
