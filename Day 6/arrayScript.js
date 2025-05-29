const values = [10, 20, 30, 40, 50];
const output = document.getElementById("output");

values.forEach(function(value) {
  const li = document.createElement("li");
  li.textContent = value;
  output.appendChild(li);
});
