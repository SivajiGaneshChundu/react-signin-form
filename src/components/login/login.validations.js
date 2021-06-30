export const requiredValidation = value =>  value === '' || value === null || value === undefined

export const patternValidation = (pattern, value) => pattern.test(value)