import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleBlur = () => {
    setErrors(validate(values));
  };

  const handleFocus = () => {
    setErrors(validate(values));
  };


  const handleChange = event => {
    event.persist();
    const targetName = event.target.name;
    const nextState = {
      ...values,
      [targetName]: event.target.value,
    }
    const validateErrors = validate({[targetName]: event.target.value});
    if(validateErrors[targetName] === undefined) {
      var resErr = errors;
      delete resErr[targetName];
      setErrors(resErr);
    } else {
      setErrors({ ...errors, ...validateErrors });
    }
    setValues(nextState);
  };

  const reset = () => {
    setValues({});
  }

  return {
    handlers: {
      handleChange,
      handleSubmit,
      handleBlur,
      handleFocus,
      reset,
    },
    values,
    errors,
  };
};

export default useForm;
