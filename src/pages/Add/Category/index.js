import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export const Input = styled.input`
    background: var(--dark);
    color: var(--white);
`;

function AddCategory() {
  const defaultCategory = {
    name: '',
    color: '#ff0000',
  };

  const { values, handleChange, clearForm } = useForm(defaultCategory);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = 'https://gotflix-server.herokuapp.com/categories';
    if (window.location.href.includes('localhost')) {
      fetch(URL).then(async (serverResponse) => {
        if (serverResponse.ok) {
          const response = await serverResponse.json();
          setCategories([
            ...response,
          ]);
          return;
        }
        throw new Error('Error');
      });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.name}
      </h1>

      <form onSubmit={function handlerSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories, values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para a Home
      </Link>
    </PageDefault>
  );
}

export default AddCategory;
