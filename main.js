const btnBanner = document.getElementById('btn-banner');
const btnLog = document.getElementById('btn-log');

const comingSoonMsg = () => {
  alert('Las inscripciones se aperturarán pronto. ¡Mantente al tanto para que no te pierdas el curso!');
}

btnBanner.addEventListener('click', comingSoonMsg);
btnLog.addEventListener('click', comingSoonMsg);