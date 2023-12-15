const todoList = document.getElementById("todoList");
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const addTodoData = await fetch("http://localhost:3000/todoList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!addTodoData.ok) {
      throw new Error("Failed to post new data");
    }
  } catch (error) {
    console.error(error);
  }

  // console.log(formData.get("user"));
});

const showTodoList = async () => {
  try {
    const response = await fetch("http://localhost:3000/todoList");
    if (!response.ok) {
      throw new Error("Failed to fetch new data");
    }
    const data = await response.json();
    data.forEach((item) => {
      const listItems = document.createElement("li");
      const delBtn = document.createElement("button");
      delBtn.classList.add("btn");
      delBtn.textContent = "x";
      listItems.textContent = item.todoItems;
      delBtn.addEventListener("click", () => deleteData(item.id));
      todoList.appendChild(listItems);
      listItems.appendChild(delBtn);
    });
  } catch (error) {
    console.error(error);
  }
};
const deleteData = async (itemId) => {
  try {
    const deleteResponse = await fetch(
      `http://localhost:3000/todoList/${itemId}`,
      {
        method: "DELETE",
      }
    );
    if (!deleteResponse.ok) {
      throw new Error("Failed to delete data");
    }
    // showTodoList();
  } catch (error) {
    console.error(error);
  }
};
showTodoList();

// deleteData()
// const inputText = document.getElementById("inputText");
// const addTodo = document.getElementById("addBtn");
// // const delTodo = document.getElementById("delBtn");
// // const buttons = document.querySelector("button");

// const addingTodo = () => {
//   if (inputText.value === "") {
//     alert("You should first enter the task");
//   } else {
//     const listItems = document.createElement("li");
//     listItems.innerHTML = inputText.value;
//     todoList.appendChild(listItems);
//     let delBtn = document.createElement("button");
//     delBtn.classList.add("btn");
//     delBtn.innerHTML = "x";
//     listItems.appendChild(delBtn);
//   }
//   inputText.value = "";
//   // localStorage.setItem("data", todoList.textContent);
//   // todoListData();
// };

// todoList.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "BUTTON") {
//       e.target.parentElement.remove();
//       localStorage.setItem("data", todoList.textContent);

//       // todoListData();
//     }
//   },
//   false
// );
// todoList.innerHTML = localStorage.getItem("data");
// localStorage.getItem("data", todoList.textContent);

// const getTodoList = () => {
//   if (inputText.value === "") {
//     alert("TodoList cannot be empty");
//   } else {
//     // localStorage.setItem("list", userInput);
//     // listItems.textContent = localStorage.getItem("list");
//     const listItems = document.createElement("li");
//     listItems.innerHTML = inputText.value;
//     todoList.appendChild(listItems);

//     // console.log(todoList.innerHTML[0]);

//     let delBtn = document.createElement("button");
//     delBtn.classList.add("btn");
//     delBtn.innerHTML = "x";
//     // todoListData();
//     delBtn.addEventListener("click", () => {
//       listItems.remove();
//       // todoListData();
//     });
//     // listItems.remove());
//     listItems.appendChild(delBtn);
//   }

//   inputText.value = " ";
//   // todoListData();
// };
// addTodo.addEventListener("click", getTodoList);

// todoList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("btn")) {
//     // Remove the parent li element
//     let listItem = event.target.parentNode;
//     listItem.remove();
//     todoListData();
//   }
// });

// const todoListData = () => {
//   localStorage.setItem("data", todoList.textContent);
//   // ("data", arr1[0]);
// };
// const showTodoListTask = () => {
//   // const arr1 = Array.from[todoList.textContent];
//   // arr1 = localStorage.getItem("data");
//   // localStorage.getItem("data");
//   localStorage.getItem("data");
// };
// showTodoListTask();

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
// const todoData = document.getElementById("inputText").value;
// const data = {
//   todoData,
// };
