# Actividad3
# Componente Modal Reutilizable

## Descripción

Este proyecto consiste en una librería desarrollada con **JavaScript puro**, **HTML** y **CSS**, que permite crear ventanas modales reutilizables sin utilizar frameworks como React o Vue.

El componente resuelve la necesidad de mostrar mensajes, avisos, confirmaciones o información importante al usuario mediante una ventana emergente personalizable, evitando tener que escribir el mismo código cada vez que se necesite un modal.

---

## Características

- Ventana modal creada dinámicamente con JavaScript.
- Componente reutilizable mediante parámetros.
- Personalización del título, contenido y texto del botón.
- Cierre mediante botón o haciendo clic fuera del modal.
- Compatible con cualquier proyecto HTML.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

# Instalación

Clona el repositorio o descarga los archivos.

Después incluye el archivo CSS y el archivo JavaScript dentro de tu proyecto.

```html
<link rel="stylesheet" href="css/componente.css">

<script src="js/componente.js"></script>
```

---

# Uso

Para mostrar un modal únicamente debes llamar a la función **crearModal()** y enviar un objeto con los parámetros.

### Ejemplo 1

```javascript
crearModal({
    titulo: "Bienvenido",
    contenido: "Este es un modal de ejemplo.",
    textoBoton: "Aceptar"
});
```

### Ejemplo 2

```javascript
crearModal({
    titulo: "Compra realizada",
    contenido: "Tu pedido fue registrado correctamente.",
    textoBoton: "Continuar"
});
```

### Ejemplo 3

```javascript
crearModal({
    titulo: "Aviso",
    contenido: "¿Seguro que deseas salir sin guardar los cambios?",
    textoBoton: "Cerrar"
});
```

---

# Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| titulo | Título que aparecerá en la ventana modal. |
| contenido | Mensaje o información que mostrará el modal. |
| textoBoton | Texto que tendrá el botón para cerrar el modal. |

---

# Estructura del proyecto

```
ProyectoModal/

│── README.md
│── index.html
│
├── css/
│   └── componente.css
│
├── js/
│   └── componente.js
│
└── img/
    ├── captura1.png
    ├── captura2.png
    └── consola.png
```

---

# Capturas de pantalla

## Página principal

![Página principal](img/captura1.png)

---

## Modal funcionando

![Modal](img/captura2.png)

---

## Consola del navegador

![Consola](img/consola.png)

---

# GitHub Pages

**Sitio en funcionamiento:**

**Pega aquí tu enlace de GitHub Pages**



```
[https://usuario.github.io/ProyectoModal/](https://emilioreyes2219.github.io/Actividad3/)
```

---

# Repositorio

**Repositorio público:**

**Pega aquí el enlace de tu repositorio**

Ejemplo:

```
https://github.com/usuario/ProyectoModal
```

---

# Video demostrativo

Agregar el enlace del video (máximo 1 minuto) donde se muestre:

- El problema que resuelve el componente.
- Cómo se instala.
- Cómo se utiliza.
- El resultado final en funcionamiento.

---

# Autor

**Nombre:** Jorge Emilio Nuñez Reyes

**Materia:** Programación Web

**Actividad:** Librería JavaScript - Componente Visual Reutilizable
