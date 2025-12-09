//server side renders on server and never reach to client. but 1st page or home page loading much faster since it doesn't execute javascript
//have good SEO
//can fetch data without craeting api endpoints

import ButtonComponent from "./button";

export default async function Contact() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    console.log(posts);

    return (
        <div>
            <ButtonComponent></ButtonComponent>
        </div>
    )
}