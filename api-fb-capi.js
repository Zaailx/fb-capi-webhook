export default async function handler(req, res) {
  const { clickid, ip, ua } = req.query;

  const response = await fetch('https://graph.facebook.com/v18.0/556578154125413/events?access_token=EAAUTafqwQXEBO62kNhzocuTAVNfwmSesO5yzt9DEP384t5zApnHLjBlz2PbgSAtUoG3EgnPFE1ydDqZAiocmYgUZCBnG5nyFfuOiZCPajsks0If26vvNN9Ab64Eb8ZCMorvJK1VLwuMhCT1ZA7H5ZCHEUfYPHc0sbCbLP1ZB5wTawYHZCP0zY3nmCOu62yeMxynzDQZDZD', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: "https://clickdealer.com",
          user_data: {
            external_id: clickid,
            ip_address: ip,
            client_user_agent: ua
          }
        }
      ]
    })
  });

  const result = await response.json();
  res.status(200).json(result);
}
