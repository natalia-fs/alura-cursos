listarClientes = () =>{
    return fetch('http://localhost:4000/clientes')
    .then(response => {
        return response.json()
    })
    .then( json => {
        return json
    })
}