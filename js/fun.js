let shares = 0;
const requiredShares = 3;
const shareBtn = document.getElementById("shareBtn");
const messageDiv = document.getElementById("message");
const closeBtn = document.getElementById("closeBtn");

// Variables que quieres usar
const url = " 😈 👉 http://girlsroom.lat/ Chatea, juega y disfruta con chicas atrevidas 💕";
const share = "https://t.me/share/url?url=" + encodeURIComponent(url);
const cpa = "https://href.li/?http://acort.link/3RIMSphH";

let cpaOpened = false; // para abrir la CPA solo una vez

shareBtn.addEventListener("click", () => {
  // Abre el link de compartir en Telegram
  window.open(share, "_blank");

  // Abre la campaña CPA solo la primera vez
  if (!cpaOpened) {
    window.open(cpa, "_blank");
    cpaOpened = true;
  }

  // Incrementa el contador de shares
  shares++;
  shareBtn.textContent = `Compartir en Telegram ${shares}/${requiredShares}`;

  // Al cumplir requiredShares, cambiar el botón y mensaje
  if (shares >= requiredShares) {
    const link = document.createElement("a");
    link.href = "https://t.me/+xueLkIO6lLc5OTdh"; // tu grupo final
    link.target = "_blank";
    link.id = "shareBtn";
    link.textContent = "Solicitar unirme al grupo";
    link.style.cssText = shareBtn.style.cssText; // mantiene estilos
    shareBtn.replaceWith(link);

    messageDiv.textContent = "Este grupo acepta nuevos miembros solo después de ser aprobados por un administrador.";
  }
});

// Cerrar simulador
closeBtn.onclick = () => {
  document.getElementById("simulator").style.display = "none";
};
