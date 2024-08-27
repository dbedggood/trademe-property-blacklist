console.log("Content script loaded");

const blacklist = JSON.parse(localStorage.getItem("blacklist") ?? "[]");

const updateTgColElements = () => {
  const listings = document.getElementsByTagName("tm-search-card-switcher");

  for (let i = 0; i < listings.length; i++) {
    const listing = listings[i];

    const listingId = listing.firstElementChild.firstElementChild
      .getAttribute("data-aria-id")
      .split("-")[1];

    const addressSubtitle = listing.querySelector(
      "tm-property-search-card-address-subtitle"
    );
    addressSubtitle.style.color = "blue";

    const listedDateContainer = listing.getElementsByTagName(
      "tm-property-search-card-listed-date"
    )[0];

    const isListingBlocked = blacklist?.includes(listingId);

    if (isListingBlocked) {
      listing.style.filter = "grayscale(1)";
    }

    const button = document.createElement("button");
    button.textContent = "Hide Listing";
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (isListingBlocked) {
        console.log("ALREADY BLOCKED", listingId);
        return;
      }

      console.log("BLOCKED", listingId);
      listing.style.filter = "grayscale(1)";
      localStorage.setItem(
        "blacklist",
        JSON.stringify([...blacklist, listingId])
      );
    });

    listedDateContainer.appendChild(button);
  }
};

updateTgColElements();
