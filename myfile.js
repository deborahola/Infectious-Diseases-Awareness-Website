// Fact Generators on home (main) page

// Chickenpox
var factList1 = [
  "Chickenpox is caused by the highly contagious varicella zoster virus.", 
  "It is spread by coughing and sneezing, and by direct contact with skin lesions.", 
  "Adults are at greater risk for severe complications from chickenpox than children.", 
  "In the small number of people who are vaccinated, but still get chickenpox, the vaccine lessens the severity of their illness."
];

var fact1 = document.getElementById("fact1");
var factBtn1 = document.getElementById("factBtn1");
var count1 = 0;

if (factBtn1) {
  factBtn1.addEventListener("click", displayFact1);
}

function displayFact1() {
  fact1.innerHTML = factList1[count1];
  count1++;
  if (count1 == factList1.length) {
    count1 = 0;
  }
}

// Coronaviruses
var factList2 = [
  "Coronaviruses are named for the crown-like spikes on their surface.", 
  "Human coronaviruses were first identified in the mid-1960s.", 
  "The novel coronavirus (SARS-CoV-2) that causes COVID-19 first emerged in the Chinese city of Wuhan in 2019 and was declared a pandemic by the World Health Organization (WHO).", 
  "In humans, the viruses can cause mild respiratory infections, like the common cold, but can lead to serious illnesses, like pneumonia." 
];

var fact2 = document.getElementById("fact2");
var factBtn2 = document.getElementById("factBtn2");
var count2 = 0;

if (factBtn2) {
  factBtn2.addEventListener("click", displayFact2);
}

function displayFact2() {
  fact2.innerHTML = factList2[count2];
  count2++;
  if (count2 == factList2.length) {
    count2 = 0;
  }
}

// Diphtheria
var factList3 = [
  "Diphtheria is an acute bacterial disease that usually affects the tonsils, throat, nose, and/or skin.", 
  "Most cases of diphtheria occur among unvaccinated or inadequately vaccinated people.", 
  "Diphtheria can lead to breathing problems, heart failure, paralysis, and sometimes death.", 
  "The disease is passed from person to person by droplet transmission, usually by breathing in bacteria after an infected person has coughed, sneezed, or even laughed." 
];

var fact3 = document.getElementById("fact3");
var factBtn3 = document.getElementById("factBtn3");
var count3 = 0;

if (factBtn3) {
  factBtn3.addEventListener("click", displayFact3);
}

function displayFact3() {
  fact3.innerHTML = factList3[count3];
  count3++;
  if (count3 == factList3.length) {
    count3 = 0;
  }
}

// Ebola
var factList4 = [
  "Ebola is a rare and deadly disease caused by infection with a virus of the family Filoviridae, genus Ebolavirus.", 
  "Ebola can cause disease in humans and other primates (monkeys, gorillas, and chimpanzees).", 
  "Ebola was first discovered in 1976 near the Ebola River in what is now the Democratic Republic of the Congo. Since then, outbreaks have appeared sporadically in several African countries.", 
  "Symptoms include fever (greater than 101.5°F), severe headache, muscle pain, weakness, diarrhea, vomiting, stomach pain, and unexplained bleeding or bruising." 
];

var fact4 = document.getElementById("fact4");
var factBtn4 = document.getElementById("factBtn4");
var count4 = 0;

if (factBtn4) {
  factBtn4.addEventListener("click", displayFact4);
}

function displayFact4() {
  fact4.innerHTML = factList4[count4];
  count4++;
  if (count4 == factList4.length) {
    count4 = 0;
  }
}

// HPV (Human Papillomavirus)
var factList5 = [
  "Human papillomavirus (HPV) is the most common sexually transmitted infection that can cause certain cancers and genital warts.", 
  "About 80 percent of sexually active men and women are infected with HPV at some point in their lives and most new infections are in individuals in their teens and early 20s.", 
  "Individuals can pass the virus on even if they have no symptoms and even if years have passed since they were first infected.", 
  "The Centers for Disease Control and Prevention (CDC) estimates that there were 43 million HPV infections in the US in 2018, including 13 million new infections." 
];

var fact5 = document.getElementById("fact5");
var factBtn5 = document.getElementById("factBtn5");
var count5 = 0;

if (factBtn5) {
  factBtn5.addEventListener("click", displayFact5);
}

function displayFact5() {
  fact5.innerHTML = factList5[count5];
  count5++;
  if (count5 == factList5.length) {
    count5 = 0;
  }
}

// Monkeypox
var factList6 = [
  "Monkeypox is a rare disease that is caused by infection with monkeypox virus.", 
  "It is spread through contact with the virus from an animal, human, or materials contaminated with the virus.", 
  "Monkeypox begins with fever, headache, muscle aches, swollen lymph nodes, chills, and exhaustion.", 
  "Currently, there is no proven, safe treatment for monkeypox virus infection." 
];

var fact6 = document.getElementById("fact6");
var factBtn6 = document.getElementById("factBtn6");
var count6 = 0;

if (factBtn6) {
  factBtn6.addEventListener("click", displayFact6);
}

function displayFact6() {
  fact6.innerHTML = factList6[count6];
  count6++;
  if (count6 == factList6.length) {
    count6 = 0;
  }
}

function ch() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}