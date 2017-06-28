let $ = window.$;
$(function () {
  let form = $('#data');
  function createCell (data) {
    return $(document.createElement('td')).addClass('mdl-data-table__cell--non-numeric')
    .text(data);
  }
  function display (details) {
    console.log(details);

    var tbody = $('tbody');
    var trow = $(document.createElement('tr'));
    trow.append(createCell(details[0].value));
    trow.append(createCell(details[1].value));
    trow.append(createCell(details[2].value));
    trow.append(createCell(details[3].value));
    tbody.append(trow);
  }

  form.submit(function (e) {
    e.preventDefault();

    display(form.serializeArray());

    document.getElementById('data').reset();
  });
});
