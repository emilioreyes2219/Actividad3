

function crearModal(opciones) {

  const titulo = opciones.titulo || "Aviso";
  const contenido = opciones.contenido || "";
  const textoBoton = opciones.textoBoton || "Cerrar";

  const fondo = document.createElement("div");
  fondo.className = "modal-fondo";

  const caja = document.createElement("div");
  caja.className = "modal-caja";
  caja.innerHTML = `
    <h2>${titulo}</h2>
    <p>${contenido}</p>
    <button class="modal-boton">${textoBoton}</button>
  `;

  fondo.appendChild(caja);
  document.body.appendChild(fondo);

 
  caja.querySelector(".modal-boton").addEventListener("click", () => {
    fondo.remove();
  });

 
  fondo.addEventListener("click", (e) => {
    if (e.target === fondo) {
      fondo.remove();
    }
  });
}
