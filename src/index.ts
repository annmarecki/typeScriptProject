interface Todo {
  text: string;
  completed: boolean;
  bold: boolean;
}

const input = document.getElementById("todoInput")! as HTMLInputElement;
const btn = document.getElementById("btn")!;
const deletebtn = document.getElementById("deletebtn")!;
const form = document.querySelector("form")!;
const ulist = document.querySelector("ul")!;
const todoArray: Todo[] = readTodos();
todoArray.forEach(createTodo);

function readTodos() {
  let previousList = localStorage.getItem("todos");
  if (previousList === null) return [];
  return JSON.parse(previousList);
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
    bold: false,
  };
  todoArray.push(newTodo);
  createTodo(newTodo);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  input.value = "";
});

deletebtn.addEventListener("click", (e) => {
  e.preventDefault();
  todoArray.pop();
  saveTodos();
});

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todoArray));
};

function createTodo(todo: Todo) {
  const list = document.createElement("ul");
  const check = document.createElement("input");
  check.type = "checkbox";
  list.append(todo.text);
  list.append(check);
  ulist.append(list);
  if (todo.completed === true) {
    list.style.fontWeight = "900";
    check.checked = true;
  } else {
    list.style.fontWeight = "normal";
  }
  check.addEventListener("change", () => {
    todo.completed = check.checked;
    saveTodos();
    todo.completed === true
      ? (list.style.fontWeight = "900")
      : (list.style.fontWeight = "normal");
  });
}
