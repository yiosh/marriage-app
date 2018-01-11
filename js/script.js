$(document).ready(() => {
  // Show Add Guest Modal
  $('#add-guest').click(() => {
    document.getElementById('add-guest-modal').style.display = 'block';
  });

  $('#guest-list').sortable({
    connectWith: '.connectedSortable',
    cursor: 'move',
    helper(e, div) {
      this.copyHelper = div.clone().insertAfter(div);
      $(this).data('copied', false);
      return div.clone();
    },
    stop() {
      const copied = $(this).data('copied');
      if (!copied) {
        this.copyHelper.remove();
      }
      this.copyHelper = null;
    },
  });

  $('.table').sortable({
    receive(e, ui) {
      ui.sender.data('copied', true);
      console.log(ui.item[0].childNodes[1].innerText);
    },
  });

  $('#add-table').click(() => {
    document.getElementById('add-table-modal').style.display = 'block';
  });

  $('#close1').click(() => {
    document.getElementById('add-guest-modal').style.display = 'none';
  });

  $('#close2').click(() => {
    document.getElementById('add-table-modal').style.display = 'none';
  });
});
