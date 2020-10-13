const url = "http://localhost:4000/clientes"

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
  return fetch(url, {
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