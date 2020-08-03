import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Label from '../../../components/Label';
import RowFlex from '../../../components/RowFlex';
import Field from '../../../components/Form/Field';
import PageDefault from '../../../components/PageDefault';
import FormWrapper from '../../../components/Form/Wrapper';
import FormButton from '../../../components/Form/FormButton';

import useForm from '../../../hooks/useForm';

import categoriesRepository from '../../../repositories/categories';
import List from './styles';

function AddNewCategory() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { values, handleChange } = useForm({
    name: '',
    color: '#ff0000',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault to="/add/video" textButton="Add Video">

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <FormWrapper formTitle="New Category">
        <form onSubmit={(event) => {
          event.preventDefault();
          if (values.name.length > 0) {
            categoriesRepository.create({
              name: values.name,
              color: values.color,
            })
              .then(() => {
                history.push('/add/video');
              });
          }
        }}
        >

          <Field
            label="Category Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <Field
            label="Category Color"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />

          <RowFlex>
            <FormButton
              style={{ background: '#6c757d' }}
              to="/"
            >
              Cancel
            </FormButton>

            <FormButton
              style={{ background: '#0dc143' }}
              type="submit"
            >
              Add Category
            </FormButton>
          </RowFlex>
        </form>
      </FormWrapper>

      <List>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            <Label
              text={category.name}
              color={category.color}
            />
          </li>
        ))}
      </List>

    </PageDefault>
  );
}

export default AddNewCategory;
