export default {
  required: (value) => value || (value && value.constructor.name) === 'Number'
    ? undefined
    : 'Required',
  minLength: (min) => (value) => value && value.length < min
    ? `Must be ${min} characters or more`
    : undefined,
  email: (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
};
