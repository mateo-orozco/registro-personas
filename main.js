
class Persona {
    constructor(name, apellido, documento) {
        this.name = name
        this.apellido = apellido
        this.documento = documento
    }

}

class Interfaz {
    addPerson(personas) {
        const lista = document.getElementById("personas-list")
        const elemento = document.createElement("div")
        elemento.innerHTML = `<div class="card text-center mb-4">
        <div class="card-body">
            <strong> Nombre</strong>: ${personas.name}
            <strong> Apellido</strong>: ${personas.apellido}
            <strong> Documento</strong>: ${personas.documento}
            <a href="#" class="btn btn-danger" name="eliminar" >ELIMINAR</a>
        </div>
    </div>`
    lista.appendChild(elemento)
    this.dejarBlanco()
    }
    dejarBlanco(){
        document.getElementById("personas-form").reset()
    }
    eliminarPersona(elemento){
        if(elemento.name=="eliminar"){
            elemento.parentElement.parentElement.parentElement.remove()
        }
    }
    mostrarMensaje(mensaje,tipo){
        const div=document.createElement("div")
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
        const container= document.querySelector(".container")
        container.insertAdjacentElement("beforebegin",div)
        setTimeout(function(){
            document.querySelector(".alert").remove()
        },2000)

    }
}
//EVENTO QUE INTERACTUA DESDE EL HTML
document.getElementById("personas-form").addEventListener("submit",e=>{
    e.preventDefault()
    const nombre = document.getElementById("nombre").value
    const apellido =document.getElementById("apellido").value
    const documento= document.getElementById("documento").value

    if(nombre===""||apellido===""||documento===""){
        const interfaz = new Interfaz
        interfaz.mostrarMensaje("Campos vacios, ingrese los datos","warning")
    }else{
        const persona=new Persona(nombre,apellido,documento)
        const interfaz = new Interfaz
        interfaz.addPerson(persona)
        interfaz.mostrarMensaje("Añadido correctamente","success")
    } 
})

document.getElementById("personas-list").addEventListener("click",e=>{
    console.log(e.target)
    const interfaz = new Interfaz
    interfaz.eliminarPersona(e.target)
    interfaz.mostrarMensaje("Elemento eliminado correctamente","danger")
})