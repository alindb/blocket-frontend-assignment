function createElement(tagName, properties) {
  const element = document.createElement(tagName);
  for (property in properties) {
    element[property] = properties[property];
  }
  return element;
}

function createRow(index) {
  const li = createElement("li");
  const rowContainer = createElement("label", { className: "row-container" });
  li.appendChild(rowContainer);

  const p = createElement("p", { innerHTML: "Variable 01" });
  rowContainer.appendChild(p);

  const rowSelector = createElement("input", {
    type: "checkbox",
    className: "row-selector",
  });
  rowContainer.appendChild(rowSelector);

  const progressProcentage = 80 - index * 5;
  const progressContainer = createElement("div", {
    className: "progress-container",
  });
  const progress = createElement("div", {
    className: "progress",
    style: `width: ${progressProcentage}%`,
  });
  const span = createElement("span", { innerHTML: `${progressProcentage}%` });
  progressContainer.appendChild(progress);
  progressContainer.appendChild(span);
  rowContainer.appendChild(progressContainer);

  const customCheckboxContainer = createElement("div");
  const customCheckboxLabel = createElement("label", {
    className: "custom-checkbox-label",
  });
  const customCheckbox = createElement("input", {
    type: "checkbox",
    className: "custom-checkbox",
  });
  customCheckboxLabel.appendChild(customCheckbox);
  customCheckboxContainer.appendChild(customCheckboxLabel);
  rowContainer.appendChild(customCheckboxContainer);

  return li;
}

function createTable() {
  const table = document.getElementById("table");
  for (let i = 0; i < 17; i++) {
    table.appendChild(createRow(i));
  }
}
