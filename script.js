"use strict";

let enterButton = document.getElementById("enter");
let ul = document.getElementById("ul");
let input = document.getElementById("userInput");
let item = document.getElementsByTagName("li");
let generator = document.getElementById("gerar");

function inputlength() {
  return input.value.length;
}

function createListenElemente() {
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);

  let dbtn = document.createElement("button");
  dbtn.appendChild(document.createTextNode("X"));
  li.appendChild(dbtn);
  dbtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }

  const lea = li.innerText;
}

generator.addEventListener("click", function () {
  let pegarDados = document.getElementById("ul").innerHTML;

  let janela = window.open("", "", "width=800, height=600");

  janela.document.write("<html><head>");
  janela.document.write("<title>Gerador PDF</title></head>");
  janela.document.write("<body>");
  janela.document.write(pegarDados);
  janela.document.write("</body></html>");
  janela.document.close();
  janela.print();
});

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
  if (inputlength() > 0) {
    createListenElemente();
  }
}

function addListAfterKeypress() {
  if (inputlength() > 0 && event.keyCode === 13) {
    createListenElemente();
  }
}
