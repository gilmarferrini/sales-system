import { validate } from "../src/main"

describe('validate', () => {

  const validCpfs = [
    '987.654.321-00',
    '566.803.980-37',
    '077.159.720-70',
    '062.819.790-01'
  ]

  it.each(validCpfs)('Should return true if cpf is valid: %s', (cpf) => {
    expect(validate(cpf)).toBeTruthy()
  })
})