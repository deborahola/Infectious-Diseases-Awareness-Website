// Quiz - Test Your Knowledge!

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} correct`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. Children are defined by the American Medical Association as “persons aged 1 to 12 years.” How many vaccinations are recommended for the average child in the United States?",
      answers: {
        a: "5",
        b: "10",
        c: "12"
      },
      correctAnswer: "c"
    },
    {
      question: "2. According to the World Health Organization (WHO), at what age should girls receive the human papillomavirus (HPV) vaccination?",
      answers: {
        a: "6 months to 1 year",
        b: "9 years to 14 years",
        c: "15 years to 20 years"
      },
      correctAnswer: "b"      
    },
    {
      question: "3. According to the Centers for Disease Control and Prevention (CDC), which group of health care providers had the highest rate of influenza vaccination during the 2018-2019 season?",
      answers: {
        a: "Hospitalists",
        b: "Pediatricians",
        c: "Oncologists"
      },
      correctAnswer: "a"
    },
    {
      question: "4. How many strains of human papillomavirus (HPV) have been discovered?",
      answers: {
        a: "100",
        b: "200",
        c: "300"
      },
      correctAnswer: "a"
    },
    {
      question: "5. According to the recent recommendations published by the CDC, which of the following is NOT recommended for the prevention and control of measles in health care settings?",
      answers: {
        a: "Routinely promote and facilitate respiratory hygiene and cough etiquette.",
        b: "Do not accept patients with known or suspected measles.",
        c: "Appropriately manage exposed and ill health care providers."
      },
      correctAnswer: "b"
    },
    {
      question: "6. For which of the following illnesses do we not have an FDA-approved vaccine?",
      answers: {
        a: "HIV",
        b: "Cholera",
        c: "Adenovirus"
      },
      correctAnswer: "a"
    },
    {
      question: "7. In what year was the first successful vaccine produced?",
      answers: {
        a: "1770",
        b: "1784",
        c: "1796"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();