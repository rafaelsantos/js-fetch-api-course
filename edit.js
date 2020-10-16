const path = new URL(window.location)
const id = path.searchParams.get("id")

const cpf = document.querySelector('[data-cpf]')
const name = document.querySelector('[data-nome]')

getCustomer(id).then(data => {
    cpf.value = data[0].cpf
    name.value = data[0].nome
})

const editForm = document.querySelector('[data-form]')

editForm.addEventListener('submit', event => {
    event.preventDefault()

    if(!validateCPF(cpf.value)) {
        alert("CPF inválido")
        return
    }

    updateCustomer(id, cpf.value, name.value)
})
