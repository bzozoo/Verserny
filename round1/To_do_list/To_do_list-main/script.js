window.onload = function () {
  //Ez azért kell, mert kell idő a DOM-nak betöltődéséhez

  let template =
    document.getElementById("task-template").content.firstElementChild;
  let mainTaskList = document.getElementById("main-list");
  let addBtn = document.getElementById("add");
  let textInput = document.getElementById("input");
  let finishedList = document.getElementById("finished-list");
  let taskCount = document.getElementById("count");
  let count = 0;
  let taskList = [];
  function addTask() {
    if (textInput.value.length > 0) {
      let newTask = document.createElement("li");
      newTask = template.cloneNode(true);
      newTask.id = taskList.length;
      newTask.querySelector(".task-text").innerHTML = textInput.value;
      let deleteBtn = newTask.querySelector("#deletebutton");
      deleteBtn.addEventListener("click", function () {
        deleteTask(newTask);
      });

      let editBtn = newTask.querySelector("#editbutton");
      editBtn.addEventListener("click", () => editTask(newTask));
      let checkbox = newTask.querySelector(".task-checkbox");
      checkbox.addEventListener("click", () => checkTask(newTask));
      taskList.push(newTask);
      mainTaskList.append(newTask);
      count++;
      taskCount.innerHTML = count;
    } else {
      textInput.placeholder = "This field can't be empty!";
      textInput.classList.add("error");
    }
  }

  function deleteTask(task) {
    taskList.forEach((elem) => {
      if (task.id == elem.id) {
        elem.remove();
        taskList.splice(taskList.indexOf(elem), 1);
      }
    });
    taskList.forEach((elem, idx) => (elem.id = idx));
    //check checkbox state
    if (!task.querySelector(".task-checkbox").checked) {
      count--;
    }
    taskCount.innerHTML = count;
  }

  function editTask(task) {
    //Select element with class "task-text" in children of task and make it hidden
    taskNodes = task.children[0];
    taskNodes.querySelector(".task-text").style.display = "none";
    let editor = document.createElement("input");
    taskNodes.insertBefore(editor, taskNodes.querySelector(".task-text"));
    taskNodes.querySelector("#editbutton").style.display = "none";
    let confirmBtn = taskNodes.querySelector("#confirm");
    confirmBtn.style.display = "inline-block";
    //Add event listener to confirm button
    confirmBtn.addEventListener("click", () => {
      taskNodes.querySelector(".task-text").style.display = "block";
      taskNodes.querySelector("#editbutton").style.display = "inline-block";
      taskNodes.querySelector("#confirm").style.display = "none";
      taskNodes.querySelector(".task-text").innerHTML = editor.value;
      editor.remove();
    });
  }
  function checkTask(task) {
    let isChecked = task.querySelector(".task-checkbox").checked;
    if (isChecked) {
      task.querySelector(".task-text").style.textDecoration = "line-through";
      finishedList.append(task);
      count--;
      taskCount.innerHTML = count;
    } else {
      task.querySelector(".task-text").style.textDecoration = "none";
      mainTaskList.append(task);
      count++;
      taskCount.innerHTML = count;
    }
  }

  textInput.addEventListener("click", () => {
    textInput.classList.remove("error");
  });
  addBtn.addEventListener("click", addTask);
};
