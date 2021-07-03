import {data} from './dataBase.js';

const cards=document.querySelector('.cards');
cards.innerHTML =''; // quitar maquetacion de card para hacerlo dinamico



document.addEventListener('DOMContentLoaded',loadPage);


const perritos=data;


function loadPage(){
    let contenedor = document.createElement('div');
    perritos.forEach(el=>{

        contenedor =`

        <div id="card">
        <div class="head">
                       <a href="#" id="editar" >Edit</a>
                       <div><img src="${el.image}" alt=""></div>
                       <a href="#" id="delete">Delete</a>
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



  
