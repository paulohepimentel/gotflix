import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Label from '../../../components/Label';
import RowFlex from '../../../components/RowFlex';
import Field from '../../../components/Form/components/Field';
import PageDefault from '../../../components/PageDefault';
import FormWrapper from '../../../components/Form/components/Wrapper';
import FormButton from '../../../components/Form/components/FormButton';

import useForm from '../../../hooks/useForm';

import categoriesRepository from '../../../repositories/categories';
import List from './styles';
import Loading from '../../../components/Loading';

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
        <Loading />
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
              as={Link}
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
