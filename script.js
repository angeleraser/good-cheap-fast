const checkboxes = Array.from(document.querySelectorAll("input[name]"));

const services = {
  good: false,
  cheap: false,
  fast: false,
};

function getDiscarded(selected) {
  if (selected === "good" && services.cheap) {
    return "fast";
  }

  if (selected === "fast" && services.good) {
    return "cheap";
  }

  if (selected === "cheap" && services.fast) {
    return "good";
  }
}

function pickTwoServices({ target: { checked, name } }) {
  services[name] = checked;
  const discarded = getDiscarded(name);

  if (!services[name] || !discarded) return;

  services[discarded] = false;
  checkboxes.find(({ name }) => name === discarded).checked = false;
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", pickTwoServices);
});