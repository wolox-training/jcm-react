export const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Ingresa tu email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Selecciona una dirección de email válido';
  }

  if (!values.password) {
    errors.password = 'Selecciona una contraseña';
  } else if (values.password.length < 8) {
    errors.password = 'Debe tener al menos 8 caracteres';
  }

  return errors;
};
