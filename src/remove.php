<?php
// Load the existing data from listings.json
$listings = json_decode(file_get_contents('listings.json'), true);

// Get the index of the listing to remove from the POST request
$index = (int)$_POST['index'];

// Check if the index is valid
if (isset($listings[$index])) {
    // Remove the listing at the specified index
    array_splice($listings, $index, 1);

    // Save the updated data back to listings.json
    file_put_contents('listings.json', json_encode($listings));

    // Respond with success
    echo json_encode(['status' => 'success']);
} else {
    // Respond with an error if the index is invalid
    echo json_encode(['status' => 'error']);
}
?>
