let currentPage = window.location.pathname.split("/").pop();

/* ----------------------------------------------------
RENDERS THE NEW EVENT POPUP
-----------------------------------------------------*/

if (
  currentPage === "newEvent.html" ||
  currentPage === "history.html" ||
  currentPage === "search.html"
) {
  document.querySelector(".add").addEventListener("click", function () {
    renderNewEvent();
  });
}

/* ----------------------------------------------------
RENDER ELEMENTS
renders all events on browser load
-----------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  if (currentPage === "newEvent.html" || currentPage === "history.html") {
    renderAllCurrentEvents();
  }
  if (currentPage === "search.html") {
    searchEventsAndRender(getSearchCache());
  }
});

/* ---------------------------------------------------
GLOBAL HANDLERS

Global handlers will handle dynamic content events.
Responsible for:
- new event popup window with fallback
- removing fallback and its content
- delete event 
- update event

-----------------------------------------------------*/
document.body.addEventListener("click", function (e) {
  /*
  This part is responsible for making the FALLBACK disappear when clicked outside the operational area.
  */
  if (
    e.target.parentNode.classList[0] === "fallback" ||
    e.target.classList[0] === "TDAQuitImage" ||
    e.target.classList[1] === "TDAQuitImage"
  ) {
    renderNewEventDone();
  }

  if (e.target.classList[0] === "TDAupdateIcon") {
    renderModifyEvent(e);
  }

  /*
   UPDATING EVENT FOR ARCHIVING AND DELETION
  */

  if (e.target.className === "TDAdeleteIcon") {
    let dataToDisactivate = JSON.parse(e.target.nextSibling.value);
    let payloadForDisactivation = {
      eventId: dataToDisactivate.eventId,
      type: "active",
      value: false,
    };

    let modifyEventResult = modifyEvent(payloadForDisactivation);
    if (modifyEventResult.success === "true" || modifyEventResult.success) {
      window.document.dispatchEvent(
        new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: true,
        })
      );
    } else {
      alert("Cannot be deleted");
    }
  }

  /*
   UPDATING EVENT
  */
  if (
    e.target.classList[0] === "TDLupdateButton" &&
    getInProcessFlag() !== "1"
  ) {
    let oldTitle = getCache().title;
    let oldTime = getCache().date.replace("T", " ");
    let oldDescription = getCache().description;
    let newTitle = document.querySelector(".TDAEventNameInput").value;
    let newTime = document
      .querySelector(".TDAinputDateData")
      .value.replace("T", " ");
    let newDescription = document.querySelector(".TDATextareaInputData").value;
    let eventId = getCache().eventId;
    let timeChanged = oldTime !== newTime;
    let titleChanged = oldTitle !== newTitle;
    let descriptionChanged = oldDescription !== newDescription;
    let changes = [
      [timeChanged, "date", newTime],
      [titleChanged, "title", newTitle],
      [descriptionChanged, "description", newDescription],
    ];
    for (let i = 0; i <= 2; i++) {
      if (changes[i][0]) {
        let payload = {
          eventId: eventId,
          type: changes[i][1],
          value: changes[i][2],
        };
        let result = modifyEvent(payload);
        if (result.success == "false" || !result.success) {
          renderError(result.msg[0]);
        } else {
          renderError();
          renderSuccess();
          setTimeout(renderNewEventDone, 2200);
          setTimeout(
            window.document.dispatchEvent(
              new Event("DOMContentLoaded", {
                bubbles: true,
                cancelable: true,
              })
            ),
            2200
          );
        }
        break;
      }
    }
  }

  if (e.target.classList[0] === "TDLsaveButton") {
    /*
  This part is responsible for saving a new event in the DB.
  */

    if (getInProcessFlag() !== "1") {
      let newData = {
        title: document.querySelector(".TDAEventNameInput").value,
        description: document.querySelector(".TDATextareaInputData").value,
        date: document
          .querySelector(".TDAinputDateData")
          .value.replace("T", " "),
      };

      let eventCreation = createEvent(newData);
      if (eventCreation.success === "false" || !eventCreation.success) {
        renderError(eventCreation.msg[0]);
      } else {
        renderError();
        renderSuccess();
        setTimeout(renderNewEventDone, 2200);
        setTimeout(function () {
          window.document.dispatchEvent(
            new Event("DOMContentLoaded", {
              bubbles: true,
              cancelable: true,
            })
          );
        }, 2200);
      }
    }
  }
});

if (currentPage === "search.html") {
  document
    .querySelector(".searchInput")
    .addEventListener("input", function (e) {
      emptySearchCache();
      searchEventsAndRender(e.target.value);
    });
}
