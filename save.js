const form = document.querySelector('[data-form]')

form.addEventListener("submit", event => {
    //prevents the behavior of clearing form data when it is submitted
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]')
    const cpf = event.target.querySelector('[data-cpf]')

    if(validateCPF(cpf.value)) {
        saveCustomer(nome.value, cpf.value)
    } else {
        alert('CPF is not valid!')
    }
})