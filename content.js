console.log("Content script loaded");

const updateTgColElements = () => {
  const listings = document.getElementsByTagName(
    "tm-property-premium-listing-card"
  );

  for (let i = 0; i < listings.length; i++) {
    const listing = listings[i];
    const addressSubtitle = listing.querySelector(
      "tm-property-search-card-address-subtitle"
    );
    if (addressSubtitle) {
      addressSubtitle.style.color = "blue";
    }
  }
};

updateTgColElements();
