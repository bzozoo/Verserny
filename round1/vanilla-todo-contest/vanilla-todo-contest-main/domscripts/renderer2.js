/*
      RENDERING DYNAMIC HTML CONTENT

*/

function renderNewEvent() {
  /* NEw Event popup window */
  /* Takes no parameteres */
  let eventSection = new El("div", ["eventSection"]);
  let eventCardSection = new El("div", ["eventCardSection"]);
  let eventCard = new El("div", ["eventCard"]);
  let newEvent = new El("div", ["newEvent"]);
  let newEventError = new El("div", ["TDAnewEventError"]);
  let newEventSuccess = new El("div", ["TDAnewEventSuccess"]);
  let inputLabelContainer = new El("div", ["input_laber_container"]);
  let quitButtonDiv = new El("div", ["quitButton", "InLePa"]);
  let quitImg = new El("img", ["TDAQuitImage"], {
    src: "design/adobeXDicons/quit.png",
  });
  let windowNameDiv = new El("div", ["InLePa"]);
  let windowName = new El("h2", [], { textNode: "Új esemény" });
  windowNameDiv.appendChild(windowName);
  let newEventDateLabel = new El("label", [], {
    for: "newEventDate",
    textNode: "Esemény ideje",
  });
  let newEventDateInput = new El(
    "input",
    ["TDAinputDateData", "newEventDate", "inputmargin"],
    {
      type: "datetime-local",
    }
  );
  let newEventDetailsLabel = new El("label", [], {
    for: "newEventDetails",
    textNode: "Esemény leírása",
  });
  let newEventDetailsTextarea = new El(
    "textarea",
    ["TDATextareaInputData", "newEventDetails"],
    {
      col: 30,
      row: 10,
    }
  );
  let newSaveButtonImage = new El("img", ["TDLsaveButton"], {
    src: "design/adobeXDicons/save-xxl.png",
  });
  let newEventNameDiv = new El("div", ["newEventName", "InLePa"]);
  let newEventDateDiv = new El("div", ["newEvenDate", "InLePa"]);
  let newEventDetailsDiv = new El("div", ["newEventDetails", "InLePa"]);
  let saveButtonDiv = new El("div", ["saveButton", "InLePa"]);
  let newEventNameLabel = new El("label", [], {
    for: "newEventName",
    textNode: "Esemény neve",
  });
  let newEventNameInput = new El(
    "input",
    ["newEventName", "inputmargin", "TDAEventNameInput"],
    {
      type: "text",
    }
  );
  newEventDateDiv.appendChild(newEventDateLabel).appendChild(newEventDateInput);
  newEventDetailsDiv
    .appendChild(newEventDetailsLabel)
    .appendChild(newEventDetailsTextarea);
  saveButtonDiv.appendChild(newSaveButtonImage);

  quitButtonDiv.appendChild(quitImg);
  newEventNameDiv.appendChild(newEventNameLabel);
  newEventNameDiv.appendChild(newEventNameInput);
  inputLabelContainer
    .appendChild(quitButtonDiv)
    .appendChild(windowNameDiv)
    .appendChild(newEventError)
    .appendChild(newEventSuccess)
    .appendChild(newEventNameDiv)
    .appendChild(newEventDateDiv)
    .appendChild(newEventDetailsDiv)
    .appendChild(saveButtonDiv);
  newEvent.appendChild(inputLabelContainer);
  eventCard.appendChild(newEvent);
  eventCardSection.appendChild(eventCard);
  eventSection.appendChild(eventCardSection);

  renderFallback(eventSection);
}

