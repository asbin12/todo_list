const inputText = document.getElementById("inputText");
const addTodo = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
// const delTodo = document.getElementById("delBtn");
// const buttons = document.querySelector("button");

const getTodoList = () => {
  if (inputText.value === "") {
    alert("TodoList cannot be empty");
  } else {
    // localStorage.setItem("list", userInput);
    // listItems.textContent = localStorage.getItem("list");
    let listItems = document.createElement("li");
    listItems.innerHTML = inputText.value;
    todoList.appendChild(listItems);
    // console.log(todoList.innerHTML[0]);

    let delBtn = document.createElement("button");
    delBtn.classList.add("btn");
    delBtn.innerHTML = "x";
    // todoListData();
    delBtn.addEventListener("click", () => {
      listItems.remove();
      todoListData();
    });
    // listItems.remove());
    listItems.appendChild(delBtn);
  }

  inputText.value = " ";
  todoListData();
};
addTodo.addEventListener("click", getTodoList);

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    // Remove the parent li element
    let listItem = event.target.parentNode;
    listItem.remove();
    todoListData();
  }
});

const todoListData = () => {
  const arr1 = Array.from[todoList.textContent];
  localStorage.setItem("data", arr1[0]);
};
const showTodoListTask = () => {
  const arr1 = Array.from[todoList.textContent];
  arr1 = localStorage.getItem("data");
};
showTodoListTask();

// const deleteTask
// const delTodos = (btn) => {
//   btn.parentElement.remove();
// };

// getTodoList();
// delBtn.id = "myDelBtn";
// let parentOfDelBtn=todoList
//   const deleteTodoList = () => {
//     // const del = document.getElementById("myDelBtn");
//     console.log(del);
//   };
// };
// deleteTodoList();
// delTodo.addEventListener("click", deleteTodoList);

// let todoTask = inputText.value;
// document.getElementById("TodoList").innerHTML = todoTask;

// const del = document.getElementById("myDelBtn");
// console.log(del);
// delBtn.parentElement.remove();
