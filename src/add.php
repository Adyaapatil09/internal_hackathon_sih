<?php
// Load the existing data from listings.json
$listings = json_decode(file_get_contents('listings.json'), true);

// Get form data
$name = $_POST['name'];
$quantity = (int)$_POST['quantity'];
$price = (float)$_POST['price'];
$image = $_POST['image'];

// Create a new listing
$newListing = [
    'name' => $name,
    'quantity' => $quantity,
    'price' => $price,
    'image' => $image,
];

// Add the new listing to the existing data
$listings[] = $newListing;

// Save the updated data back to listings.json
file_put_contents('listings.json', json_encode($listings));

// Respond with success
echo json_encode(['status' => 'success']);
?>
