// Function to fetch and display listings
function fetchAndDisplayListings() {
  // Fetch listings data from the server using "display.php"
  fetch("display.php")
    .then((response) => response.json())
    .then((data) => {
      // Get the listings container element
      const listingsContainer = document.getElementById("listings");

      // Clear existing listings in the container
      listingsContainer.innerHTML = "";

      // Loop through the fetched listings data and display each listing
      data.forEach((listing) => {
        // Create a new HTML element for the listing
        const listingElement = document.createElement("div");
        listingElement.classList.add("produce");
        listingElement.innerHTML = `
          <img
            src="${listing.image}"
            alt="${listing.name}"
          />
          <button class="btn danger-btn" onclick="removeListing('${listing.name}')">Remove</button>
          <h2>${listing.name}</h2>
          <p>${listing.quantity}KG</p>
          <p>₹${listing.price}</p>
          <div class="buttons">
            <a onclick="buyListing('${listing.name}')" class="btn primary-btn-outline"> Buy Now </a>
            <a onclick="addToCart('${listing.name}')"  class="btn primary-btn-outline"> add to cart </a>
          </div>
        `;

        // Add the listing element to the listings container
        listingsContainer.appendChild(listingElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching listings:", error);
    });
}

// Function to remove a listing
function removeListing(xyz) {
  // Send a request to "remove.php" to remove the listing with the specified "xyz" identifier
  fetch("remove.php", {
    method: "POST",
    body: JSON.stringify({ xyz: xyz }),
  })
    .then((response) => response.json())
    .then(() => {
      // After successfully removing the listing, refresh the listings on the page
      fetchAndDisplayListings();
    })
    .catch((error) => {
      console.error("Warning removing listing:", error);
    });

  // Refresh the DOM immediately (before the response is received)
  fetchAndDisplayListings();
}

// Function to handle buying a listing (to be implemented)
function buyListing(name) {
  // Implement buy functionality here
  alert(`You bought ${name}`);
}

// Function to handle adding to cart (to be implemented)
function addToCart(name) {
  // Implement add to cart functionality here
  alert(`Added ${name} to cart`);
}

// Initialize by fetching and displaying listings when the page loads
fetchAndDisplayListings();
