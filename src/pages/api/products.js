import fs from 'fs';

export default function handler(req, res) {
   const products = JSON.parse(fs.readFileSync('./Products/data.json', 'utf-8'));
    res.status(200).json(products);
}