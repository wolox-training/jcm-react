import FORM_VALIDATIONS from '~utils/formValidations'; // eslint-disable-line import/no-unresolved

export const VALIDATIONS = {
  email: [FORM_VALIDATIONS.required, FORM_VALIDATIONS.email],
  password: [FORM_VALIDATIONS.required, FORM_VALIDATIONS.minLength(8)]
};

const ERRORS = {
  unauthorized: 'Unauthorized'
};

export const ERROR_MESSAGES = {
  [ERRORS.unauthorized]: {
    title: 'Login Failed',
    description: 'Are you sure this is right password?'
  }
};
