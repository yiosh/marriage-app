<?php
  require('db.config.php');
  // Create Query
  $queryTables = $conn->prepare('SELECT * FROM fl_tavoli');
  $queryTables->execute();
  // Fetch results
  $tables = $queryTables->fetchAll();

  $queryGuests = $conn->prepare('SELECT * FROM fl_tavoli_commensali');// WHERE tavolo_id<>0
  $queryGuests->execute();
  // Fetch results
  $guests = $queryGuests->fetchAll();