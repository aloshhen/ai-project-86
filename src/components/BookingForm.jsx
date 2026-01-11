import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { cn } from '../utils'

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  time: Yup.string().required('Required'),
  guests: Yup.number().required('Required')
})

export default function BookingForm() {
  return (
    <section id="booking" className={cn('py-20 bg-dark text-light')}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Book a Table</h2>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            date: '',
            time: '',
            guests: 1
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-lg mx-auto space-y-4">
              <Field
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-secondary text-light"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
              <Field
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg bg-secondary text-light"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500" />
              <Field
                name="date"
                type="date"
                className="w-full px-4 py-2 rounded-lg bg-secondary text-light"
              />
              <ErrorMessage name="date" component="div" className="text-red-500" />
              <Field
                name="time"
                type="time"
                className="w-full px-4 py-2 rounded-lg bg-secondary text-light"
              />
              <ErrorMessage name="time" component="div" className="text-red-500" />
              <Field
                name="guests"
                type="number"
                min="1"
                className="w-full px-4 py-2 rounded-lg bg-secondary text-light"
              />
              <ErrorMessage name="guests" component="div" className="text-red-500" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
              >
                Book Now
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}