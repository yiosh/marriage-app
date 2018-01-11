<?php 
  
  if(isset($_POST['submit-table'])) {
    require('../config/db.php');
    require('../config/config.php');
    // Get form data
    $tableName = mysqli_real_escape_string($conn, $_POST['nome_tavolo']);

    $query2 = "INSERT INTO fl_tavoli(nome_tavolo) VALUES('$tableName')";

    if(mysqli_query($conn, $query2)) {
      header('Location: '.ROOT_URL.'');
    } else {
      echo 'ERROR: '.mysqli_error($conn);
    }
  }

  // Free Result
  mysqli_free_result($resultTables);

  // Close Connection
  mysqli_close($conn);