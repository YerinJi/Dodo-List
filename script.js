document.addEventListener("DOMContentLoaded", init);
function init() {
  const submitElement = document.querySelector("#input-submit");
  const formElemet = document.querySelector("#todo-form");
  const inputElement = document.querySelector("#input-todo");
  const ulElement = document.querySelector("#todoUl");

  let updateFlag = 1;

  formElemet.addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const span2Element = document.createElement("span");

    spanElement.innerHTML = inputElement.value;
    inputElement.value = "";
    span2Element.innerHTML = "삭제";
    span2Element.setAttribute("class", "deleteIcon");

    liElement.append(spanElement);
    liElement.append(span2Element);
    ulElement.append(liElement);

    spanElement.addEventListener("click", updateList);
    span2Element.addEventListener("click", removeList);
  }

  function updateList(e) {
    if (updateFlag) {
      updateFlag = false;
    } else {
      return;
    }

    let content = e.target.innerHTML;
    e.target.innerHTML = "";

    const inputElement = document.createElement("input");
    inputElement.value = content;
    inputElement.setAttribute("class", "newinput");
    e.target.append(inputElement);

    inputElement.addEventListener("keypress", keypressHandler);
  }

  function keypressHandler(e) {
    if (e.keyCode !== 13) {
      return;
    }
    const content = e.target.value;
    let node = e.target.parentNode;
    node.innerHTML = content;

    updateFlag = true;
  }

  function removeList(e) {
    e.target.parentNode.remove();
  }
}
