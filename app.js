(function () {
  const overlay = document.getElementById("menuOverlay");
  const openBtn = document.getElementById("menuOpen");

  function openMenu() {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu(e) {
    // chiude solo se clicchi fuori dal pannello
    if (e && e.target && e.target.dataset && e.target.dataset.panel === "true") return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (openBtn && overlay) {
    openBtn.addEventListener("click", openMenu);
    overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) closeMenu();
    });
  }
})();
