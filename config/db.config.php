<?php
//  // Create Connection
//   $conn = mysqli_connect('localhost', 'root', 'Quemex28!', 'db_calderoni');

//   // Check Connection
//   if(mysqli_connect_errno()) {
//     // Connection failes
//     echo 'Failed to connect to MySQL '. mysql_connect_errno();
//   }

  // class Dbh {
  //   private $serverName;
  //   private $username;
  //   private $password;
  //   private $dbName;
  //   private $charset;

  //   public function connect() {
  //     $this->serverName = "localhost";
  //     $this->username = "root";
  //     $this->password = "Quemex28!";
  //     $this->dbName = "db_calderoni";
  //     $this->charset = "utf8mb4";

  //     try {
  //       $dsn = "mysql:host=".$this->serverName.";dbname=".$this->dbName.";charset=".$this->charset;
  //       $pdo = new PDO(
  //         $dsn,
  //         $this->username,
  //         $this->password
  //       );
  //       $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //       return $pdo;
  //     } catch (PDOException $e) {
  //       echo "Connection failed: ".$e->getMessage();
  //     }

  //   }
  // }

 
  $DB_host = "localhost";
  $DB_user = "root";
  $DB_pass = "Quemex28!";
  $DB_name = "db_calderoni";
  
  // Create and check Connection
  try {
     $conn = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 } catch(PDOException $e) {
    // Connection failes
    echo "ERROR : ".$e->getMessage();
 }
