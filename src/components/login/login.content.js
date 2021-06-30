export const initialFormValues = {
  email: {
    value: '',
    error: false,
    helperText: '',
    required: true,
    pattern: {
      regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      failedText: 'Please enter valid email address',
    },
  },
  password: {
    value: '',
    error: false,
    helperText: '',
    required: true,
    pattern: {
      regex: /^[A-Za-z]\w{7,14}$/,
      failedText:
        'Password must be between 7 to 16 characters, should contain only characters, numeric digits, underscore and first character must be a letter ',
    },
  },
}

export const labelMap = {
    headers : {
        signIn : 'Sign in'
    },
    fields: {
        email: 'Email',
        password: 'Password',
        rememberMe: 'Remember Me?',
        signIn: 'Sign in'
    },
    links: {
        forgotPassword: 'Forgot your password?',
        signup: 'Sign up',
        resendEmail: 'Resend email confirmation'
    },
    generalText: {
       signup: 'Don\'t have an account?'
    }
}