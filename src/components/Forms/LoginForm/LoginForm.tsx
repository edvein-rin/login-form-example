import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import styles from './LoginForm.module.css'

import logo from 'assets/logo.svg'

interface Values {
  username: string
  password: string
  staySignedIn: boolean
}

export default function LoginForm (): JSX.Element {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        staySignedIn: false
      }}
      isInitialValid={false}
      onSubmit={(values: Values, { setSubmitting }) => {
        alert(`Username: ${values.username}\n` +
              `Password: ${values.password}\n` +
              `Stay signed in: ${String(values.staySignedIn)}`)

        setSubmitting(false)
      }}
      validationSchema={yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
        staySignedIn: yup.boolean()
      })}
    >
      {({ isSubmitting, isValid }) => (
        <div className={styles.wrapper}>
          <Form className={styles.form}>
            <img className={styles.logo} src={logo} />
            <Field className={styles.textField} type='username' name='username' placeholder='Username' />
            <Field className={styles.textField} type='password' name='password' placeholder='Password' />
            <label className={styles.checkbox}>
              <Field type='checkbox' name='staySignedIn' />
              <div>Stay signed in</div>
            </label>
            <button className={styles.submitButton} type='submit' disabled={!isValid || isSubmitting}>Sign In</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
