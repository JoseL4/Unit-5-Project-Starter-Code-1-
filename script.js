let submitButton = document.querySelector('.results');
let messages = document.querySelector('.messages');
let section1 = document.querySelector('.section1');
let section2 = document.querySelector('.section2');
let next = document.querySelector('.next');


next.onclick = function() {
  section1.style.display = 'none';
  section2.style.display = 'block';
  submitButton.style.display = 'block';
}

submitButton.onclick = function() {
  let comment = document.querySelector('.input1').value;
  let commentTwo = document.querySelector('.input2').value;
  section2.style.display = 'none';
  if (comment == '2 dogs' && commentTwo == 'Hamsters') {
    messages.innerHTML = 'Dogs are cool pets, so are hamsters.'
  } else if (comment == '2 dogs' && commentTwo == 'Parrots') {
    messages.innerHTML = 'Dogs are really great pets, but parrots are very annoying.'
  } else if (comment == '2 cats' && commentTwo == 'Hamsters') {
    messages.innerHTML = 'Cats are cool but require more work, so are hamsters, but less work is needed.'
  } else if (comment == '2 cats' && commentTwo == 'Parrots') {
    messages.innerHTML = 'Cats are a comforting pet to have, parrots in the other hand are annoying.'
  }
  else {
    messages.innerHTML = "You answered a question incorrectly or didn't say something revelant to the question, please refresh the page to reset."
  }
  messages.style.display = 'block';
  submitButton.style.diplay = 'none';
}



