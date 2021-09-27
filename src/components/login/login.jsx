import React, { useState } from "react";
import { login } from './login.io'
import { requiredValidation, patternValidation } from './login.validations'
import { initialFormValues, labelMap } from './login.content'
import './login.scss'

export function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const field = formValues[name]
    setFormValues({
      ...formValues,
      [name]: { ...field, value },
    })
  }

  const formValidation = async () => {
    let formValid = true
    const validationFields = {}
    for (const fieldName of Object.keys(formValues)) {
      const field = formValues[fieldName]
      //required validation
      if (field.required) {
        const isEmpty = requiredValidation(field.value)
        validationFields[fieldName] = {
          ...field,
          error: isEmpty,
          helperText: isEmpty ? 'Required' : '',
        }
        formValid = formValid && !isEmpty
      }
      //pattern validation
      if (field.pattern && !validationFields[fieldName].error) {
        const isPatternValid = patternValidation(field.pattern.regex, field.value)
        validationFields[fieldName] = {
          ...field,
          error: !isPatternValid,
          helperText: !isPatternValid ? field.pattern.failedText : '',
        }
        formValid = formValid && isPatternValid
      }
    }
    setFormValues({ ...formValues, ...validationFields })
    return formValid
  }

  const onSignIn = async () => {
    const isFormValid = await formValidation()
    if (!isFormValid) {
      return false
    }

    login(formValues.email.value, formValues.password.value)
      .then(res => {
        alert('Logged In')
      })
      .catch(err => {
        console.log('err', err)
      })
  }
 
  return (
    <div className="backdrop">
    <p>heeloo</p>
    <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://funds.manulife.ca/en-us/mutual' />"}} />

    </div>
  )
}
