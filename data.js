// data.js — versión limpia

/* ===== HOTSPOTS (puedes editar/añadir los tuyos) ===== */
window.HOTSPOTS = [
  { x: 19.6, y: 44.0, n: 1,  title: "Menú",      text: "Agencias" },
  { x: 58.8, y: 45.2, n: 2,  title: "Opciones generales:",   text: "En las opciones generales encontramos un campo de búsqueda el cual filtra según el parámetro indicado, un botón que permite exportar el listado de agencias en diferentes formatos y el botón para añadir una nueva agencia al sistema." },
  { x: 84.8, y: 59.2, n: 3,  title: "Acciones agencia:",   text: "Las acciones especificas permiten gestionar una agencia seleccionada, dentro de estas acciones se tiene el botón para ampliar la información, editar la agencia y eliminarla." },
];

/* ===== BOTONES flotantes =====
   IMPORTANTE: El último objeto NO lleva coma al final.
*/
window.BUTTONS = [
  { x: 88, y: 79, label: "Manual",        href: "manuales/vista-simple.pdf", target: "blank", variant: "ghost" },

  { x: 89.9, y: 45.4, label: "+ Añadir Nueva Agencia",
  href: "https://wilvar88.github.io/SIR-2/",
  target: "self",
  size: "w170h30", }   // ← usará esa medida exacta , 


  
];
