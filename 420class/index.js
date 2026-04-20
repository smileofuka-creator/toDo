let container = document.getElementById("container");

function mybutton() {
  let inputElement = document.getElementById("input-text");
  let myText = inputElement.value;
  container.innerHTML = `  <div class="task-item">
                <div class="item-style">
                     <input type="checkbox">
                     <label>${myText}</label>
                </div>
                <button class="delete">Delete</button>
            </div>`;
  console.log(myText);
}
