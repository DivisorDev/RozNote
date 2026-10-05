document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");
  const platformCards = document.querySelectorAll(".platform-card");
  const noResults = document.getElementById("noResults");

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");


  /* MOBILE MENU */

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });


  /* CLOSE MOBILE MENU AFTER CLICK */

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuBtn.textContent = "☰";
    });
  });


  /* PLATFORM SEARCH */

  searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value
      .toLowerCase()
      .trim();

    let visibleCards = 0;

    platformCards.forEach(function (card) {

      const platformName = card
        .getAttribute("data-name")
        .toLowerCase();

      if (
        searchValue === "" ||
        platformName.includes(searchValue)
      ) {
        card.style.display = "flex";
        visibleCards++;
      } else {
        card.style.display = "none";
      }

    });


    if (visibleCards === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }

  });


  /* EXTERNAL LINK SAFETY */

  const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
  );

  externalLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      console.log(
        "Opening official platform:",
        link.href
      );

    });

  });

});
