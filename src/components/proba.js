/*import React, { Component } from "react";
import axios from "axios";


class BeerList extends Component {
  state = {
    data: [],
    onLoad: false
  };

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers/`).then(res => {
      const data = res.data;
      this.setState({ data: data });
    });
  }

  
 
  
 

  render() {
     return (
      <div className="main">
        <ul>
          {this.state.data.map(beer => (
            <BeerList key={beer.id} beer={this.state.data}><h2>{beer.name}</h2>
            <img style={{ height: 200 }} src={beer.image_url} alt="pics" />
            <section>{beer.description}</section>
          </BeerList>
          ))}
          ;
        </ul>
      </div>
    );
  }
}

export default BeerList;





    <ul>{this.state.data.map( beer => (<li key={beer.id} >{beer.name}</li>))
    }
    </ul>
    


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

<div className="columns">
          {this.state.data.map(beer => (
            <div className="column" key={beer.id} beer={this.beer}><div className="column">{beer.name}</div>
            <div className="column"><img style={{ height: 200 }} src={beer.image_url} alt="pics" /></div>
            <div className="column">{beer.description}</div>
            </div>
          ))}
          ;
          </div>



*/
