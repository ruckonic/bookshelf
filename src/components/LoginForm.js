function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()

    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button>{buttonText}</button>
    </form>
  )
}

export {LoginForm}
