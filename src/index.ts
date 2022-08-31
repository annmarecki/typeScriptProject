const input = document.getElementById("todoInput")! as HTMLInputElement;
const btn = document.getElementById("btn");
btn?.addEventListener("click", () => {
  alert("CLICKED");
  alert(input.value);
  input.value = "";
});
