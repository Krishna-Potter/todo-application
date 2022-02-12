import "./styles/index.scss";

const body = document.body;

const addTask = () => {
  let getTask = document.getElementById("getTaskBox").value;
  const headTag = document.createElement("h2");
  body.appendChild(headTag);
  headTag.innerHTML = getTask;
};

document.getElementById("addTaskBtn").addEventListener("click", addTask);
