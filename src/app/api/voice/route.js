import axios from 'axios';
import { IncomingForm } from 'formidable';
import { parse } from 'querystring';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end('Method Not Allowed');
        return;
    }

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        const data = parse(body);
        const userSpeech = data.SpeechResult || 'Hello';
        console.log('User said:', userSpeech);

        const reply = await getGenduReply(userSpeech);

        const twimlResponse = `
            <Response>
              <Say voice="Polly.Raveena">${reply}</Say>
              <Gather input="speech" timeout="5" action="/api/voice" method="POST">
                <Say>Say something else to Gendu AI...</Say>
              </Gather>
            </Response>
        `;

        res.setHeader('Content-Type', 'text/xml');
        res.status(200).send(twimlResponse);
    });
}

async function getGenduReply(message) {
    try {
        const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
            {
                model: 'llama3-70b-8192',
                messages: [
                    {
                        role: 'system',
                        content:
                            "You are Gendu AI, a funny, witty, Hinglish-speaking Indian AI. Talk like a Delhi ka ladka with savage comebacks. Keep replies short and fun for phone conversations.",
                    },
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.choices[0].message.content.trim();
    } catch (err) {
        console.error('Groq API error:', err.message);
        return 'Sorry bro, Gendu thoda busy hai!';
    }
}
