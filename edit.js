const path = new URL(window.location)
const id = path.searchParams.get("id")

const cpf = document.querySelector('[data-cpf]')
const name = document.querySelector('[data-nome]')

getCustomer(id).then(data => {
    cpf.value = data[0].cpf
    name.value = data[0].nome
})