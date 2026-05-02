const test = function() {
  const p = document.createElement("p");
  p.style.color = "red";
  p.textContent = "Hey I'm red";
  document.body.appendChild(p);
  const div = document.createElement("div");
  div.style.border = "1px solid black";
  div.style.background = "pink";
  const h1 = document.createElement("h1");
  h1.textContent = "I'm in a div";
  div.appendChild(h1);
  const p1 = document.createElement("p");
  p1.textContent= "ME TOO";
  div.appendChild(p1);
  document.body.appendChild(div);
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.style.background = "blue";
      alert(button.id);
    });
    let clickEvent = new Event('click');
    button.dispatchEvent(clickEvent);
});
}
test();