import { useState } from 'react';

function useForm(defaultCategory) {
  const [values, setValues] = useState(defaultCategory);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(defaultCategory);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
