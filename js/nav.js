(function () {
  var button = document.querySelector(".nav-button");
  var nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  var label = button.querySelector(".nav-label");

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    if (label) label.textContent = open ? "Close" : "Menu";
  }

  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  var desktop = window.matchMedia("(min-width: 760px)");
  function closeOnDesktop() {
    if (desktop.matches) setOpen(false);
  }
  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", closeOnDesktop);
  } else if (typeof desktop.addListener === "function") {
    desktop.addListener(closeOnDesktop);
  }
})();
