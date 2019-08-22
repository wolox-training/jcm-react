import FORM_VALIDATIONS from '~utils/formValidations'; // eslint-disable-line import/no-unresolved

export const VALIDATIONS = {
  email: [FORM_VALIDATIONS.required, FORM_VALIDATIONS.email],
  password: [FORM_VALIDATIONS.required, FORM_VALIDATIONS.minLength(8)]
};

export const ERROR_MESSAGES = {
  Unauthorized: {
    title: 'Login Failed',
    description: 'Are you sure this is the right password?'
  }
};
