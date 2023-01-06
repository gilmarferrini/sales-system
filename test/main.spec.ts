import { validate } from "../src/main"

describe('validate', () => {

  const validCpfs = [
    '987.654.321-00',
    '566.803.980-37',
    '077.159.720-70',
    '062.819.790-01'
  ]

  const invalidCpfs = [
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33',
    '444.444.444-44',
    '555.555.555-55',
    '666.666.666-66',
    '777.777.777-77',
    '888.888.888.88',
    '999.999.999.999',
    '981.654.321-20',
    '561.803.980-37',
    '071.159.720-40',
    '061.819.790-01',
    null,
    undefined
  ]

  it.each(validCpfs)('Should return true if cpf is valid: %s', (cpf) => {
    expect(validate(cpf)).toBeTruthy()
  })

  it.each(invalidCpfs)('Should return false if cpf is invalid: %s', (cpf) => {
    expect(validate(cpf)).toBeFalsy()
  })
})