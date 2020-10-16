const url = "http://localhost:4000/clientes"
const urlPost = "http://localhost:4000/clientes/cliente"
const urlDelete = "http://localhost:4000/clientes/cliente/id"

const getCustomers = () => {
    return fetch(url, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };

const saveCustomer = (nome, cpf) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  })
  return fetch(urlPost, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
  .then(response => {
    return response.body
  })
}

const deleteCustomer = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE"
  })
}

const getCustomer = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "GET"
  })
  .then(response => {
    return response.json()
  })
}

const updateCustomer = (id, cpf, name) => {
  const json = JSON.stringify({
    nome: name,
    cpf: cpf
  })
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
}