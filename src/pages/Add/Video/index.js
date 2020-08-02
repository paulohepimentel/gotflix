import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import RowFlex from '../../../components/RowFlex';
import Field from '../../../components/Form/Field';
import PageDefault from '../../../components/PageDefault';
import FormWrapper from '../../../components/Form/Wrapper';

import useForm from '../../../hooks/useForm';

import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import FormButton from '../../../components/Form/FormButton';

function AddNewVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryNames = categories.map(({ name }) => name);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault to="/add/category" textButton="Add Category">
      <FormWrapper formTitle="New Video">
        <form onSubmit={(event) => {
          event.preventDefault();
          // eslint-disable-next-line no-alert
          // alert('Video Cadastrado com sucesso');
          const categoryId = categories.find((category) => category.name === values.category);
          videosRepository.create({
            title: values.title,
            url: values.url,
            categoryId,
          })
            .then(() => {
              history.push('/');
            });
        }}
        >
          <Field
            label="Video Title"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />

          <Field
            label="Video Category"
            type="text"
            name="categoryId"
            value={values.categoryId}
            onChange={handleChange}
            suggestions={categoryNames}
          />

          <Field
            label="Video URL"
            type="text"
            name="url"
            value={values.url}
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
              Add Video
            </FormButton>

          </RowFlex>
        </form>
      </FormWrapper>
    </PageDefault>
  );
}

export default AddNewVideo;
