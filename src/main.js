import "./style.css"
import { setupCounter } from "./counter.js"

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Problem Solving</h1>
  </div>
`

setupCounter(document.querySelector("#counter"))
