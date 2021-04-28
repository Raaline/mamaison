import React from 'react';
import axios from "axios";
//import './AddLogement.css';
//construction du table de base qui va etre modifié plus tard 
class AddLogement extends React.Component {
    constructor(props){
        super(props);
          
        this.state={
          
             LogAdd:{
               roomName:"chambre80", //type
               livingRoomNumber:0, //salon
               showerNumber:1, //douche
               bedroomNumber:1,  //chambre
               cookedNumber:0,  //cuisine 
               rentCost:10000,  //loyer
               roomStateName:"Disponible", //etat
               roomCategory: {
   
              },
              roomDaCreated: "2021-04-15T09:42:31.173Z" 
              },

              addlogimg:[],
              //tableau pour envoyer le contenu a cloudinary via axios
              cloudimg:[]
  
        }
    }
  


    //premiere modification du tableau 
    handleChange = e => {
      if (e.target.name==="addimage"){
         if(this.state.addlogimg.length<4){

        
          let addlogimgtmp=this.state.addlogimg
          addlogimgtmp.push(e.target.files[0])
          
          this.setState({
            addlogimg:addlogimgtmp,
          })
         }

      } else{

            let LogAddtmp=this.state.LogAdd
              LogAddtmp[e.target.name]=e.target.value
          this.setState({
            LogAdd:LogAddtmp
          });
    }


    }

    //Suppression de l'image 
    deleteImage = index=> {
      let addlogimgtmp=this.state.addlogimg
      addlogimgtmp.splice(index,1)
      this.setState({
         addlogimg:addlogimgtmp
      });
    } 

    //deuxieme modification mais celle ci s'applique au bouton envoyer 
    handleSubmit = e => {
      console.log(this.state.addlogimg);
      const formData= new FormData();
      formData.append('file',this.state.addlogimg[0]);
      formData.append('upload_preset', 'ml_default');

      const options={
        method: 'POST',
        body: formData,
      };
      e.preventDefault ();

      //transfert de l'image à cloudinary 
      axios.post(`https://api.cloudinary.com/v1_1/dceurkhvj/image/upload`, formData)
      .then(res => {
        console.log(res.data.url);

        let LogAddtmp=this.state.LogAdd
        LogAddtmp['image']=res.data.url

        this.addRoom(LogAddtmp)
        this.setState({
         LogAdd:LogAddtmp,
        })

      }).catch(erreur =>{
      //on traite ici les erreurs éventuellement survenues
        alert("serveur indisponible")
        console.log(erreur);
    });
      e.preventDefault ();
    
    
    }


    addRoom(room){
      console.log(room);
      axios.post(`https://mamaison.arenaplaza.site/api/Room/CreatedRoom`, room )
      .then(res => {
        console.log(res);
        console.log(res.data);
	//On traite la reponse obtenue
      }).catch(erreur =>{
        //On traite ici les erreurs éventuellement survenues
        console.log(erreur);
    });
    }
    
    //le render affiche le contenu a voir 
      render() 
      {
        //const {LogAdd} = this.state;
        
      return <div className="addlogement">
           <section className="section">
            <form className="formulaire" onSubmit={this.handleSubmit}>
              <div className="Type">
              <label>
                  Type<span>*</span>:
                  <select 
                   value={this.state.LogAdd["roomName"]}//l'élément selectionné va etre enrégistré dans le tableau 
                   onChange={this.handleChange}  name="roomName" >
                     
                  <option>appartement</option>
                  <option>chambre</option>
                  <option>studio</option>

                  </select>
              </label>
              </div>
              <br/>

              <div className="salon">
              <label>
                Nombre de Salon<span>*</span>:
                  <select 
                   value={this.state.LogAdd["livingRoomNumber"]}
                   onChange={this.handleChange} name="livingRoomNumber" >

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select>
              </label>
              </div>
              <br/>

              <div className="chambre">
              <label>
                  Nombre de Chambre<span>*</span>:
                  <select 
                   value={this.state.LogAdd["bedroomNumber"]}
                   onChange={this.handleChange} name="bedroomNumber" >

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select>
              </label>
              </div>
              <br/>

              <div className="douche">
              <label>
                  Nombre de Douche <span>*</span>:
                  <select 
                   value={this.state.LogAdd["showerNumber"]}
                   onChange={this.handleChange} name="showerNumber" >

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select>
              </label>
              </div>
              <br/>

              <div className="cuisine">
              <label>
                  Nombre de cuisine<span>*</span>:
                  <select 
                   value={this.state.LogAdd["cookedNumber"]}
                   onChange={this.handleChange} name="cookedNumber" >

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select>
              </label>
              </div>
              <br/>

              <div className="etat">
              <label>
                  Etat<span>*</span>:  
                  <select 
                   value={this.state.LogAdd["roomStateName"]}
                   onChange={this.handleChange} name="roomStateName">

                  <option>Disponible</option>
                  <option>Occupé </option>

                  </select>
              </label>
              </div>
              <br/>

              <div className="loyer">
              <label>
                  Loyer<span>*</span>:
                  <input type="number" min={10000} max={1000000}
                   value={this.state.LogAdd["rentCost"]}
                   onChange={this.handleChange} name="rentCost"/>

              </label>
              </div>
              <br/>

              <div className="addimage">
              <input type="file" name="addimage" accept="image/png, image/jpeg"
              onChange={this.handleChange} disabled={this.state.addlogimg.length===4}/>
              </div>
              <div>
                {this.state.addlogimg.map((infoimg,index)=>{
                  return <div key={index} className="iconeimg"> 
                  <img src={URL.createObjectURL(infoimg)} width="100" height="100"/> 
                  <button onClick={this.deleteImage}>-</button>
                  </div>
                })}
              </div>
              
              <br/>
              <input type="submit" value="Envoyer" className="soumettre"/> 
            </form>
            </section>
        </div>
      
    }
    }


export default AddLogement 