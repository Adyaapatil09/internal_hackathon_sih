<!-- <?php
// Simulated data for demonstration
$produceListings = [
    [
        'name' => 'Tomatoes',
        'quantity' => 50,
        'price' => 20.0,
        'image' => 'https://example.com/tomatoes.jpg',
    ],
    [
        'name' => 'Apples',
        'quantity' => 30,
        'price' => 80.0,
        'image' => 'https://example.com/apples.jpg',
    ],
    [
        'name' => 'Bananas',
        'quantity' => 40,
        'price' => 35.0,
        'image' => 'https://example.com/bananas.jpg',
    ],
    [
        'name' => 'Carrots',
        'quantity' => 25,
        'price' => 45.0,
        'image' => 'https://example.com/carrots.jpg',
    ],
    [
        'name' => 'Strawberries',
        'quantity' => 20,
        'price' => 150.0,
        'image' => 'https://example.com/strawberries.jpg',
    ],
    [
        'name' => 'Spinach',
        'quantity' => 15,
        'price' => 70.0,
        'image' => 'https://example.com/spinach.jpg',
    ],
    [
        'name' => 'Oranges',
        'quantity' => 35,
        'price' => 50.0,
        'image' => 'https://example.com/oranges.jpg',
    ],
    [
        'name' => 'Cucumbers',
        'quantity' => 30,
        'price' => 40.0,
        'image' => 'https://example.com/cucumbers.jpg',
    ],
    [
        'name' => 'Potatoes',
        'quantity' => 40,
        'price' => 35.0,
        'image' => 'https://example.com/potatoes.jpg',
    ],
    [
        'name' => 'Onions',
        'quantity' => 25,
        'price' => 25.0,
        'image' => 'https://example.com/onions.jpg',
    ],
    [
        'name' => 'Bell Peppers',
        'quantity' => 20,
        'price' => 80.0,
        'image' => 'https://example.com/bell_peppers.jpg',
    ],
    [
        'name' => 'Lettuce',
        'quantity' => 30,
        'price' => 45.0,
        'image' => 'https://example.com/lettuce.jpg',
    ],
    [
        'name' => 'Grapes',
        'quantity' => 25,
        'price' => 180.0,
        'image' => 'https://example.com/grapes.jpg',
    ],
];

// Send the produce listings as JSON response
header('Content-Type: application/json');
echo json_encode($produceListings);
?> -->

<?php
// Load the JSON data from listings.json
$listings = json_decode(file_get_contents('listings.json'), true);

// Output the JSON data as a response
header('Content-Type: application/json');
echo json_encode($listings);
?>