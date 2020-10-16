const path = new URL(window.location)
const id = path.searchParams.get("id")

const cpf = document.querySelector('[data-cpf]')
const name = document.querySelector('[data-nome]')

getCustomer(id).then(data => {
    cpf.value = data[0].cpf
    name.value = data[0].nome
})

const editForm = document.querySelector('[data-form]')

const success = (message) => {
    const line = document.createElement("tr");
  
    const content = `
        <div class="alert alert-success" role="alert">
            ${message}
        </div>
    `;
  
    line.innerHTML = content;
  
    return line;
}

const error = (message) => {
    const line = document.createElement("tr");
  
    const content = `
        <div class="alert alert-warning" role="alert">
            ${message}
        </div>
    `;
  
    line.innerHTML = content;
  
    return line;
}

editForm.addEventListener('submit', event => {
    event.preventDefault()

    if(!validateCPF(cpf.value)) {
        alert("CPF inválido")
        return
    }

    updateCustomer(id, cpf.value, name.value).then(response => {
        if(response.status === 200) {
            editForm.appendChild(success(
                "Customer edited successfully"
            ))
        } else {
            editForm.appendChild(error(
                "Error on editing customer"
            ))
        }
    })
})
