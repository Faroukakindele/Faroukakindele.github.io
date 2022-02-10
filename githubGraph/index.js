//Add squares

const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
  const level = Math.floor(Math.random() * 3);  
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);

  let liElement = document.createElement("li")
  liElement.setAttribute("data-level", level)
  squares.appendChild(liElement)
  squares.insertAdjacentHTML("beforeend", liElement)
}
