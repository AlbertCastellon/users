const detallesUSuarios = document.getElementById('listaUsuarios');
const edadAleatoria = () => {
    let edad = Math.floor(Math.random() * 50);
    if(edad < 15){
        edad += 15;
        return edad;
    }else {
        return edad;
    }
}
const obtenerPerfiles = (persona) => {
    const div = document.createElement('li')
        const persInfo = document.createElement('div')
        const name = document.createElement('p')
        const age = document.createElement('p')
        const userName = document.createElement('p')
        const telf = document.createElement('p')
        const mail = document.createElement('p')
        const compañia = document.createElement('p')
        const direccion = document.createElement('p')
        const img = document.createElement('img')
        const {street , suite , city} = persona.address
        name.innerHTML = `Nombre: ${persona.name}`
        age.innerHTML = `Edad: ${persona.edad}`
        userName.innerHTML = `Username: ${persona.username}`
        telf.innerHTML = `Teléfono: ${persona.phone}`
        mail.innerHTML = `Email: ${persona.email}`
        compañia.innerHTML = `Compañía: ${persona.company.name}`
        direccion.innerHTML = `Dirección: ${street}, ${suite}, ${city}`
        img.src = `./assets/img/${persona.id}.jpeg`
        persInfo.appendChild(name)
        persInfo.appendChild(age)
        persInfo.appendChild(userName)
        persInfo.appendChild(telf)
        persInfo.appendChild(mail)
        div.appendChild(persInfo)
        div.appendChild(img)
        div.appendChild(compañia)
        div.appendChild(direccion)
        detallesUSuarios.appendChild(div)
}
fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
    if(!response.ok){
        throw new Error ('No se ha obtenido la respuesta.')
    }else {
        return response.json()
    }
}).then((data) => {
    data.forEach((element) => {
        element.edad = edadAleatoria()
        obtenerPerfiles(element)
    })
    console.log(data)

}).catch((error) => {
    console.log('Error')
})
