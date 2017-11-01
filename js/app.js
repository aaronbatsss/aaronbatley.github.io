$(function () {

  $('#greenButton').click(switchGreen);
  $('#yellowButton').click(switchYellow);
  $('#orangeButton').click(switchBack);
  

  function switchGreen() {
    $('.blue').css('background-color', 'rgb(186,255,201)');
    $('.orange').css('background-color', 'rgb(255,179,186)');
    $('a').css('color', 'rgb(186,255,201)');
    $('h1').css('color', 'black');
    $('p').css('color', 'black');
  }

  function switchYellow() {
    $('.blue').css('background-color', 'rgb(255,255,186)');
    $('.orange').css('background-color', 'rgb(186,225,255)');
    $('a').css('color', 'rgb(255,255,186)');
    $('h1').css('color', 'black');
    $('p').css('color', 'black');
  }

  function switchBack() {
    $('.blue').css('background-color', 'rgb(36, 148, 201');
    $('.orange').css('background-color', 'rgb(226, 94, 44');
    $('a').css('color', 'rgba(255, 255, 255, 0.94')
    $('h1').css('color', 'white');
    $('p').css('color', 'white');

  }
});
