// CUANTOS DISCOS TENES?

document.getElementById("boton").onclick = function (){
    function coleccionCompleta (variable1, variable2){
        return( discografiaCompleta - discosQueFaltan);
    }
    
    const discografiaCompleta = 48;
    let discosQueFaltan = parseInt(prompt('Cuantos discos de Oasis tenés?'));
    
    function intento (){
        if (coleccionCompleta() > 0 && coleccionCompleta() <= 48) {
            document.getElementById("cambiar").innerHTML = ("Te faltan "+ coleccionCompleta() + " discos para completar la colección. Pasate por nuestra tienda y descubrí cuales son!"); 
        } else {document.getElementById("cambiar").innerHTML = ("Buenísimo, los tenes todos! Pasa por nuestra tienda a ver el merchandising!");}
    }
    intento ();
    };

//FORMULARIO STAFF
const KEY_STORAGE = 'staffData';
let staff = cargar(KEY_STORAGE);
let formularioStaff = document.getElementById('formulario-staff');
let contenedorMenu = document.getElementById('staff-contenedor')

formularioStaff.addEventListener ('submit', (event)=>{
    event.preventDefault();
    agregarStaff(event.target.elements.titulo);
})

function agregarStaff(campo){
    staff.push(campo.value);
    campo.value = '';
    guardar(staff);
    renderStaff();
}

function renderStaff() {
    let ultimoItem = staff.pop();
    contenedorMenu.appendChild(construirItem(ultimoItem));
}

function construirItem(staffItem){
    let item = document.createElement('li');
    item.textContent = staffItem;
    return item;
}

function guardar(staffData){
    sessionStorage.setItem(KEY_STORAGE, JSON.stringify(staffData));
}
function cargar(storageKey) {
    if(sessionStorage.getItem(storageKey)){
        return JSON.parse(sessionStorage.getItem(storageKey));
    } else {
        return[];
    }
}

function iniciarStaff(){
    staff.forEach(item => {
        contenedorMenu.appendChild(construirItem(item));
    });
}

iniciarStaff();


// BOTON DE IR ARRIBA

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    } else { document.querySelector('.go-top-container').classList.remove('show');}
}
document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
});