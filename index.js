const createHTML = (obj) => {
  const insert = document.getElementById("insert");
  insert.textContent = "";

  for (let key in obj) {
    const div = document.createElement("div");
    div.className = "key"
    const small = document.createElement("small");

    const text = document.createTextNode(key);
    const value = document.createTextNode(obj[key]);

    small.appendChild(text);
    div.appendChild(value);
    div.appendChild(small);
    insert.appendChild(div);
  }
}

const displayKey = (e) => {

  const keyCodes = {
    "key": e.key !== "Space" ? e.key : "Space",
    "keyCode": e.keyCode,
    "code": e.code,
  };

  createHTML(keyCodes);
};

window.addEventListener("keypress", displayKey);