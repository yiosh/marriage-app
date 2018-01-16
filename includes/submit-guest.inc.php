<?php

if(isset($_POST['submit-guest'])) {
  require('../config/db.config.php');
  require('../config/config.php');
  try {
    $stmt = $conn->prepare('INSERT INTO fl_tavoli_commensali(nome, cognome, adulti, bambini, seggioloni, note_intolleranze) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->bindParam(1, $_POST['nome']);
    $stmt->bindParam(2, $_POST['cognome']);
    $stmt->bindParam(3, $_POST['adulti']);
    $stmt->bindParam(4, $_POST['bambini']);
    $stmt->bindParam(5, $_POST['seggioloni']);
    $stmt->bindParam(6, $_POST['note_intolleranze']);
  
    $stmt->execute();
    header('Location: '.ROOT_URL.'');
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  $conn = null;
}

// // Check for submit
// if(isset($_POST['submit-guest'])) {
//   require('../config/db.php');
//   require('../config/config.php');
//   // Get form data
//   $name = mysqli_real_escape_string($conn, $_POST['nome']);
//   $lastName = mysqli_real_escape_string($conn, $_POST['cognome']);
//   $adults = mysqli_real_escape_string($conn, $_POST['adulti']);
//   $babies = mysqli_real_escape_string($conn, $_POST['bambini']);
//   $highchair = mysqli_real_escape_string($conn, $_POST['seggioloni']);
//   $intolerant = mysqli_real_escape_string($conn, $_POST['note_intolleranze']);

//   $query = "INSERT INTO fl_tavoli_commensali(nome, cognome, adulti, bambini, seggioloni, note_intolleranze) VALUES('$name', '$lastName', '$adults', '$babies', '$highchair', '$intolerant')";

//   if(mysqli_query($conn, $query)) {
//     header('Location: '.ROOT_URL.'');
//   } else {
//     echo 'ERROR: '.mysqli_error($conn);
//   }
// }

// // Free Result
// mysqli_free_result($resultGuests);

// // Close Connection
// mysqli_close($conn);