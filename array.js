function gerarInfo(){
    const listaNaves = [
        ["Fenix", 8, true],
        ["Golias", 10, true],
        ["Helmet", 5, false],
        ["Elemental", 3, true],
        ["Darwin", 15, false]
    ]
    
    let naves9Tripulantes = listaNaves.filter(spaceship => {
        return spaceship[1] > 9
    }).map(spaceship => {
        return spaceship[0]
    })
    
    let resgatePlataforma = listaNaves.findIndex(spaceship => {
        return spaceship[2] == false
    })
    
    let uppercaseNaves = listaNaves.map(spaceship => {
        return spaceship[0].toUpperCase()
    })
    
    let firstMessage = "Espaçonaves com mais de 9 tripulantes: " + naves9Tripulantes.join(", ")
    let secondMessage = "\nPlataforma com processo de engate: " + (resgatePlataforma + 1)
    let thirdMessage = "\nEspaçonaves destacadas: " + uppercaseNaves.join(", ")
    
    let messagePage = document.getElementById("arrayJavaScript");
    
    messagePage.innerHTML = `<p> ${firstMessage} </p> <p> ${secondMessage} </p> <p> ${thirdMessage}</p>`
}


