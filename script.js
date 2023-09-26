const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];

function getCheckbox(checkboxName) {
  return checkboxes.find(({ name }) => name === checkboxName);
}

function getDiscarded(selected) {
  if (selected === "good" && getCheckbox("cheap").checked) return "fast";
  if (selected === "fast" && getCheckbox("good").checked) return "cheap";
  if (selected === "cheap" && getCheckbox("fast").checked) return "good";
}

function pickTwoServices({ target: { checked, name } }) {
  const discarded = getDiscarded(name);
  if (discarded && checked) getCheckbox(discarded).checked = false;
}

checkboxes.forEach((el) => el.addEventListener("change", pickTwoServices));