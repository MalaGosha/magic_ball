const imgBall = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const listOfAnswer =[
  "Tak",
  "Nie",
  "Zaufaj mi, nie chcesz znasz odpowiedzi na to pytanie",
  "Jestem magiczna kulą, ale na takie pytanie nawet wróżbita Maciej nie zna odpowiedzi",
  "Dorośnij i zadaj sensowne pytanie",
  "To jest bardziej pewne niż to że ja lubię nachosy",
  "Trzeba się nad tym zastanowić",
  "I co? Oczekujesz odpowiedzi?"
];


// MOJE:

const showAnimation = () => {
  imgBall.setAttribute('class', 'shake-animation');
  setTimeout(checkInput, 1000);
}

const showAnswer = () => {
  const randomAnswer = Math.floor(Math.random()*listOfAnswer.length);
  answer.innerHTML = `<span>Odpowiedź: </span> ${listOfAnswer[randomAnswer]}`;
}

const showError = () => {
  error.innerHTML = "Serio? Zadaj poprawnie pytanie!"
}

const checkInput = () => {
  if (question.value === ''){
    showError();
    imgBall.removeAttribute('class');
  } else if (question.value !== '' && question.value.slice(-1) !== '?'){
    error.textContent = 'Jeśli pytasz to postaw znak zapytania! Jesli nadal masz wątpliwości to jest to znak "?"';
    imgBall.removeAttribute('class');
  } else {
    showAnswer()
    question.value = '';
    error.innerHTML = '';
    imgBall.removeAttribute('class');
  }
}

imgBall.addEventListener('click', showAnimation);



// inna wersja
//
// const shakeBall = () => {
//   imgBall.classList.add('shake-animation');
//   setTimeout(checkInput, 1000);
// }
//
// const checkInput = () => {
//   if (question.value !== '' && question.value.slice(-1) === '?') {
//     generateAnswer();
//     error.textContent = '';
//     imgBall.classList.remove('shake-animation');
//   } else if (question.value !== '' && question.value.slice(-1) !== '?'){
//     error.textContent = 'Pytanie musi byc zakończone znakiem "?"';
//     answer.textContent = '';
//     imgBall.classList.remove('shake-animation');
//   } else {
//     error.textContent = "Musisz zadać jakieś pytanie!";
//     answer.textContent = '';
//     imgBall.classList.remove('shake-animation');
// }
//
// const generateAnswer = () => {
//   const number = Math.floor(Math.random()*8);
//   answer.innerHTML = `<span>Odpowiedź: </span> ${listOfAnswer[number]}`;
// }
//
// imgBall.addEventListener('click', checkInput);
//




