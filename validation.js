function checkInvalidCPF(cpf) {
    const invalidNumbers = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ]

    return invalidNumbers.indexOf(cpf) === -1
}

function sum(cpf, total, weight) {
    let count = 0

    for(let index = 1; index <= total; index++) {
        count += parseInt(cpf.substring(index - 1, index)) * (weight - index)
    }

    return count
}

function checkDigit(cpf, total, weight, digit) {
    const count = sum(cpf, total, weight)
    const rest = (count * 10) % 11

    return rest === digit
}

function checkFirstDigit(cpf) {
    const weight = 11
    const totalDigitFirstPart = 9
    const digit = parseInt(cpf.substring(9,10))

    return checkDigit(cpf, totalDigitFirstPart, weight, digit)
}

function checkSecondDigit(cpf) {
    const weight = 12
    const totalDigitSecondPart = 10
    const digit = parseInt(cpf.substring(10,11))

    return checkDigit(cpf, totalDigitSecondPart, weight, digit)
}

function validateCPF(cpf) {
    return (
        checkFirstDigit(cpf) &&
        checkSecondDigit(cpf) &&
        checkInvalidCPF(cpf)
    )
}