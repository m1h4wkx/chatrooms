function animateSubscribersSmoothVariable(elementId, maxValue) {
  const element = document.getElementById(elementId);
  let count = 0;

  // Array de incrementos variables (primer tick 500, segundo 800, etc.)
  const increments = [500, 800, 600, 700, 900];
  let index = 0;

  function update() {
    count += increments[index];
    index = (index + 1) % increments.length; // recorre los incrementos de forma cíclica

    if (count > maxValue) count = 0; // reinicia al llegar al máximo

    element.textContent = count.toLocaleString() + " suscriptores";
  }

  // Llamada cada 300 ms para animación más lenta
  setInterval(update, 3000);
}

// Inicia animación hasta 200,000 suscriptores
animateSubscribersSmoothVariable('subscribers', 200000);
