var storage = localStorage;
var switchInput;
var icon;
var body;

document.addEventListener('DOMContentLoaded', () => {
    switchInput = document.querySelector('.switch input[type="checkbox"]');
    icon = document.getElementById('icon');
    body = document.body;

    if(storage.getItem("dark") === null){
        storage.setItem("dark", false);
    }

    switchInput.addEventListener('change', () => {
      console.log('Evento de mudança disparado!');
      if (switchInput.checked) {
        body.classList.add('dark-mode');
        icon.classList.remove('bi-brightness-high');
        icon.classList.add('bi-moon');

        storage.setItem("dark", true);
      } else {
        body.classList.remove('dark-mode');
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-brightness-high');

        storage.setItem("dark", false);
      }
    });
});

function init(){
    const darkMode = storage.getItem("dark") === "true";
    if (darkMode){
        console.log("aaaaaaaaa")
        body.classList.add('dark-mode');
        icon.classList.remove('bi-brightness-high');
        icon.classList.add('bi-moon');
        switchInput.checked = true;
    }
}

window.onload = init;