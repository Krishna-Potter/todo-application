import "./styles/index.scss";

const body = document.body;
const div = document.createElement("div");
body.appendChild(div);

const textBox = document.createElement("input");
textBox.setAttribute("id", "getTaskBox");
div.appendChild(textBox);

const button = document.createElement("button");
button.innerHTML = "add task";
button.setAttribute("onclick", "addTask()");
div.appendChild(button);
