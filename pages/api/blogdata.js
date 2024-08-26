// import * as fs from 'fs';

// export default function handler(req, res){
//     fs.readFile(`blogpostdata/${req.query.slug}.json`, 'utf-8', (err, data)=>{
//         if(err){
//             res.status(500).json({error: 'No such blog foumd'})

//         }
//         console.log(req.query.slug)
//         res.status(200).json(JSON.parse(data))
//     })
// }

import * as fs from 'fs';

export default function handler(req, res) {
    fs.readFile(`blogpostdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'No such blog found' });
            return; // Exit the function if there's an error
        }
        console.log(req.query.slug);
        try {
            const jsonData = JSON.parse(data);
            res.status(200).json(jsonData);
        } catch (parseError) {
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
}
