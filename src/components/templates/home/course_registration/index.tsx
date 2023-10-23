'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { OUR_COURSES } from '@/constants/COURSES';
import { Typography } from '@/components';

interface FormValues {
  name: string;
  course: string;
  email: string;
  phone: string;
  nextOfKinName: string;
  nextOfKinEmail: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  course: Yup.string().required('Course selection is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  nextOfKinName: Yup.string().required('Next of kin name is required'),
  nextOfKinEmail: Yup.string()
    .email('Invalid email address')
    .required('Next of kin email is required'),
});

const RegistrationForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    course: '',
    email: '',
    phone: '',
    nextOfKinName: '',
    nextOfKinEmail: '',
  };

  const handleSubmit = (values: FormValues) => {
    // Handle form submission logic here
    console.log(values);
    
  };

  return (
    <div className="max-w-lg mx-auto m-4">
      <Typography variant="h2" className="text-2xl md:text-4xl">
        Course Booking Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="px-4 py-2 md:p-10">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="course" className="block mb-1 font-medium">
              Select Course:
            </label>
            <Field
              as="select"
              id="course"
              name="course"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Select a course
              </option>
              {/* <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option> */}
              {OUR_COURSES.map((course) => (
                <option key={course.title} value={course.title}>
                  {course.title}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="course"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 font-medium">
              Phone:
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nextOfKinName" className="block mb-1 font-medium">
              Next of Kin Name:
            </label>
            <Field
              type="text"
              id="nextOfKinName"
              name="nextOfKinName"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="nextOfKinName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nextOfKinEmail" className="block mb-1 font-medium">
              Next of Kin Email:
            </label>
            <Field
              type="email"
              id="nextOfKinEmail"
              name="nextOfKinEmail"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="nextOfKinEmail"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
