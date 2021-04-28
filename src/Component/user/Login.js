import React from 'react';
import axios from "axios";


class Login extends React.Component {
    constructor(props){
        super(props);
          
        this.state={
          
            login: {
                userLogin: "",
                userPassWord: ""
              }
        }
    }
  

    handleChange = e => {
        let logintmp=this.state.login
        logintmp[e.target.name]=e.target.value
    
        this.setState({
          login:logintmp
    });

    }

    handleSubmit = e => {
      console.log(this.state.login);
      axios.post("https://mamaison.arenaplaza.site/api/User/Authentificate", this.state.login )
      .then(res => {
        console.log(res.data);
      }).catch(erreur =>{
        alert("problème")
        console.log(erreur);
    });

       localStorage.setItem('token', "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUmFhbGluZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFnZW50IiwiZXhwIjoxNjE5MDc1NDExLCJpc3MiOiJ0ZXN0IiwiYXVkIjoiSW5mb3JtYXRpb24ifQ.2jbb1cPIMrQfwuc9bW0C2KRQrz7fO2XkPGMM8vFZKFk")
       
       //const userToken= localStorage.getItem('token')
       //console.log(userToken);

      e.preventDefault ();
    }

 
      render() 
      {
        
        
      return <div className="login">
            <form className="login" onSubmit={this.handleSubmit}>
              <div className="userLogin">
              <label>
                  Nom d'utilisateur:
                  <input type="text" value={this.state.login["userLogin"]}
                  onChange={this.handleChange}  name="userLogin" />

              </label>
              </div>
              <br/>

              <div className="userPassWord">
              <label>
                  Entrer votre mot de passe:
                  <input type="password"  value={this.state.login["userPassWord"]}
                  onChange={this.handleChange}  name="userPassWord" />

              </label>
              </div>
              <br/>

            
              
              <input type="submit" value="acceder" /> 
            </form>
        </div>
      
    }
    }
   
    export default Login