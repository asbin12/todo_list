const todoList = document.getElementById("todoList");
// const dateAndTime = document.querySelector(".dateAndTime");
const formEl = document.querySelector(".form");

// let dateTime = new Date();
// dateAndTime.textContent = dateTime;
const addItemsHere = document.getElementById("addItemsHere");

addItemsHere.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("button is clicked");
  formEl.classList.toggle("hide");
  addItemsHere.classList.toggle("hide");
  // formEl.style.display = "flex";
  // addItemsHere.style.display = "none";
  if (addItemsHere.classList.contains("hide")) {
    addItemsHere.style.display = "none";
  } else {
    addItemsHere.style.display = ""; // This sets it to an empty string to remove the inline style
  }
});

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    if (data.todoItems === "") {
      alert("You should enter task");
    } else {
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
    }
  } catch (error) {
    console.error(error);
  }
});

const showTodoList = async () => {
  try {
    const response = await fetch("http://localhost:3000/todoList");
    if (!response.ok) {
      throw new Error("Failed to fetch new data");
    }
    const data = await response.json();
    data.forEach((item) => {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("parentDivStyle");
      const checkBoxParent = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      const para = document.createElement("p");
    
      // para.classList.add("typing-demo");
      const span = document.createElement("span");
      const listItems = document.createElement("li");
      const wrapperBtn = document.createElement("div");
      const delBtn = document.createElement("button");
      delBtn.classList.add("delBtn");
      const editBtn = document.createElement("button");
      para.textContent = item.todoItems;
      delBtn.classList.add("btn");
      editBtn.classList.add("btn");
      delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
      checkbox.addEventListener("click", () => {
        listItems.classList.toggle("checked", checkbox.checked);
      });
      delBtn.addEventListener("click", () => deleteData(item.id));
      editBtn.addEventListener("click", () => editData(item.id));
      todoList.appendChild(listItems);
      listItems.appendChild(parentDiv);
      parentDiv.appendChild(para);
      parentDiv.appendChild(wrapperBtn);
      parentDiv.appendChild(checkBoxParent);
      checkBoxParent.appendChild(checkbox);
      checkBoxParent.appendChild(span);
      wrapperBtn.appendChild(editBtn);
      wrapperBtn.appendChild(delBtn);
    });
  } catch (error) {
    console.error(error);
  }
};

const editData = async (itemId) => {
  try {
    // Fetch the data for the specified item ID
    const editResponse = await fetch(
      `http://localhost:3000/todoList/${itemId}`,
      {
        method: "GET",
      }
    );

    if (!editResponse.ok) {
      throw new Error("Failed to fetch data for editing");
    }

    // Extract the data from the response
    const data = await editResponse.json();

    // Prompt the user for a new value
    let userEdit = prompt("", data.todoItems);

    // Check if the user entered a value
    if (userEdit !== null && userEdit !== "") {
      // Update the data with the new value
      data.todoItems = userEdit;

      // Make a PUT request to update the data on the server
      const response = await fetch(`http://localhost:3000/todoList/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      // Refresh the todo list after updating
      // showTodoList();
    } else {
      // User did not change anything
      alert("User did not change anything");
    }
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
