let themeButton = document.getElementById("theme-button");
let petitionButton = document.getElementById("sign-now-button")
let count = 3;

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  
}


const addSignature = () => {
  let name = document.getElementById('name-input').value;
  let city = document.getElementById('city-input').value;

  let newSignature = document.createElement('p');
  newSignature.textContent = `🎉 ${name} in ${city} became an ally.`;
  
  let signaturesSection = document.getElementById('signatures');
  signaturesSection.appendChild(newSignature);
  
  document.getElementById('name-input').value='';
  document.getElementById('city-input').value='';

  count +=1
  let counter = document.getElementById('counter');
  counter.remove();
  let newCounter = document.createElement('p');
  newCounter.setAttribute('id', 'counter');
  newCounter.textContent = `🖊️ ${count} people have became allies to support indepdence.`;
  
  signaturesSection.appendChild(newCounter);
}

petitionButton.addEventListener('click', addSignature);
themeButton.addEventListener("click", toggleDarkMode);