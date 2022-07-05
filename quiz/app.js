const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  //not refresh page
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  //check answers 
  document.querySelector('.result').classList.remove('d-none');
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;

    }
  })
  console.log(score);
  window.scrollTo(0, 0);

  let output = 0;
  const timer = setInterval(() => {
    document.querySelector('.display-4.text-primary').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    }
    else {
      output++;
    }
  }, 10)
});


// completed and working