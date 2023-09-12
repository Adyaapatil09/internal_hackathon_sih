// Function to fetch and display listings
function fetchAndDisplayListings() {
  fetch("show_listings.php")
    .then((response) => response.json())
    .then((data) => {
      const listingsContainer = document.getElementById("listings");

      // Clear existing listings
      listingsContainer.innerHTML = "";

      // Loop through listings and display them
      data.forEach((listing) => {
        const listingElement = document.createElement("div");
        listingElement.classList.add("produce");
        listingElement.innerHTML = `
          <img src="${listing.image}" alt="${listing.name}" />
          <h2>${listing.name}</h2>
          <p>${listing.quantity} KG</p>
          <p>₹${listing.price}</p>
          <div class="buttons">
            <button class="btn primary-btn-outline" onclick="buyListing('${listing.name}')">Buy Now</button>
            <button class="btn primary-btn-outline" onclick="addToCart('${listing.name}')">Add to Cart</button>
            <button class="btn danger-btn" onclick="removeListing('${listing.name}')">Remove</button>
          </div>
        `;
        listingsContainer.appendChild(listingElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching listings:", error);
    });
}

// Function to add a new listing
function addListing() {
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  const newListing = {
    name,
    quantity,
    price,
    image,
  };

  fetch("add_listing.php", {
    method: "POST",
    body: JSON.stringify(newListing),
  })
    .then((response) => response.json())
    .then(() => {
      fetchAndDisplayListings();
      // Clear form fields after adding
      document.getElementById("name").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("price").value = "";
      document.getElementById("image").value = "";
    })
    .catch((error) => {
      console.error("Error adding listing:", error);
    });
}

// Function to remove a listing
function removeListing(name) {
  fetch("remove_listing.php", {
    method: "POST",
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then(() => {
      fetchAndDisplayListings();
    })
    .catch((error) => {
      console.error("Error removing listing:", error);
    });

    
}

// Function to handle buying a listing
function buyListing(name) {
  // Implement buy functionality here
  alert(`You bought ${name}`);
}

// Function to handle adding to cart
function addToCart(name) {
  // Implement add to cart functionality here
  alert(`Added ${name} to cart`);
}

// Initialize by fetching and displaying listings
fetchAndDisplayListings();
