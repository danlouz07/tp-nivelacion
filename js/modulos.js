const mostrarHeader = () => {
    document.querySelector('header').innerHTML = `
        <h1>Mi Sitio Web</h1>
        <p>Trabajo Práctico de 3 páginas</p>
    `
}

const mostrarNav = () => {
    document.querySelector('nav').innerHTML = `
        <a href="#inicio" class="activo">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
    `
}

const mostrarFooter = () => {
    document.querySelector('footer').innerHTML = `
        <p>&copy; 2026 - Mi Sitio Web</p>
        <p>Sitios Web Dinámicos</p>
    `
}

const mostrarPagina = (id) => {
    document.querySelector('main section.activa').classList.remove('activa')
    document.querySelector('nav a.activo').classList.remove('activo')

    document.querySelector(`main #${id}`).classList.add('activa')
    document.querySelector(`nav a[href="#${id}"]`).classList.add('activo')
}

mostrarHeader()
mostrarNav()
mostrarFooter()

document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.matches('a')) {
        e.preventDefault()
        mostrarPagina(e.target.getAttribute('href').slice(1))
    }
})
