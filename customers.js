const listCustomers = (cpf, nome) => {
    const line = document.createElement("tr");
  
    const content = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `;
  
    line.innerHTML = content;
  
    return line;
  };
  
  const table = document.querySelector("[data-content-table]");
  
  getCustomers().then(customers => {
    customers.forEach(customer => {
        table.appendChild(listCustomers(customer.cpf, customer.nome));
    });
  });