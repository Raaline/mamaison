import './Mamaison.css';
import React from 'react';
import {Pagination} from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import Home from "./Home"
//import appartement1 from './image/appartement1.jpg'
//import appartement2 from './image/appartement2.jpg'
//import appartement3 from './image/appartement3.jpg'
//import appartement4 from './image/appartement4.jpg'
//import appartement5 from './image/appartement5.jpg'
//import appartement6 from './image/appartement6.jpg'
//import chambre1 from './image/chambre1.jpg'
//import chambre2 from './image/chambre2.jpg'
//import chambre3 from './image/chambre3.jpg'
//import chambre4 from './image/chambre4.jpg'
//import chambre5 from './image/chambre5.jpg'
//import chambre6 from './image/chambre6.jpg'
//import studio1 from './image/studio1.jpg'
//import studio2 from './image/studio2.jpg'
//import studio3 from './image/studio3.jpg'
//import studio4 from './image/studio4.jpg'
//import studio5 from './image/studio5.jpg'
//import studio6 from './image/studio6.jpg'



class Mamaison extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
           location:[
            {id: 1, photo: "https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082261/images/appartement1_a6gmka.jpg", type: "appartement", nbrsl:1, nbrdch:2, nbrch:2, nbrcu:1, loyer:400000, etat:"disponible"},
            {id: 2, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082260/images/appartement2_bgectl.jpg", type: "appartement", nbrsl:1, nbrdch:2, nbrch:2, nbrcu:1, loyer:400000, etat:"disponible"},
            {id: 3, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082261/images/appartement3_okhuys.jpg", type: "appartement", nbrsl:1, nbrdch:2, nbrch:2, nbrcu:1, loyer:400000, etat:"disponible"},
            {id: 4, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082261/images/appartement4_suteim.jpg", type: "appartement", nbrsl:1, nbrdch:2, nbrch:2, nbrcu:1, loyer:400000, etat:"disponible"},
            {id: 5, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082261/images/appartement5_vaauh4.jpg", type: "appartement", nbrsl:1, nbrdch:2, nbrch:2, nbrcu:1, loyer:400000, etat:"disponible"},
            {id: 6, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082261/images/appartement6_u3fpvp.jpg", type: "appartement", nbrsl:1, nbrdch:2, nbrch:2, nbrcu:1, loyer:400000, etat:"disponible"},
            {id: 7, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082262/images/chambre1_ucyvxj.jpg", type: "chambre", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:1, loyer:90000, etat:"disponible"},
            {id: 8, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082262/images/chambre2_zquauw.jpg", type: "chambre", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:1, loyer:90000, etat:"disponible"},
            {id: 9, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082262/images/chambre3_tqkaeq.jpg", type: "chambre", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:1, loyer:90000, etat:"disponible"},
            {id: 10, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082262/images/chambre4_uwor9x.jpg", type: "chambre", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:1, loyer:90000, etat:"disponible"},
            {id: 11, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082263/images/chambre5_vzlana.jpg", type: "chambre", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:1, loyer:90000, etat:"disponible"},
            {id: 12, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082263/images/chambre6_jszpcj.jpg", type: "chambre", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:1, loyer:90000, etat:"disponible"},
            {id: 13, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082263/images/studio1_t1dnzu.jpg", type: "studio", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:0, loyer:45000, etat:"disponible"},
            {id: 14, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082263/images/studio2_hsd2n5.jpg", type: "studio", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:0, loyer:45000, etat:"disponible"},
            {id: 15, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082264/images/studio3_g8cdkt.jpg", type: "studio", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:0, loyer:45000, etat:"disponible"},
            {id: 16, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082264/images/studio4_tnq0zg.jpg", type: "studio", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:0, loyer:45000, etat:"disponible"},
            {id: 17, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082264/images/studio5_a0ockb.jpg", type: "studio", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:0, loyer:45000, etat:"disponible"},
            {id: 18, photo:"https://res.cloudinary.com/dceurkhvj/image/fetch/h_100/https://res.cloudinary.com/dceurkhvj/image/upload/v1619082261/images/studio6_f1gmyc.jpg", type: "studio", nbrsl:0, nbrdch:1, nbrch:1, nbrcu:0, loyer:45000, etat:"disponible"},
          ],
          currentPage: 1,
          logPerPage: 4,

         
    
        }
    }

    handleChange = value => {
        this.setState({
          currentPage: value
        });
      };
    
    handleSelectChange = e => {
        this.setState({
          logPerPage: e.target.value,
          currentPage: 1
        });
      };   

      //concernant axios pour le serveur distant 
    componentDidMount() {
      axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
        .then(res => {
          const listLogement = res.data;
          console.log(listLogement)
          this.setState({location:listLogement});
          
        })
    
    }
   

        render( ){
            const {
                currentPage,
                logPerPage,
                location
              } = this.state;
    
              const indexOfLastLog = currentPage * logPerPage;
              const indexOfFirstLog = indexOfLastLog - logPerPage;

      console.log(this.props)        


              
  return <div>
        <div className="container">
             { location.slice(this.state.location.length -25,this.state.location.length).slice(indexOfFirstLog, indexOfLastLog).map((data) =>{
              return(
                <Home  id = {data.id} 
                salon = {data.livingRoomNumber} 
                image = {data.photo} 
                name = {data.roomName}
                douche = {data.showerNumber} 
                chambre = {data.bedroomNumber} 
                cuisine = {data.cookedNumber} 
                price = {data.rentCost}
                statut = {data.roomStateName} 
                house = {data} 
               />
              )
                } )}
         </div>       
                
                <div className="pagination_div">
                     <Pagination
                        defaultCurrent={this.state.currentPage}
                        defaultPageSize={this.state.logPerPage} //default size of page
                        pageSize={this.state.logPerPage}
                        onChange={this.handleChange}
                        total={this.state.location.length > 0 && this.state.location.length - (this.state.location.length -25)} //total number of card data available
                        />
               </div>
               <div className="nbreelt">
                    <select
                        value={this.state.logPerPage}
                        onChange={this.handleSelectChange}
                    >
                        <option>4</option>
                        <option>8</option>
                        <option>10</option>
                    </select>
                    </div>
            </div>
     }
}

const mapStateToProps = state => {
  return {
    favoritesLog:state.favoritesLog
  };
};
export default connect(mapStateToProps)(Mamaison);

//export default Mamaison;