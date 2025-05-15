function changeText() {
    const textElement = document.getElementById("changeable-text");
    textElement.textContent = "The text has been changed!";
  }
  
  function toggleStyle() {
    const body = document.body;
    body.style.backgroundColor =
      body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
  }
  
  function addElement() {
    const ul = document.getElementById("item-list");
    const li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
  }
  
  function removeElement() {
    const ul = document.getElementById("item-list");
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }
  }
  