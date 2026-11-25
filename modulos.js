// Módulos compartidos: header, nav y footer se insertan dinámicamente con querySelector

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

header.innerHTML = `
  <h1>Mi Sitio Web</h1>
`;

nav.innerHTML = `
  <a href="#inicio">Inicio</a>
  <a href="#nosotros">Nosotros</a>
  <a href="#contacto">Contacto</a>
`;

footer.innerHTML = `
  <p>&copy; ${new Date().getFullYear()} Mi Sitio Web - Todos los derechos reservados</p>
`;

// Muestra solo la "página" (section) elegida en el nav
function mostrarPagina() {
  const id = location.hash.slice(1) || "inicio";
  const seccion = document.querySelector(`#${id}`) ? id : "inicio";

  document.querySelectorAll("main section").forEach((s) => (s.hidden = true));
  document.querySelector(`#${seccion}`).hidden = false;

  nav.querySelectorAll("a").forEach((a) => a.classList.remove("activo"));
  nav.querySelector(`a[href="#${seccion}"]`).classList.add("activo");
}

window.addEventListener("hashchange", mostrarPagina);
mostrarPagina();
