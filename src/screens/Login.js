import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    console.log(props);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);
  }
  
  updateEmail(e){
      this.setState({email: e.target.value});
  }
  updatePassword(e){
    this.setState({password: e.target.value});
}

login(){
  const { email,password } = this.state;
    (email == 'admin@domain.com' && password=='admin') ? this.props.login() : alert("Wrong Credentials");
}
  render() {
   return (
     <div class="container">
       <input type="text" placeholder="email" onChange={this.updateEmail}/>
       <input type="password" placeholder="password" onChange={this.updatePassword}/>
       <button onClick={this.login}>LOGIN</button>
     </div>
     
   );
  }
}

export default Login;
