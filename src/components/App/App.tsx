import LoginForm from 'components/Forms/LoginForm'

import styles from './App.module.css'

function App (): JSX.Element {
  return (
    <div className={styles.app}>
      <LoginForm />
    </div>
  )
}

export default App
