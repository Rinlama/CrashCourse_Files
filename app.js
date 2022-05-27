const myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { food } = Object.fromEntries(formData);
  if (!food) {
    showAlert();
    return;
  }
  add(food);
  myForm.reset();
});

const add = (food) => {
  const foodListElement = document.querySelector("#food-list");
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = food;
  foodListElement.appendChild(li);
};

const showAlert = () => {
  const alertElement = document.querySelector(".alert");
  alertElement.style.display = "flex";
  setTimeout(() => {
    alertElement.style.display = "none";
  }, 1500);
};
