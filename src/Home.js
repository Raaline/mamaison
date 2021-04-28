import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
//import LogeDetails from './LogeDetails'
//import datas from './items.js'
import { connect } from 'react-redux'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        
            house : this.props.house,
            isFavoriteLog: this.props.isFavoriteLog
        }
    }

    handleFavoritelog=() =>{
        this.setState({
          isFavoriteLog: !this.state.isFavoriteLog
        });
        const action = { type: "TOGGLE_FAVORITE", value: this.props.house };
        this.props.dispatch(action);
      
    }



    render() {
        

        return (
            <div className = 'col'>
                
                 <div  className = "unlogement">
                 <Link to = {`/detail/${this.props.id}/${this.state.isFavoriteLog}`}><img src={"https://res.cloudinary.com/dbcjapvf8/image/fetch/w_250/" + this.props.statut}/></Link>
                    <div className = "tableau">
                    <h2 className = "">{this.props.name}</h2>
                    <p>Nombre de douches : <label>{this.props.douche}</label></p>
                    <p>Nombre de chambres : <label>{this.props.chambre}</label> </p>
                    <p>Nombre de cuisine : <label>{this.props.cuisine}</label></p>
                    <p>Prix :<label>{this.props.price} </label></p>
                    <p>Etat :<label>{this.props.statut} </label></p>
                    <div>
                    {this.props.favoritesLog.findIndex(item=> item.id === this.props.house.id)!=-1?
                    <img src = {'/image/like.png'} onClick = {this.handleFavoritelog} />:
                    <img src = {'/image/pasLike.png'} onClick = {this.handleFavoritelog} />}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };
export default connect(mapStateToProps)(Home)

//export default home



