console.log("Content script loaded");

const updateTgColElements = () => {
  const listings = document.getElementsByTagName(
    "tm-property-premium-listing-card"
  );

  for (let i = 0; i < listings.length; i++) {
    const listing = listings[i];
    const listingId = listing.firstElementChild
      .getAttribute("data-aria-id")
      .split("-")[1];

    const addressSubtitle = listing.querySelector(
      "tm-property-search-card-address-subtitle"
    );
    addressSubtitle.style.color = "blue";

    const listedDateContainer = listing.getElementsByClassName(
      "tm-property-premium-listing-card__pre-title-container"
    )[0];

    const button = document.createElement("button");
    button.textContent = "Hide Listing";
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("BLOCKED", listingId);
    });

    listedDateContainer.appendChild(button);
  }
};

updateTgColElements();
