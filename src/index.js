document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    updateToDoList(e.target.new_task_description.value);
    form.reset();
  });
});
const updateToDoList = function (todo) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const ul = document.querySelector("#tasks");

  // create a dropdown menu and add options for priority
  const dropdown = document.createElement("select");
  dropdown.name = "priority";
  const optionHigh = document.createElement("option");
  optionHigh.value = "high";
  optionHigh.text = "High Priority";
  const optionMedium = document.createElement("option");
  optionMedium.value = "medium";
  optionMedium.text = "Medium Priority";
  const optionLow = document.createElement("option");
  optionLow.value = "low";
  optionLow.text = "Low Priority";
  dropdown.add(optionHigh);
  dropdown.add(optionMedium);
  dropdown.add(optionLow);

  btn.addEventListener("click", function (e) {
    e.target.parentNode.remove();
  });

  btn.textContent = "Delete";
  li.textContent = `${todo}   `;
  li.appendChild(dropdown);
  li.appendChild(btn);

  // change the color of the text based on the priority value
  dropdown.addEventListener("change", function (e) {
    switch (e.target.value) {
      case "high":
        li.style.color = "red";
        break;
      case "medium":
        li.style.color = "yellow";
        break;
      case "low":
        li.style.color = "green";
        break;
    }
  });

  ul.appendChild(li);
};