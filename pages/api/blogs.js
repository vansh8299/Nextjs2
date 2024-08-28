import * as fs from 'fs';

export default async function handler(req, res){
  let data = await fs.promises.readdir("blogpostdata")
  let allBlogs = [];
  let myfile;
  for (let index = 0; index < data.length; index++) {
     let item = data[index];
     console.log(item);
     myfile = await fs.promises.readFile(('blogpostdata/' + item), 'utf-8')
     allBlogs.push(JSON.parse(myfile));
     
    
  }
  res.status(200).json(allBlogs)
}