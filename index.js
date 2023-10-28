let themeButton = document.getElementById("theme-button");
let petitionButton = document.getElementById("sign-now-button")
let count = 3;

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  
}


const addSignature = () => {
  const name = document.getElementById('name-input').value;
  const city = document.getElementById('city-input').value;
  // ToDO: email input unused
  const email = document.getElementById('email-input').value;

  const newSignature = document.createElement('p');
  newSignature.textContent = `🎉 ${name} in ${city} became an ally.`;
  
  const signaturesSection = document.getElementById('signatures');
  signaturesSection.appendChild(newSignature);
  
  document.getElementById('name-input').value='';
  document.getElementById('city-input').value='';
  document.getElementById('email-input').value='';

  count +=1
  const  counter = document.getElementById('counter');
  counter.remove();
  const newCounter = document.createElement('p');
  newCounter.setAttribute('id', 'counter');
  newCounter.textContent = `🖊️ ${count} people have became allies to support indepdence.`;
  
  signaturesSection.appendChild(newCounter);
}

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else{
      petitionInputs[i].classList.remove('error');
    }
  }

  const email = document.getElementById('email-input')
  if (!email.value.includes('.com')){
    containsErrors=true;
    petitionInputs[2].classList.add('error');
  }
  
  if (containsErrors == false){
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

petitionButton.addEventListener('click', validateForm);
//petitionButton.addEventListener('click', addSignature);
themeButton.addEventListener("click", toggleDarkMode);