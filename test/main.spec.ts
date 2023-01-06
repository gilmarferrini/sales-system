import { validate } from "../src/main"

describe('validate', () => {
  it('Should return true if cpf is valid', () => {
    const isValid = validate('987.654.321-00')
    expect(isValid).toBeTruthy()
  })
})