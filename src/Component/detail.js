import React from 'react';
import axios from "axios";
//import { connect } from 'react-redux'

class detail extends React.Component {
    constructor(props){
        super(props);

        this.state={
          
             Logdet:{
               type: "appartement", 
               nbrsl:1, 
               nbrdch:2, 
               nbrch:2, 
               nbrcu:1, 
               loyer:400000, 
               etat:"disponible"
              },
             // isFavoriteLog: this.props.match.params.isFavoriteLog
             
        }

      }
    

    componentDidMount() {
      
            const { match:{params}}= this.props; 
            let id= params.id; 
            console.log(id)
           // console.log(params.isFavoriteLog)

            axios.get("https://mamaison.arenaplaza.site/api/Room/GetRoomDetail/"+id).then(res => {
              const logementInfos = res.data;
              console.log(logementInfos)
            this.setState({   Logdet: logementInfos });
            })
        }



        handleFavoritelog=() =>{
          this.setState({
            isFavoriteLog: !this.state.isFavoriteLog
          });
          const action = { type: "TOGGLE_FAVORITE", value: this.state.Logdet };
          this.props.dispatch(action);
        
      }
      
        
    
      render() 
      {
      return (
        <div>
          <div className="image"> 
             <img src={this.state.Logdet.roomStateName} />
          </div>

          <div>
                    <h1 className="type">{this.state.Logdet.roomName}</h1>
                    <ul>
                    
                    <li></li><label>Nombre de Douche:{this.state.Logdet.showerNumber}</label><br/>
                    <li></li><label>Nombre de Chambre:{this.state.Logdet.bedroomNumber}</label><br/>
                    <li></li><label>Nombre de Salons:{this.state.Logdet.livingRoomNumber}</label><br/>
                    <li></li><label>Nombre de Cuisine:{this.state.Logdet.cookedNumber}</label><br/>
                    <li></li><label>Loyer:{this.state.Logdet.rentCost}</label> <br/>
                    <li></li><label>Etat:<button>{this.state.Logdet.romStateName}</button></label>
                    </ul>           
          </div>
                
                
        </div>
      );
    }
    
}

/*const mapStateToProps = state => {
  return {
    favoritesLog:state.favoritesLog
  };
};
export default connect(mapStateToProps)(detail);

{this.state.isFavoriteLog?<img src = {'/image/like.png'} onClick = {this.handleFavoritelog} />:<img src = {'/image/pasLike.png'} onClick = {this.handleFavoritelog} />}
*/
  
export default detail 
