$(document).ready(function(){
  var today = new Date();
  $('#date').text('Today is ' + (today.getMonth() + 1) + '/' + (today.getDate()) + '/' + (today.getFullYear()));

  $('#homework').html(localStorage.getItem('homework') || '- Things<br>- Other things');
  $('#classwork').html(localStorage.getItem('classwork') || '- Things<br>- Other things');
  $('#objective').html(localStorage.getItem('objective') || 'SWBAT die');

  $('body').on('keydown', function(){
    localStorage.setItem('homework', $('#homework').html());
    localStorage.setItem('classwork', $('#classwork').html());
    localStorage.setItem('objective', $('#objective').html());
  });
});
