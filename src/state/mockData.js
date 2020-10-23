let artworks = [
    {
        id_ : 1,
        artista: "Juan Perez",
        nombre: "El catalismo espacial",
        fecha_de_elaboracion: "15 de Octubre",
        precio: 25,
        url: "https://i.ibb.co/GpZv9dc/lourdes-min.jpg"
    }, 
    {   
        id_: 2,
        artista: "Carolina Moura",
        nombre: "La carcel",
        fecha_de_elaboracion: "28 de Abril",
        precio: 800,
        url: "https://i.ibb.co/q0CnSmc/jail.png"
    },
    {   
        id_: 3,
        artista: "Alejandro Rivera",
        nombre: "Soledad",
        fecha_de_elaboracion: "11 de Junio",
        precio: 300,
        url: "https://i.ibb.co/VT2cWyb/cactus.jpg"
    },
    {
        id_ : 4,
        artista: "Juan Perez",
        nombre: "El catalismo espacial",
        fecha_de_elaboracion: "15 de Octubre",
        precio: 25,
        url: "https://i.ibb.co/GpZv9dc/lourdes-min.jpg"
    }, 
    {   
        id_: 5,
        artista: "Carolina Moura",
        nombre: "La carcel",
        fecha_de_elaboracion: "28 de Abril",
        precio: 800,
        url: "https://i.ibb.co/q0CnSmc/jail.png"
    },
    {   
        id_: 6,
        artista: "Alejandro Rivera",
        nombre: "Soledad",
        fecha_de_elaboracion: "11 de Junio",
        precio: 300,
        url: "https://i.ibb.co/VT2cWyb/cactus.jpg"
    }
]

let artistas = [
    {
        nombre: "Juan Perez",
        fecha_de_nacimiento: 15,
        sexo: "Masculino",
        estado: "Tamaulipas",
        ciudad: "Matamoros",
        profilepic: "",
        backgroundpic: "",
        pinturas: [
            {
                artista: "Juan Perez",
                nombre: "El catalismo espacial",
                fecha_de_elaboracion: "15 de Octubre",
                precio: 25
            }
        ],
    },
    {
        nombre: "Carolina Moura",
        fecha_de_nacimiento: 20,
        sexo: "Femenino",
        estado: "Jalisco",
        ciudad: "Guadalajara",
        profilepic: "",
        backgroundpic: "",
        pinturas: [
            {
                id_: 5,
                artista: "Carolina Moura",
                nombre: "La carcel",
                fecha_de_elaboracion: "28 de Abril",
                precio: 800,
                url: "https://i.ibb.co/q0CnSmc/jail.png"
            }
        ],
    },
    {
        nombre: "Alejandro Rivera",
        fecha_de_nacimiento: 3,
        sexo: "Masculino",
        estado: "Veracruz",
        ciudad: "Xalapa",
        profilepic: "",
        backgroundpic: "",
        pinturas: [
            {   
                id_: 6,
                artista: "Alejandro Rivera",
                nombre: "Soledad",
                fecha_de_elaboracion: "11 de Junio",
                precio: 300,
                url: "https://i.ibb.co/VT2cWyb/cactus.jpg"
            }
        ],
    }
]

export const getArt = () => {
    return artworks
}

export const getJuanPerez = () => {
    return artistas[0]
}