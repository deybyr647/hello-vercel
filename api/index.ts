import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function index(req: VercelRequest, res: VercelResponse) {
    res.status(200).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        key: process.env.API_KEY,
    });
}
