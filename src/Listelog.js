import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react'
import {Pagination} from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'

class Listelog extends React.Component{
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

  handledelete  = (e,index,id)=>{
        e.preventDefault()
        let config= {headers:{"Access-Control-Allow-Origin":"*"}} //gerer l erreur du serveur
        let locationTemp = this.state.location
        locationTemp.splice(index, 1)
         console.log(locationTemp)
         this.setState({location:locationTemp});
        axios.delete("https://mamaison.arenaplaza.site/api/Room/" + id,config).then(res => {
        console.log(res.data)
      }) 
}    


      //concernant axios pour le serveur distant 
    componentDidMount() {
      axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
        .then(res => {
          const listLogement = res.data;
          this.setState({location:listLogement});
          
        })
        console.log(this.state.location)
    
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
       <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
       </header>
       <div>
       { this.state.location.slice(this.state.location.length -25,this.state.location.length).slice(indexOfFirstLog, indexOfLastLog).map((data,index) =>{
              return(
                <div className="col" key={index}>
                <div className="card shadow-sm">
                <Link to = {`/detail/${data.id}`}><img src={"https://res.cloudinary.com/dbcjapvf8/image/fetch/w_250/" + data.roomStateName }/></Link>
                <div className="card-body">
                    <h2 className = "">{data.roomName}</h2>
                    <p>Nombre de douches : <label>{data.showerNumber}</label></p>
                    <p>Nombre de chambres : <label> {data.bedroomNumber}</label> </p>
                    <p>Nombre de salons : <label> {data.livingRoomNumber} </label> </p>
                    <p>Nombre de cuisine : <label>{data.cookedNumber}</label></p>
                    <p>Prix :<label>{data.rentCost}</label></p>
                    <p>Etat :<label>Disponible</label></p>
                   </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        
                        <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="addlogement" >Modifier</Link></button>
                        </div>
                        <small className="text-muted"><button type="button" className="btn btn-sm btn-outline-secondary" onClick = { (e) => this.handledelete (e,index,data.id)}>Supprimer</button></small>
                    </div>
                    </div>
                </div>
              )
                } )}
          </div>      
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
                    <select
                        value={this.state.logPerPage}
                        onChange={this.handleSelectChange} >

                        <option>4</option>
                        <option>6</option>
                        <option>8</option>
                    </select>
 
 </div>        
     }
}


export default Listelog
          