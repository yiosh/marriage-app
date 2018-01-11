<?php

// Check for submit
if(isset($_POST['submit-guest'])) {
  require('../config/db.php');
  require('../config/config.php');
  // Get form data
  $name = mysqli_real_escape_string($conn, $_POST['nome']);
  $lastName = mysqli_real_escape_string($conn, $_POST['cognome']);
  $adults = mysqli_real_escape_string($conn, $_POST['adulti']);
  $babies = mysqli_real_escape_string($conn, $_POST['bambini']);
  $highchair = mysqli_real_escape_string($conn, $_POST['seggioloni']);
  $intolerant = mysqli_real_escape_string($conn, $_POST['note_intolleranze']);

  $query = "INSERT INTO fl_tavoli_commensali(nome, cognome, adulti, bambini, seggioloni, note_intolleranze) VALUES('$name', '$lastName', '$adults', '$babies', '$highchair', '$intolerant')";

  if(mysqli_query($conn, $query)) {
    header('Location: '.ROOT_URL.'');
  } else {
    echo 'ERROR: '.mysqli_error($conn);
  }
}

// Free Result
mysqli_free_result($resultGuests);

// Close Connection
mysqli_close($conn);