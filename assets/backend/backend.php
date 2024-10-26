<?php
// Database configuration
$host = "localhost"; // or your database server
$username = ""; // your database username
$password = ""; // your database password
$dbname = "your_database_name"; // Replace this with your actual database name

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle AJAX request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get and sanitize input data
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];
    
    // Check if the email already exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Email already registered
        echo json_encode(["success" => false, "error" => "Email is already registered."]);
    } else {
        // Prepare to insert the new user
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT); // Hash the password
        $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $email, $hashedPassword);

        if ($stmt->execute()) {
            // Successful signup
            echo json_encode(["success" => true]);
        } else {
            // Error during insertion
            echo json_encode(["success" => false, "error" => "Error signing up."]);
        }
    }

    // Close statements and connection
    $stmt->close();
    $conn->close();
}
?>

