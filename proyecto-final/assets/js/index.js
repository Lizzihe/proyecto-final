const todos = document.getElementById("todos")
const mujeres = document.getElementById("mujeres")
const hombres = document.getElementById("hombres")
const sgenero = document.getElementById("sgenero")
const desconocido = document.getElementById("desconocido")
const paginaActual = document.getElementById("pagActual")
const totalPagina = document.getElementById("pagTotal")
const totalPersonajes = document.getElementById("persTotal")

let url = "https://rickandmortyapi.com/api/character"

function renderizado (numeroPag=1, genero, ptotal){
   fetch(url + "?page=" + numeroPag + genero)
   .then((res)=> res.json())
   .then((data) =>{
    console.log(data)
    let element = document.querySelector("#tarjetas")
    let html = ""
    for (const iterator of data.results) {
       html +=
       `
       <div class="card">
        <h2>${iterator.name}</h2>
        <img src=${iterator.image} alt"">
        <p>Genero: ${iterator.gender}</p>
        <p>Especie: ${iterator.species}</p>
        <p>Estado: ${iterator.status}</p>
        <p>Origen: ${iterator.origin.name}</p>
        <p>Locacion: ${iterator.location.name}</p>
        </div>
       ` 
    }
    element.innerHTML = html
    totalPagina.textContent = `Total de páginas:${ptotal}`
    paginaActual.textContent= `Pagina actual: ${numeroPag}`
    totalPersonajes.textContent= `Total Personajes: ${data.info.count}`
   })
}
renderizado(1,"", 42)

var pagActual = 1;
var genero = "";
var ptotal = 42;
aant.disabled = true;
ant.disabled = true;

const fetchTodos = () => {
   genero = ""
   pagActual = 1
   ptotal = 42 
   renderizado(pagActual, genero, ptotal)
}

const fetchMujeres = () => {
    genero = "&gender=female"
    pagActual = 1 
    ptotal = 8
    renderizado(pagActual, genero, ptotal)
}
const fetchHombres = () => {
    genero = "&gender=male"
    pagActual = 1
    ptotal = 31
    renderizado(pagActual, genero, ptotal)
}

const fetchSgenero = () => {
   genero = "&gender=genderless"
   pagActual = 1
   ptotal = 1
   renderizado(pagActual, genero, ptotal)
}

const fetchDesconocido = () => {
   genero = "&gender=unknown"
   pagActual = 1
   ptotal = 3
   renderizado(pagActual, genero, ptotal)
}

 const aanterior = () => {
   aant.disabled = true;
   ant.disabled = true;
   ppost.disabled = false;
   post.disabled = false;
    pagActual = 1
    renderizado (pagActual, genero, ptotal)
 }

 const anterior = () => {
   if (pagActual === 2) {
      aant.disabled = true;
      ant.disabled = true;
   }
   ppost.disabled = false;
   post.disabled = false;
   pagActual = pagActual - 1
   renderizado (pagActual, genero, ptotal)
 }

 const posterior = () => {
   if (pagActual === ptotal -1) {
   post.disabled = true;
   ppost.disabled = true;
}
   aant.disabled = false;
   ant.disabled = false;
   pagActual = pagActual + 1
   renderizado (pagActual, genero, ptotal)
 }

   const pposterior = () => {
      aant.disabled = false;
      ant.disabled = false;
      post.disabled = true;
      ppost.disabled = true;
      pagActual = ptotal
      renderizado (pagActual, genero, ptotal)
}

todos.onclick = fetchTodos
mujeres.onclick = fetchMujeres
hombres.onclick = fetchHombres
sgenero.onclick = fetchSgenero
desconocido.onclick = fetchDesconocido

aant.onclick = aanterior
ant.onclick = anterior
post.onclick = posterior
ppost.onclick = pposterior

document.addEventListener('DOMContentLoaded', function () {
   const volverArribaBtn = document.getElementById('volverArribaBtn');
 
   window.onscroll = function () {
     mostrarOcultarBoton();
   };
 
   function mostrarOcultarBoton() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       volverArribaBtn.style.display = 'block';
     } else {
       volverArribaBtn.style.display = 'none';
     }
   }
 
   volverArribaBtn.addEventListener('click', function () {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   });
 });