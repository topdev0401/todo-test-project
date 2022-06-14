export default function validate(values) {
  const errors = {};

  if (values.email !== undefined) {
    if (!values.email) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Not a valid email.";
    } else if (values.email.length >= 50) {
      errors.email = "Email length should be no more than 50 characters."
    }
  }

  if (values.password !== undefined) {
    if (!values.password) {
      errors.password = 'Password is required.';
    } else if (values.password.length < 4) {
      errors.password = "Must be at least 4 characters."
    } else if (values.password.length > 16) {
      errors.password = "Password length should be no more than 16 letters."
    }
  }

  return errors;
}