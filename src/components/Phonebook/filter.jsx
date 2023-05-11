import React from 'react';
import { Formik, Field, Form } from 'formik';

export const Filter = ({ value, onChange }) => {
  return (
    <Formik>
      <Form>
        <label htmlFor="filter">Filter contacts:</label>
        <Field
          type="text"
          id="filter"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </Form>
    </Formik>
  );
};
