'use strict';

function handleForm() {
    $('form').submit(event => {
        event.preventDefault();
        const breed = $('.DogPics').val();
        console.log(breed)
        requestData(breed);
    })
}

function requestData(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
        .catch(error => alert('oops...something went wrong'));
}

function displayResults(responseJson){
  console.log(responseJson.status)
  if (responseJson.status === 'error'){
    $('.error').append("Breed not found (Check that you spelled it correctly)")
  } else {
  $('.results-img').replaceWith(`<img src = "${responseJson.message}" class ='results-img'>`);
  $('.results').removeClass('hidden');
  }
}

$(function() {
    console.log('Ready to go! Click for a doggie surprise');
    handleForm();
});