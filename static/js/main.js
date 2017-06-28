let $ = window.$;
let form = $('#data');

function createContact (data) {
  var cardContainer = $('.mdl-grid');

  var card = $(document.createElement('div'))
      .addClass('contact-card mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--3-col mdl-cell--4-col-phone mdl-cell--4-col-tablet')
      .attr('data-name', data[0].value + ' ' + data[1].value)
      .attr('data-description', data[2].value);

  card.append($(document.createElement('h2')).text(card.attr('data-name')));

  cardContainer.append(card);
}

$(document).on('click', '.contact-card', function () {
  let el = $(this);
  if (el.children('h2').length) {
    el.empty();
    el.append($(document.createElement('p')).text(el.attr('data-description')));
  } else {
    el.empty();
    el.append($(document.createElement('h2')).text(el.attr('data-name')));
  }
});

form.submit(function (e) {
  e.preventDefault();

  createContact(form.serializeArray());

  document.getElementById('data').reset();
});
