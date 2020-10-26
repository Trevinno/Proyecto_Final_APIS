let artworks = [
        {
            id_ : 1,
            artista: "Juan Perez",
            nombre: "El catalismo espacial",
            fecha_de_elaboracion: "15 de Octubre",
            precio: 25,
            categoria: 'POP',
            url: "https://i.ibb.co/GpZv9dc/lourdes-min.jpg"
        }, 
        {   
            id_: 2,
            artista: "Carolina Moura",
            nombre: "La carcel",
            fecha_de_elaboracion: "28 de Abril",
            precio: 800,
            categoria: 'Surrealismo',
            url: "https://i.ibb.co/q0CnSmc/jail.png"
        },
        {   
            id_: 3,
            artista: "Alejandro Rivera",
            nombre: "Soledad",
            fecha_de_elaboracion: "11 de Junio",
            precio: 300,
            categoria: 'Impresionismo',
            url: "https://i.ibb.co/VT2cWyb/cactus.jpg"
        },
        {
            id_ : 4,
            artista: "Juan Perez",
            nombre: "El catalismo espacial",
            fecha_de_elaboracion: "15 de Octubre",
            precio: 25,
            categoria: 'POP',
            url: "https://i.ibb.co/GpZv9dc/lourdes-min.jpg"
        }, 
        {   
            id_: 5,
            artista: "Carolina Moura",
            nombre: "La carcel",
            fecha_de_elaboracion: "28 de Abril",
            precio: 800,
            categoria: 'Surrealismo',
            url: "https://i.ibb.co/q0CnSmc/jail.png"
        },
        {   
            id_: 6,
            artista: "Alejandro Rivera",
            nombre: "Soledad",
            fecha_de_elaboracion: "11 de Junio",
            precio: 300,
            categoria: 'Impresionismo',
            url: "https://i.ibb.co/VT2cWyb/cactus.jpg"
        }
    ]
    let artistas = [
        {
            nombre: "Juan Perez",
            fecha_de_nacimiento: 15,
            sexo: "Masculino",
            estado: "Tamaulipas",
            ciudad: "Matamoros",
            profilepic: "http://simplyleonardodicaprio.com/wp-content/uploads/leo-1.jpg",
            backgroundpic: "https://i.ibb.co/NZ7R3j1/bremen-viertel.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis fugit hic vel voluptates perferendis aut quibusdam sit omnis unde aspernatur quae repellat blanditiis autem, a libero asperiores neque illum aliquid est tempore. Eveniet velit voluptate amet facere, repellendus aperiam, cumque est ipsam. Asperiores expedita iusto, inventore sit suscipit nihil repudiandae? Laboriosam cum maxime dolorem neque, in veniam expedita ad. Hic fugit necessitatibus blanditiis, optio dignissimos molestiae nam, numquam odio.",
            headline: "Artist / Teacher",
            pinturas: [
                {
                    artista: "Juan Perez",
                    nombre: "El catalismo espacial",
                    fecha_de_elaboracion: "15 de Octubre",
                    precio: 25
                }
            ],
        },
        {
            nombre: "Carolina Moura",
            fecha_de_nacimiento: 20,
            sexo: "Femenino",
            estado: "Jalisco",
            ciudad: "Guadalajara",
            profilepic: "",
            backgroundpic: "",
            desc: "",
            position: "",
            pinturas: [
                {
                    id_: 5,
                    artista: "Carolina Moura",
                    nombre: "La carcel",
                    fecha_de_elaboracion: "28 de Abril",
                    precio: 800,
                    url: "https://i.ibb.co/q0CnSmc/jail.png"
                }
            ],
        },
        {
            nombre: "Alejandro Rivera",
            fecha_de_nacimiento: 3,
            sexo: "Masculino",
            estado: "Veracruz",
            ciudad: "Xalapa",
            profilepic: "",
            backgroundpic: "",
            desc: "",
            position: "",
            pinturas: [
                {   
                    id_: 6,
                    artista: "Alejandro Rivera",
                    nombre: "Soledad",
                    fecha_de_elaboracion: "11 de Junio",
                    precio: 300,
                    url: "https://i.ibb.co/VT2cWyb/cactus.jpg"
                }
            ],
        }
    ]
    export const getArt = () => {
        return artworks
    }
    export const getJuanPerez = () => {
        return artistas[0]
    }
    