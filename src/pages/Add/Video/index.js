import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import RowFlex from '../../../components/RowFlex';
import Field from '../../../components/Form/components/Field';
import PageDefault from '../../../components/PageDefault';
import FormWrapper from '../../../components/Form/components/Wrapper';
import FormButton from '../../../components/Form/components/FormButton';

import useForm from '../../../hooks/useForm';

import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function AddNewVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryNames = categories.map(({ name }) => name);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    categoryId: '',
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
          const chosenCategory = categories.find((category) => category.name === values.categoryId);
          if (values.title.length > 0 && values.url.length > 0 && values.categoryId.length > 0) {
            videosRepository.create({
              title: values.title,
              url: values.url,
              categoryId: chosenCategory.id,
            })
              .then(() => {
                history.push('/');
              });
          }
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
              Add Video
            </FormButton>
          </RowFlex>

        </form>
      </FormWrapper>
    </PageDefault>
  );
}

export default AddNewVideo;
