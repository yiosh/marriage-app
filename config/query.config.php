<?php
  require('db.config.php');
  // Create Query
  $queryTables = $conn->prepare('SELECT * FROM fl_tavoli');
  $queryTables->execute();
  // Fetch results
  $tables = $queryTables->fetchAll();

  $queryGuests = $conn->prepare('SELECT * FROM fl_tavoli_commensali');
  $queryGuests->execute();
  // Fetch results
  $guests = $queryGuests->fetchAll();

  // // Get Result
  // $tables = $queryTables->fetch(PDO::FETCH_ASSOC);
  // $guests = $queryGuests->fetch(PDO::FETCH_ASSOC);

  // // Create Query
  // $queryTables = 'SELECT * FROM fl_tavoli';
  // $queryGuests = 'SELECT * FROM fl_tavoli_commensali';

  // // Get Result
  // $resultTables = mysqli_query($conn, $queryTables);
  // $resultGuests = mysqli_query($conn, $queryGuests);

  // // Fetch Data
  // $tables = mysqli_fetch_all($resultTables, MYSQLI_ASSOC);
  // $guests = mysqli_fetch_all($resultGuests, MYSQLI_ASSOC);
  // // var_dump($tables);

  // // Free Result
  // mysqli_free_result($resultTables);

  // // Close Connection
  // mysqli_close($conn);