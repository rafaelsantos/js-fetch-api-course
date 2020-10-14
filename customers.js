const removeCustomer = id => {
  if(confirm("Remove customer?")) {
    deleteCustomer(id)
  }
}

const listCustomers = (cpf, nome, id) => {
    const line = document.createElement("tr");
  
    const content = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger" onclick="removeCustomer(${id})">Remove</button>
        <a href="edit.html">
          <button type="button" class="btn btn-info">Edit</button>
        </a>
    `;
  
    line.innerHTML = content;
  
    return line;
  };
  
  const table = document.querySelector("[data-content-table]");
  
  getCustomers().then(customers => {
    customers.forEach(customer => {
        table.appendChild(listCustomers(customer.cpf, customer.nome, customer.id));
    });
  });