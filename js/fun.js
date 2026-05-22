let shares = 0;
const requiredShares = 2; // 👈 solo 2 veces después del CPA
const shareBtn = document.getElementById("shareBtn");
const messageDiv = document.getElementById("message");
const closeBtn = document.getElementById("closeBtn");

// Variables que quieres usar
const url = "😈 👉 http://girlsroom.lat/ Chatea, juega y disfruta con chicas atrevidas 💕";
const share = "https://t.me/share/url?url=" + encodeURIComponent(url);
const cpa = "https://href.li/?http://acort.link/Y6fyh8Ev";

let cpaOpened = false; // controla si ya abriste la CPA

shareBtn.addEventListener("click", () => {
  if (!cpaOpened) {
    // 🔹 Primer clic: abrir CPA pero NO contar
    window.open(cpa, "_blank");
    cpaOpened = true;
    return; // salir sin sumar shares
  }

  // 🔹 A partir del segundo clic: abrir share en Telegram y contar
  window.open(share, "_blank");

  shares++;
  shareBtn.textContent = `Compartir en Telegram ${shares}/${requiredShares}`;

  if (shares >= requiredShares) {
    const link = document.createElement("a");
    link.href = "https://t.me/+KMdqwfubQZdmOWIx"; // tu grupo final
    link.target = "_blank";
    link.id = "shareBtn";
    link.textContent = "Solicitar unirme al grupo";
    link.style.cssText = shareBtn.style.cssText; 
    shareBtn.replaceWith(link);

    messageDiv.textContent =
      "Este grupo acepta nuevos miembros solo después de ser aprobados por un administrador.";
  }
});

// Botón cerrar
closeBtn.onclick = () => {
  document.getElementById("simulator").style.display = "none";
};



