function RemoveChild() {
  let parent = document.getElementById("parent");

  for (let i = 0; (parent.children.length) - 1; i++) {
    console.log("masuk for");
    parent.removeChild(parent.firstElementChild);
  }
}

function TambahAnggota(event) {
  let input = document.getElementById("banyakAnggota");
  let value = input.value;
  let regex = /^[0-9]*$/;

  const newLi = document.createElement("li");
  newLi.setAttribute("id", "child");

  const newInput = document.createElement("input");
  newInput.setAttribute("class", "form-control mt-1");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "Nama Anggota");
  newLi.appendChild(newInput);

  let parent = document.getElementById("parent");
  let child = document.getElementById("child");

  if (event.keyCode >= 48 && event.keyCode <= 57) {
    if (regex.test(value)) {
      if (parent.contains(child)) {
        console.log("Parent contain child");
        RemoveChild();
      }
      for (let i = 0; i < value - 1; i++) {
        let clone = newLi.cloneNode(true);

        parent.appendChild(clone);
        console.log("Cloned");
      }
    }
  } else {
    event.preventDefault();
  }
}
