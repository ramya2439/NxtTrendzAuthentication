import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isOnSubmitSuccess: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const loginFormUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginFormUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMsg: `*${data.error_msg}`, isOnSubmitSuccess: true})
    }
  }

  render() {
    const {username, password, errorMsg, isOnSubmitSuccess} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website_logo_img"
        />
        <form className="login-form-div" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website_logo"
          />
          <div className="input_container">
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="input_container">
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              placeholder="Password"
              id="password"
              value={password}
              type="password"
              onChange={this.onChangePassword}
            />
          </div>
          <div>
            <button className="submit" type="submit">
              Login
            </button>
            {isOnSubmitSuccess && <p className="errorMsg">{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
