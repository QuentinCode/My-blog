import fs from 'fs';

export default function handler(req, res) {

    const fetchPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json(response);
        
        res.status(200).json(data);

    }

    if(req.method === "GET"){
        fetchPosts();
    } else if (req.method === "POST") {
        const title = req.body.title;
        const body = req.body.body;

        const newPost = {
            title: title,
            body: body
        }
        fetchPosts();
        data.push(newPost);
        fs.writeFileSync(response, JSON.stringify(data));
        res.status(201).json({message: "Post created successfully"});
    }
}