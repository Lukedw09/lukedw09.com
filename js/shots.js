(function () {
  var dialog = document.getElementById("shot-dialog");
  var picture = dialog && dialog.querySelector("img");
  var closeButton = dialog && dialog.querySelector(".shot-close");
  if (!dialog || !picture || !closeButton || !dialog.showModal) return;

  var opener = null;

  function openShot(button) {
    var source = button.querySelector("img");
    if (!source) return;
    picture.src = source.currentSrc || source.getAttribute("src");
    picture.alt = source.alt;
    picture.width = Number(source.getAttribute("width")) || source.naturalWidth;
    picture.height = Number(source.getAttribute("height")) || source.naturalHeight;
    opener = button;
    dialog.showModal();
  }

  var shots = document.querySelectorAll(".shot");
  for (var i = 0; i < shots.length; i++) {
    shots[i].addEventListener("click", function () {
      openShot(this);
    });
  }

  closeButton.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", function () {
    picture.removeAttribute("src");
    picture.alt = "";
    if (opener && typeof opener.focus === "function") opener.focus();
    opener = null;
  });
})();
