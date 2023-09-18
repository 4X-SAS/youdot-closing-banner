const root = document.querySelector('#root');

if (!root) {
  console.error('root element not found');
}

const browserLanguage = navigator.language;

let message = '';
let title = '';

switch (browserLanguage) {
  case 'en-US':
    title = 'Important Notice';
    message = 'Youdot is closing ! Please migrate your domains to another registrar.';
    break;
  case 'es-ES':
    title = 'Aviso Importante';
    message = 'Youdot está cerrando ! Por favor migre sus dominios a otro registrador.';
    break;
  case 'fr-FR':
    title = 'Message Important';
    message = 'Youdot ferme ! Veuillez migrer vos domaines vers un autre registrar.';
    break;
  default:
    title = 'Important Notice';
    message = 'Hello World';
}

const banner = document.createElement('div');
banner.classList.add('banner');
banner.innerHTML = `
  <div class="banner__content">
    <h1 class="banner__title">${title} !</h1>
    <p class="banner__description">${message}</p>
  </div>
`;

root.appendChild(banner);
