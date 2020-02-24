import React from 'react';
import products from '../data/products.json';

class HomePage extends React.Component {
  render() {
    return(
        <div>
             <h1>Home Page</h1>
            {JSON.stringify(products)}
        </div>
     
    )
  }
}

export default HomePage ;
