const customers = [
    {
        cpf: 18875539081,
        name: "Mark"
    },
    {
        cpf: 18867539081,
        name: "Paul"
    }
]

const tableBody = document.querySelector("[data-content-table]")

const showCustomers = (cpf, name) => {
    const line = document.createElement('tr')

    const content = `
        <td>${cpf}</td>
        <td>${name}</td>
    `

    line.innerHTML = content

    return line
}

customers.forEach(customer => {
    tableBody.appendChild(showCustomers(customer.cpf, customer.name))
})