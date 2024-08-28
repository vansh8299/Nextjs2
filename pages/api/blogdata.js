import * as fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const slug = req.query.slug;


    fs.readdir('blogpostdata', (err, files) => {
        if (err) {
            res.status(500).json({ error: 'Unable to scan directory' });
            return;
        }

        const matchedFile = files.find(file => {
            const filePath = path.join('blogpostdata', file);
            const data = fs.readFileSync(filePath, 'utf-8');
            const jsonData = JSON.parse(data);
            return jsonData.slug === slug;
        });

        if (!matchedFile) {
            res.status(404).json({ error: 'Blog post not found' });
            return;
        }

        const filePath = path.join('blogpostdata', matchedFile);
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            try {
                const jsonData = JSON.parse(data);
                res.status(200).json(jsonData);
            } catch (parseError) {
                res.status(500).json({ error: 'Error parsing JSON' });
            }
        });
    });
}
