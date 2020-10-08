const customers = [
    {
        cpf: 18875539081,
        name: "Mark"
    }
]

const content = `
<tr>
<td>${customers[0].cpf}</td>
<td>${customers[0].name}</td>
</tr>
`
const tableBody = document.querySelector("[data-content-table]")

tableBody.innerHTML = content