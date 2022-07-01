import React  from "react";
import {createRoot} from "react-dom/client"
function Main(){
    return (<><p>That was a nice Cake!</p><button type ="button" className="btn btn-primary">Hello</button></>);
}
const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

const container = document.getElementById("root");
const root = createRoot(container);
root.render([<Main/>,page]);
