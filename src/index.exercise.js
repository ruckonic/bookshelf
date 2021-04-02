import * as React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'

// Styles
import '@reach/dialog/styles.css'

//
import {Logo} from 'components/Logo'
import {LoginForm} from 'components/LoginForm'

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  function login({username, password}) {
    window.alert(`${username}`)
  }
  function register({username, password}) {
    window.alert(`${username}`)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h2>Bookshelf</h2>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <button onClick={() => setOpenModal('none')}>Close</button>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>

      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <button onClick={() => setOpenModal('none')}>Close</button>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  )
}
// 🐨 use ReactDOM to render the <App /> to the root element
const root = document.getElementById('root')
ReactDOM.render(<App />, root)
// 💰 find the root element with: document.getElementById('root')
