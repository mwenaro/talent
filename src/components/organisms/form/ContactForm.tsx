'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, errorToast, successToast } from '../toast';

interface ContactFormValues {
  clientName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: ContactFormValues = {
    clientName: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema: Yup.Schema<ContactFormValues> = Yup.object().shape({
    clientName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const handleSubmit = async (
    values: ContactFormValues,

    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    // Handle form submission logic here
    // console.log(values);
    try {
      let res = await fetch('/api/contact/form', {
        method: 'POST',
        body: JSON.stringify(values),
      });

      let data: any = await res.json();
      // alert("Form submitted successfully")
      successToast('Form successfully submitted');
      resetForm();
      console.log({ data });
    } catch (error) {
      errorToast('Something went wrong, check your data and try again');
    }

    setSubmitting(false);
  };

  return (
    <Formik<ContactFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form id="contact_form">
        <div className="mb-6">
          <Field
            type="text"
            placeholder="Your Name"
            name="clientName"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
          <ErrorMessage
            name="clientName"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="mb-6">
          <Field
            type="email"
            name="email"
            placeholder="Your Email"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="mb-6">
          <Field
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
          <ErrorMessage name="phone" component="div" className="text-red-500" />
        </div>

        <div className="mb-6">
          <Field
            as="textarea"
            rows={6}
            name="message"
            placeholder="Your Message"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary border-primary w-full rounded border p-3 text-white bg-[#0d0452] hover:bg-skin-accent transition hover:bg-opacity-90"
          >
            Send Message
          </button>
        </div>
        <ToastContainer></ToastContainer>
      </Form>
    </Formik>
  );
};

export default ContactForm;
