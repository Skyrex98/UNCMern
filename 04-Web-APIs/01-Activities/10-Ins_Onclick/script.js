var themeSwitcher = document.querySelector('#theme-switcher');
var container = document.querySelector('.container');
var mode = 'dark';

function switchTheme() {
  console.log('RUNNING SWITCH THEME ', mode);
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  } else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
}

themeSwitcher.addEventListener('click', switchTheme);