function renderModifyEvent(e) {
  /*
  Renders modify event popup window
  Takes an HTML Event object as parameter
  */
  let dataSource = e.target.nextSibling.defaultValue;
  let data = JSON.parse(e.target.nextSibling.defaultValue);
  updateCache(dataSource);

  let eventSection = new El("div", ["eventSection"]);
  let eventCardSection = new El("div", ["eventCardSection"]);
  let eventCard = new El("div", ["eventCard"]);
  let newEvent = new El("div", ["newEvent"]);
  let newEventError = new El("div", ["TDAnewEventError"]);
  let newEventSuccess = new El("div", ["TDAnewEventSuccess"]);
  let inputLabelContainer = new El("div", ["input_laber_container"]);
  let quitButtonDiv = new El("div", ["quitButton", "InLePa"]);
  let quitImg = new El("img", ["TDAQuitImage"], {
    src: "design/adobeXDicons/quit.png",
  });
  let windowNameDiv = new El("div", ["InLePa"]);
  let windowName = new El("h2", [], { textNode: "Esemény módosítása" });
  windowNameDiv.appendChild(windowName);
  let newEventDateLabel = new El("label", [], {
    for: "newEventDate",
    textNode: "Esemény ideje:",
  });
  let newEventDateInput = new El(
    "input",
    ["TDAinputDateData", "newEventDate", "inputmargin"],
    {
      type: "datetime-local",
      value: data.date.replace(" ", "T"),
    }
  );
  let newEventDetailsLabel = new El("label", [], {
    for: "newEventDetails",
    textNode: "Esemény leírása",
  });
  let newEventDetailsTextarea = new El(
    "textarea",
    ["TDATextareaInputData", "newEventDetails"],
    {
      col: 30,
      row: 10,
      textNode: data.description,
    }
  );
  let newSaveButtonImage = new El("img", ["TDLupdateButton"], {
    src: "design/adobeXDicons/save-xxl.png",
  });
  let newEventNameDiv = new El("div", ["newEventName", "InLePa"]);
  let newEventDateDiv = new El("div", ["newEvenDate", "InLePa"]);
  let newEventDetailsDiv = new El("div", ["newEventDetails", "InLePa"]);
  let saveButtonDiv = new El("div", ["saveButton", "InLePa"]);
  let newEventNameLabel = new El("label", [], {
    for: "newEventName",
    textNode: "Esemény neve",
  });
  let newEventNameInput = new El(
    "input",
    ["newEventName", "inputmargin", "TDAEventNameInput"],
    {
      type: "text",
      value: data.title,
    }
  );
  newEventDateDiv.appendChild(newEventDateLabel).appendChild(newEventDateInput);
  newEventDetailsDiv
    .appendChild(newEventDetailsLabel)
    .appendChild(newEventDetailsTextarea);
  saveButtonDiv.appendChild(newSaveButtonImage);

  quitButtonDiv.appendChild(quitImg);
  newEventNameDiv.appendChild(newEventNameLabel);
  newEventNameDiv.appendChild(newEventNameInput);
  inputLabelContainer
    .appendChild(quitButtonDiv)
    .appendChild(windowNameDiv)
    .appendChild(newEventError)
    .appendChild(newEventSuccess)
    .appendChild(newEventNameDiv)
    .appendChild(newEventDateDiv)
    .appendChild(newEventDetailsDiv)
    .appendChild(saveButtonDiv);
  newEvent.appendChild(inputLabelContainer);
  eventCard.appendChild(newEvent);
  eventCardSection.appendChild(eventCard);
  eventSection.appendChild(eventCardSection);

  renderFallback(eventSection);
}

function formatDate(e) {
  /* Formats data input into useful conent */
  /* Takes a sting input as a parameter */
  let timeData = e.date.split(" ");
  let days = timeData[0];
  let hour = timeData[1];
  let daysAndMonths = days.split("-");
  let day = daysAndMonths[2];
  if (day.startsWith("0")) {
    day = day.replace("0", "");
  }
  if (day.startsWith("0")) {
    day = day.replace("0", "");
  }
  let monthNumber = daysAndMonths[1];
  let monthName = "";
  switch (monthNumber) {
    case "01":
      monthName = "Január";
      break;
    case "02":
      monthName = "Feburár";
      break;
    case "03":
      monthName = "Március";
      break;
    case "04":
      monthName = "Április";
      break;
    case "05":
      monthName = "Május";
      break;
    case "06":
      monthName = "Június";
      break;
    case "07":
      monthName = "Július";
      break;
    case "08":
      monthName = "Augusztus";
      break;
    case "09":
      monthName = "Szeptember";
      break;
    case "10":
      monthName = "Október";
      break;
    case "11":
      monthName = "November";
      break;
    case "12":
      monthName = "December";
      break;
  }
  return {
    monthName: monthName,
    hour: hour,
    day: day,
  };
}

