import printMe from "./print";

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.textContent = 'Hello, Webpack!';

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
