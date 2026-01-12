const ageInput = document.getElementById('age');
const checkBtn = document.getElementById('check');
const result = document.getElementById('result');
const camImage = document.getElementById('camImage');

// Si la imagen no se carga, registrar y ocultar para evitar mostrar el texto `alt`
camImage.addEventListener('error', () => {
  console.error('Error cargando imagen:', camImage.src);
  // Mostrar aviso breve en el resultado y ocultar la imagen
  const prev = result.textContent;
  if (!prev.includes('(no se pudo cargar la imagen)')) {
    result.textContent = prev + ' (no se pudo cargar la imagen)';
  }
  camImage.classList.remove('show');
});

const camMap = {
  11: 'cam11.jpeg',
  12: 'cam12.jpeg',
  13: 'cam13.jpeg',
  14: 'cam14.png',
  15: 'cam15.jpeg',
  18: 'cam18.jpeg'
};

function mensajeSegunEdad(edad){
  if (isNaN(edad)) return 'Ingresa una edad válida.';

  if (edad === 10) return 'ahorra para la cam';
  if (edad === 11) return 'busca una cam';
  if (edad === 12) return 'compra la cam';
  if (edad === 13) return 'configura la cam';
  if (edad === 14) return 'activa cam';
  if (edad === 15) return 'apaga la cam';
  if (edad === 16) return 'vende la cam';
  if (edad === 17) return 'destruye la cam';
  if (edad === 18) return 'regalale la cam a la de 14';
  if (edad < 10) return 'callate gilipollas';
  if (edad > 18) return 'callate mierda';
  if (edad === 67) return 'SIIIX SEEEVEEENN';
  return 'No hay un mensaje específico para esa edad.';
}

function showCamFor(filename) {
  if (!filename) {
    camImage.classList.remove('show');
    return;
  }

  const desired = 'images/' + filename;

  // Si la imagen ya es la misma y está cargada, mostrarla inmediatamente
  if (camImage.src.split('?')[0].endsWith(filename) && camImage.complete && camImage.naturalWidth > 0) {
    camImage.classList.add('show');
    return;
  }

  // Ocultar mientras se carga
  camImage.classList.remove('show');
  result.textContent = result.textContent.replace(' (cargando imagen...)', '') + ' (cargando imagen...)';

  const onLoad = () => {
    camImage.classList.add('show');
    result.textContent = result.textContent.replace(' (cargando imagen...)', '');
    camImage.removeEventListener('load', onLoad);
  };

  camImage.addEventListener('load', onLoad);

  // Forzar recarga y establecer la nueva imagen
  camImage.src = desired + '?_=' + Date.now();
}

checkBtn.addEventListener('click', () => {
  const edad = parseInt(ageInput.value, 10);
  result.textContent = mensajeSegunEdad(edad);

  const imgFile = camMap[edad];
  showCamFor(imgFile);
});

ageInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') checkBtn.click();
});