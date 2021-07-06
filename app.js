import {data} from './dataBase.js';

const cards=document.querySelector('.cards');

const mostrarFormulario=document.getElementById('addItem');

const cargarDatos=document.getElementById('formulario');

const containerItem=document.getElementById('containerItem');


let dat=data;

//cargar items
document.addEventListener('DOMContentLoaded',loadPage);


//quitar items
cards.addEventListener('click',quitarItem);


//agregar item
mostrarFormulario.addEventListener('click',mostrar)

cargarDatos.addEventListener('submit', agregarItem)




function loadPage(){
    cards.innerHTML ='';
    const perrito=dat;
    let contenedor = document.createElement('div');
    perrito.forEach(el=>{

        contenedor =`

        <div id="card">
        <div class="head" id="${el.Id}">
                       <a href="#" class="editar" >Edit</a>
                       <div><img src="${el.image}" alt=""></div>
                       <a href="#" class="delete">Delete</a>
                   </div>
                   <div class='content'>
                       <p>${el.Nombre}</p>
                  
                       <p> <span>${el.Telefono} </span>| <span>${el.Correo}</span> </p>
                      
                   
                   <p>${el.Pais}</p>
                   <p>${el.Descripcion}</p>
                   </div>
   
        </div>
           `


    cards.innerHTML+=contenedor;
    }) 
    



}

function quitarItem(e){
    if(e.target.classList.contains('delete')){
        
         const posicion=e.target.parentElement.id;
        
         const nuevoArray = dat.filter(el=> el.Id != posicion);
         dat=[...nuevoArray];

        loadPage()
    }
}
function mostrar(e){
    e.preventDefault();   

  
    containerItem.style.display='block';
 
   
  
   
    
}
function agregarItem(e){
    e.preventDefault();
    const obj={
        Id:(dat.length+1),
        image:image.value,
        Nombre:nombre.value,
        Telefono:telefono.value,
        Correo:correo.value,
        Pais:pais.value,
        Descripcion:descripcion.value

    }
    data.push(obj);
    mostrarFormulario.addEventListener('click',mostrar)
    loadPage();
    containerItem.style.display='none';

}




  
