<?php
include 'connection.php'; // Include your DB connection logic

$query = "SELECT user_id, firstname, lastname, email, nationality, balance, status, phone, gender, avatar FROM users ORDER BY firstname ASC";
$result = $conn->query($query);

$users = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = [
            'user_id' => $row['user_id'],
            'name' => $row['firstname'], 
            'firstname' => $row['firstname'], 
            'lastname' => $row['lastname'], 
            'email' => $row['email'],
            'nationality' => $row['nationality'],
            'balance' => $row['balance'],
            'status' => $row['status'],
            'phone' => $row['phone'] ?? '',
            'gender' => $row['gender'] ?? '',
            'avatar' => $row['avatar'] ?: substr($row['firstname'], 0, 1) // Default avatar as the first letter of the name
        ];
    }
} else {
    echo "<p>No users found in the database.</p>";
}
?>