function renderEvent(e) {
  let hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("value", JSON.stringify(e));
  hiddenInput.setAttribute("name", "_data");

  let hiddenInput2 = document.createElement("input");
  hiddenInput2.setAttribute("type", "hidden");
  hiddenInput2.setAttribute("value", JSON.stringify(e));
  hiddenInput2.setAttribute("name", "_data");

  // depth = 1
  let savedEventCardDiv = document.createElement("div");
  savedEventCardDiv.classList.add("savedEventCard");
  // depth = 2
  let deleteIconDiv = document.createElement("div");
  deleteIconDiv.classList.add("deleteIcon");
  let savedEventCardMainDiv = document.createElement("div");
  savedEventCardMainDiv.classList.add("savedEventCardMain");
  let updateIconDiv = document.createElement("div");
  updateIconDiv.classList.add("deleteIcon");
  // depth = 3
  let deleteIconImg = document.createElement("img");
  deleteIconImg.classList.add("TDAdeleteIcon");
  deleteIconImg.src =
    "design/adobeXDicons/recycling-bin-vector-delete-icon-png-black-11563002079w1isxqyyiv.png";
  let calendarDiv = document.createElement("div");
  calendarDiv.classList.add("calendar");
  let eventCardContentDiv = document.createElement("div");
  eventCardContentDiv.classList.add("eventCardContent");
  let updateIconImg = document.createElement("img");
  updateIconImg.classList.add("TDAupdateIcon");
  updateIconImg.src = "design/adobeXDicons/clipart2188720.png";
  // depth = 4
  let calendarBodyDiv = document.createElement("div");
  calendarBodyDiv.classList.add("calendarBody");

  let eventCardContentTitleDiv = document.createElement("div");
  eventCardContentTitleDiv.classList.add("EventCardContentTitle");

  let eventCardContentDescriptionDiv = document.createElement("div");
  eventCardContentDescriptionDiv.classList.add("EventCardContentDescription");

  // depth = 5
  let monthSpan = document.createElement("span");
  monthSpan.classList.add("month-name");
  monthSpan.innerHTML = formatDate(e).monthName;
  let daySpan = document.createElement("span");
  daySpan.classList.add("day-name");
  daySpan.innerHTML = formatDate(e).day;
  let dateNameSpan = document.createElement("span");
  dateNameSpan.classList.add("data-name");
  dateNameSpan.innerHTML = formatDate(e).hour;

  let eventCardContentPTitle = document.createElement("p");
  eventCardContentPTitle.classList.add("EventCardContentP");
  eventCardContentPTitle.classList.add("savenEventTitle");
  eventCardContentPTitle.innerHTML = e.title;

  let eventCardContentDescriptionP = document.createElement("p");
  eventCardContentDescriptionP.classList.add("EventCardContentP");
  eventCardContentDescriptionP.innerHTML = e.description;

  // depth 4 assembly
  calendarBodyDiv.appendChild(monthSpan);
  calendarBodyDiv.appendChild(daySpan);
  calendarBodyDiv.appendChild(dateNameSpan);
  eventCardContentTitleDiv.appendChild(eventCardContentPTitle);
  eventCardContentDescriptionDiv.appendChild(eventCardContentDescriptionP);
  // depth 3 assembly
  calendarDiv.appendChild(calendarBodyDiv);
  eventCardContentDiv.appendChild(eventCardContentTitleDiv);
  eventCardContentDiv.appendChild(eventCardContentDescriptionDiv);
  eventCardContentDescriptionDiv.appendChild(eventCardContentDescriptionP);
  // depth 2 assembly
  deleteIconDiv.appendChild(deleteIconImg);
  deleteIconDiv.appendChild(hiddenInput2);
  savedEventCardMainDiv.appendChild(calendarDiv);
  savedEventCardMainDiv.appendChild(eventCardContentDiv);
  updateIconDiv.appendChild(updateIconImg);
  updateIconDiv.appendChild(hiddenInput);
  // depth 1 assembly

  savedEventCardDiv.appendChild(deleteIconDiv);
  savedEventCardDiv.appendChild(savedEventCardMainDiv);
  savedEventCardDiv.appendChild(updateIconDiv);

  // adding child element to the containing div
  document
    .querySelector(".savedEventCardContainer")
    .appendChild(savedEventCardDiv);

  // .append(document.querySelector(".eventSection"));
}

function renderError(message = "") {
  document.querySelector(".TDAnewEventError").innerHTML = message;
}

function renderSuccess() {
  document.querySelector(".TDAnewEventSuccess").innerHTML = "Sikeres mentés!";
}

function emptyAllEvents() {
  document.querySelector(".savedEventCardContainer").innerHTML = "";
}

function renderNewEventDone() {
  emptyInProcessFlag();
  removeFallback();
}

function removeFallback() {
  //remove styling
  document.querySelector("body").classList.remove("TDAFallbackOn");
  // remove element
  document.querySelector(".fallback").remove();
}

function renderFallback(contentElement) {
  // instering fallback
  if (!document.querySelector(".fallback")) {
    new El("div", ["fallback"])
      .append(document.querySelector("body"))
      .appendChild(contentElement);

    // styling
    document.querySelector("body").classList.add("TDAFallbackOn");
  }
}

function renderAllCurrentEvents(e) {
  let currentFile = window.location.pathname.split("/").pop();
  let todoStorage = JSON.parse(window.localStorage.getItem("todoList"));
  if (currentFile === "newEvent.html") {
    emptyAllEvents();

    if (todoStorage) {
      todoStorage.events.forEach(function (e) {
        if (e.active == "true") {
          renderEvent(e);
        }
      });
    }
  }
  if (currentFile === "history.html") {
    emptyAllEvents();
    if (todoStorage) {
      todoStorage.events.forEach(function (e) {
        if (e.active == "false") {
          renderEvent(e);
        }
      });
    }
  }
}
