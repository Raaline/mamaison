import React from 'react';
import axios from "axios";

//construction du table de base qui va etre modifié plus tard 
class Signup extends React.Component {
    constructor(props){
        super(props);
          
        this.state={
          
            user: {
                userLogin: "",
                userPassWord: "",
                agentName: "",
                agentEmail: "",
                image: "string1"
              }
        }
    }
  

    handleChange = e => {
        let usertmp=this.state.user
        usertmp[e.target.name]=e.target.value
    
        this.setState({
          user:usertmp
    });

    }

    handleSubmit = e => {
      console.log(this.state.user);
      axios.post("https://mamaison.arenaplaza.site/api/User/CreatedUser", this.state.user )
      .then(res => {
        console.log(res.data);
      }).catch(erreur =>{
        alert("problème")
        console.log(erreur);
    });
     
      e.preventDefault ();
    }


      render() 
      {
        
        
      return <div className="signup">
            <form className="sign" onSubmit={this.handleSubmit}>
              <div className="userLogin">
              <label>
                  Nom d'utilisateur:
                  <input type="text" value={this.state.user["userLogin"]}
                  onChange={this.handleChange}  name="userLogin" />

              </label>
              </div>
              <br/>

              <div className="userPassWord">
              <label>
                  Entrer votre mot de passe:
                  <input type="password"  value={this.state.user["userPassWord"]}
                  onChange={this.handleChange}  name="userPassWord" />

              </label>
              </div>
              <br/>

              <div className="agentName">
              <label>
                  Nom et Prénoms:
                  <input type="text"  value={this.state.user["agentName"]}
                  onChange={this.handleChange}  name="agentName" />

              </label>
              </div>
              <br/>

              <div className="agentEmail">
              <label>
                  Email:
                  <input type="email"  value={this.state.user["agentEmail"]} 
                  onChange={this.handleChange}  name="agentEmail" />

              </label>
              </div>
              <br/>

              
              <input type="submit" value="Enregistrer" /> 
            </form>
        </div>
      
    }
    }


export default Signup