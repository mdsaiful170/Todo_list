//sellect all id
let todoInput = document.getElementById("addToListInput");
let addTodoBtn = document.getElementById("addTodoBtn");
let todoList = document.querySelector("#todo-list");

function addAllTodo() {
  let todoInText = todoInput.value.trim();
  if (todoInText === "") return;

  // carte a list tag
  let li = document.createElement("li");
  li.className =
    " flex items-start justify-between gap-4 rounded-md bg-transparent  py-2 border border-stone-300 dark:border-slate-700 my-2 px-[5px]";

  // create a span tag
  let span = document.createElement("span");
  span.textContent = todoInText;
  span.className =
    "flex-grow border-e border-e-stone-400 dark:border-e-slate-700";
  li.appendChild(span);

  // create edit button
  let editBtn = document.createElement("button");
  editBtn.className = "text-fuchsia-500 hover:text-blue-500 text-lg font-bold";
  editBtn.innerHTML = `<i class="ri-edit-fill"></i>`;
  li.appendChild(editBtn);

  // create update button
  let updateBtn = document.createElement("button");
  updateBtn.className =
    "text-fuchsia-500 hover:text-blue-500 text-lg font-bold";
  updateBtn.setAttribute("id", "updateNow");
  updateBtn.innerHTML = `<i class="ri-refresh-line"></i>`;
  li.appendChild(updateBtn);

  // create a delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "text-fuchsia-600 hover:text-red-500 font-bold text-lg";
  deleteBtn.innerHTML = `<i class="ri-delete-bin-5-fill"></i>`;
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  todoInput.value = "";

  // callback editNow with argument
  editBtn.addEventListener("click", () => {
    eidtNow(li, span);
  });

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    deletNow(li);
  });
}

//list add with button click
addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("Please fill in the input field!😆");
    todoInput.focus();
  } else {
    todoInput.focus();
    return addAllTodo();
  }
});

//list add with keybord enter
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (todoInput.value === "") {
      alert("Please fill in the input field!😃");
      todoInput.focus();
    } else {
      todoInput.focus();
      return addAllTodo();
    }
  }
});

// callback funciton parramatta
function eidtNow(li, span) {
  // create textarea tag
  let eidtInputBox = document.createElement("textarea");

  //get update button
  let upDateButton = document.getElementById("updateNow");

  eidtInputBox.setAttribute("type", "text");
  eidtInputBox.value = span.textContent;
  eidtInputBox.classList =
    "outline-none bg-transparent border-2 rounded-md w-full border-transparent focus:border-blue-600 text-lg font-spaceMono";
  li.replaceChild(eidtInputBox, span);
  eidtInputBox.focus();

  //Remove focus from a text field auto set new value
  eidtInputBox.addEventListener("blur", () => {
    span.textContent = eidtInputBox.value;
    li.replaceChild(span, eidtInputBox);

    // success msg
    let div = document.createElement("div");
    let manibox = document.querySelector("#main");
    div.textContent = "Edite SuccessFully";
    div.className =
      "font-bold text-xl lg:text-xl text-green-500   text-center absolute top-[4.5rem]";
    manibox.appendChild(div);
    setTimeout(() => {
      manibox.removeChild(div);
    }, 1000);
  });

  // keyboard enter set new value

  eidtInputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      span.textContent = eidtInputBox.value;
      li.replaceChild(span, eidtInputBox);

      let div = document.createElement("div");
      let manibox = document.querySelector("#main");
      div.textContent = "Edite SuccessFully";
      div.className =
        "font-bold text-xl lg:text-xl text-green-500   text-center absolute top-[4.5rem]";
      manibox.appendChild(div);
      setTimeout(() => {
        manibox.removeChild(div);
      }, 1000);
    }
    //success msg
    let div = document.createElement("div");
    let manibox = document.querySelector("#main");
    div.textContent = "Edite SuccessFully";
    div.className =
      "font-semibold text-xl lg:text-xl text-green-500   text-center absolute top-[4.5rem]";
    manibox.appendChild(div);
    setTimeout(() => {
      manibox.removeChild(div);
    }, 1000);
  });

  upDateButton.addEventListener("click", (e) => {
    e.preventDefault();
    span.textContent = eidtInputBox.value;
    li.replaceChild(span, eidtInputBox);

    // success msg
    let div = document.createElement("div");
    let manibox = document.querySelector("#main");
    div.textContent = "Edite SuccessFully";
    div.className =
      "font-semibold text-xl lg:text-xl text-green-500   text-center";
    manibox.appendChild(div);
    setTimeout(() => {
      manibox.removeChild(div);
    }, 1000);
  });
}

// delete list item
function deletNow(li) {
  todoList.removeChild(li);

  let div = document.createElement("div");
  let manibox = document.querySelector("#main");
  div.textContent = "Delete SuccessFully";
  div.className =
    "font-semibold text-xl lg:text-xl text-red-500   text-center absolute top-[4.5rem]";
  manibox.appendChild(div);
  setTimeout(() => {
    manibox.removeChild(div);
  }, 2000);
}

// dark mode on fo mode with  local storage save
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-btn");
let currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  darkMode();
} else {
  lightMode();
}
themeBtn.addEventListener("click", (e) => {
  if (currentMode === "dark") {
    lightMode();
    currentMode = "light";
  } else {
    darkMode();
    currentMode = "dark";
  }
  localStorage.setItem("mode", currentMode);
});
function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-clear-fill", "ri-sun-fill");
}
function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-fill", "ri-moon-clear-fill");
}

//delete all
let alldelete = document.getElementById("all");
alldelete.addEventListener("click", () => {
  todoList.innerHTML = "";

  let div = document.createElement("div");
  let manibox = document.querySelector("#main");
  div.textContent = "All Deleted SuccessFully";
  div.className =
    "font-semibold text-xl lg:text-xl text-red-500   text-center absolute top-[4.5rem]";
  manibox.appendChild(div);
  setTimeout(() => {
    manibox.removeChild(div);
  }, 2000);
});
