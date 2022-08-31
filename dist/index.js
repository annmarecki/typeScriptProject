"use strict";
const input = document.getElementById("todoInput");
const btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alert("CLICKED");
    alert(input.value);
    input.value = "";
});
