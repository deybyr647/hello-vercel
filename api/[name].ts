import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    const { name } = req.query;
    return res.end(`Hello ${name}!`);
}
