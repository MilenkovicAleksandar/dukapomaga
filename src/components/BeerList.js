import React, { Component } from "react";
import axios from "axios";




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
      <ul>
          {this.state.data.map(beer => (
            <li key={beer.id} beer={this.beer}><h2>{beer.name}</h2>
            <img style={{ height: 200 }} src={beer.image_url} alt="pics" />
            <section>{beer.description}</section>
            </li>
          ))}
          ;
        </ul>
      
    )
  }
}

export default BeerList;



 