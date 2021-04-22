export interface JwtResponseI { // aqui recibo
    token: string,
    expiresIn: string,
    user: {
        id: number,
        nombre:string,
        apellido: string,
        email: string,
        admin: string,
        verificado: number,
        estado: string
    }


    // dataUser:{
    //     id:number,
    //     nombre: string,
    //     email: string,
    //     accessToken: string,
    //     expiresIn: string
    // }
}
