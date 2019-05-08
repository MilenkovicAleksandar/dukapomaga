import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'



class BeerList extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers/`).then(res => {
      const beers = res.data
      this.setState({ data: beers })
      console.log(beers)
      console.log(this.state)
    })
    .catch((error)=>{
    console.log(error)}
    )
  }

  render() {
    return ( 

      
<ul className="list-unstyled">
{this.state.data.map(beer => (
  <li key={beer.id} beer={this.beer} className="media">
    <img src={beer.image_url} className="mr-3" alt="..."/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">{beer.name}</h5>
      {beer.description}
      </div>
  </li>
      ))};
            </ul>
    )
  }
}

export default BeerList;



 