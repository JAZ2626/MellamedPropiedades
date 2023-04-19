const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");
let contenedor = document.getElementById('contenedor')


mostrarProductos(productos)

function mostrarProductos(array) {
  contenedor.innerHTML= ""
  array.forEach((element) => {
    let div = document.createElement("div");
    div.className = "card col-md-3";
    div.style.width = "18rem";
    div.innerHTML = `
                      <img src=${element.imagen} class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${element.nombre}</h5>
                        <a  class="btn btn-primary" id=${element.id}>Comprar</a>
                      </div>
                    `;
    contenedor.appendChild(div)
    let boton = document.getElementById(`${element.id}`)
    boton.addEventListener('click', ()=>{
      alert(JSON.stringify(array.find(prod => prod.id == element.id)))
    })
  });



}

const filtrar = () => {

  if (filtrar == true)
  let mostrarProductos = productos;

else
    let mostrarProductos = ("No se encontro el producto");
    
  const text = formulario.value.toLowerCase();

 let arr = productos.find(prod => prod.nombre.toLowerCase().includes(text))
mostrarProductos([arr])

};

boton.addEventListener("click", filtrar);
formulario.addEventListener("keyup", filtrar);
