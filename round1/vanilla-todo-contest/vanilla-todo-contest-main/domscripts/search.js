function searchEventsAndRender(searchWord) {
  /* Takes an event Object as input */
  if (searchWord && searchWord !== "") {
    let searchLength = searchWord.length;
    let foundEvents = filterEvents({
      searchWord: searchWord,
      eventStatus: "true",
    });
    updateSearchCache(searchWord);
    emptyAllEvents();
    if (foundEvents.length > 0 && searchLength > 0) {
      foundEvents.forEach(function (e) {
        if (e.active == "true") {
          renderEvent(e);
        }
      });
    }
  } else {
    emptyAllEvents();
  }
}
