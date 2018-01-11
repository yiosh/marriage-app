<?php
  require('config/query.config.php');
  require('config/config.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Marriage App</title>
  <link href="css/jquery-ui.min.css" rel="stylesheet" type="text/css">
  <link href="css/style.css" rel="stylesheet" type="text/css">
  <script defer src="js/fontawesome-all.js"></script>
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/jquery-ui.min.js"></script>
  <script src="js/script.js"></script>
</head>

<body>
  <div class="container">
    <div class="guest-section">
      <!-- GUEST MENU SECTION -->
      <div class="guest-menu">
        <div class="searchbox">
          <input type="text" class="search-txt" placeholder="Search">
          <button type="submit" class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <input type="button" class="btn add-guest" id="add-guest" value="Add Guest">
      </div>

      <div class="guest-list-header">
        <label class="list-item list-name">Name</label>
        <abbr class="list-item" title="Adult">A</abbr>
        <abbr class="list-item" title="Babies">B</abbr>
        <abbr class="list-item" title="Highchair">H</abbr>
        <abbr class="list-item" title="Intolerant">I</abbr>
        <div></div>
      </div>
      <!-- GUEST LIST SECTION -->
      <div id="guest-list" class="guest-list connectedSortable">
        <?php foreach($guests as $guest) : ?>
          <div class="guest">
            <p id="id" hidden><?php echo $guest['id']; ?></p>
            <p class="family-name"><?php echo $guest['nome']; echo " "; echo $guest['cognome']; ?></p>
            <p class="number-adults"><?php echo $guest['adulti']; ?></p>
            <p class="number-babies"><?php echo $guest['bambini']; ?></p>
            <p class="number-highchair"><?php echo $guest['seggioloni']; ?></p>
            <p class="number-intolerant"><?php echo $guest['note_intolleranze']; ?></p>
          </div>
        <?php endforeach; ?>
      </div>

      <div class="assign-btns">
        <label for="toggle-on">
          <input type="radio" id="toggle-on" name="toggle">
          <span class="btn toggle-btn">To Assign</span>
        </label>
        <label for="toggle-off">
          <input type="radio" id="toggle-off" name="toggle">
          <span class="btn toggle-btn">Assigned</span>
        </label>
      </div>

    </div>
    <!-- MODAL SECTION -->
    <div id="modal-section">
      <!-- GUEST MODAL -->
      <div id="add-guest-modal" class="modal">
        <div class="modal-content">
          <form method="POST" action="includes/submit-guest.inc.php">
            <span id="close1" class="close-btn">&times;</span>
            <h3>Add Guest</h3><br><div id="message"></div>
            <div class="form-input">
              <label class="label" for="input-name">Name</label>
              <br>
              <input id="input-name" name="nome" class="form-text" type="text" required>
            </div>
            <br>
            <div>
              <label class="label" for="input-last-name">Last Name</label>
              <br>
              <input id="input-last-name" name="cognome" required class="form-text" type="text">
            </div>
            <br>
            <div class="numerical-textbox">
              <div class="form-input-numbers">
                <label class="label" for="input-adults">Adults</label>
                <input id="input-adults" name="adulti" required class="form-text" type="number" value="1">
              </div>
              <div class="form-input-numbers">
                <label class="label" for="input-babies">Babies</label>
                <input id="input-babies" name="bambini" required class="form-text " type="number" value="0">
              </div>
              <div class="form-input-numbers">
                <label class="label" for="input-highchair">Highchair</label>
                <input id="input-highchair" name="seggioloni" required class="form-text" type="number" value="0">
              </div>
            </div>
            <div>
              <label class="label" for="input-intolerant">Intolerant</label>
              <br>
              <input id="input-intolerant" name="note_intolleranze" required class="form-text" type="text">
            </div>
            <input id="submit-guest" name="submit-guest" class="btn" type="submit" value="Submit">
          </form>
        </div>
      </div>
      <!-- TABLE MODAL -->
      <div id="add-table-modal" class="modal">
        <div class="modal-content">
          <form method="POST" action="includes/submit-table.inc.php">
            <span id="close2" class="close-btn">&times;</span>
            <h3>Add Table</h3>
            <br>
            <div id="message"></div>
            <div class="form-input">
              <label class="label" for="input-table-name">Table Name</label>
              <br>
              <input id="input-table-name" name="nome_tavolo" required class="form-text" type="text">
            </div>
            <input id="submit-table" name="submit-table" class="btn" type="submit" value="Submit">
          </form>
        </div>
      </div>

    </div>
    <!-- TABLE SECTION -->
    <div class="table-section">
      <div class="table-btn">
        <input type="button" class="btn btn-add-table" id="add-table" value="Add Table">
        <input type="button" class="btn btn-sposo" id="btn-sposo" value="Sposo">
        <input type="button" class="btn btn-sposa" id="btn-sposa" value="Sposa">
      </div>
      <div id="table-container" class="table-container">
        <?php foreach($tables as $table) : ?>
        <div class="table connectedSortable">
          <div class="table-header">
            <p class="table-id" hidden><?php echo $table['id']; ?></p>
            <p class="table-name"><strong><?php echo $table['nome_tavolo']; ?></strong></p>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>

  </div>
</body>
</html>