import {data} from './dataBase.js';

const cards=document.querySelector('.cards');
cards.innerHTML =''; // quita la maquetacion de card para hacerlo dinamico

let dat=data;


document.addEventListener('DOMContentLoaded',loadPage);





cards.addEventListener('click',quitarItem);


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
         const nuevoArray = data.filter(el=> el.Id != posicion);
        

        loadPage()
    }

}



  
