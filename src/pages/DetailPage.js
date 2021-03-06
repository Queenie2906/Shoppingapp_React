import React from 'react';
import products from '../data/products.json';
import queryString from 'query-string'
import { connect } from 'react-redux';


class DetailPage extends React.Component {
    
  render() {
      const parsed = queryString.parse(window.location.search);
      console.log(parsed) 
      const index = parsed.index;
      const item = products[index];
      const image = item.image
    return(
     <div>
        <h1>Detail Page of {parsed.id}</h1>
        <br/>
        <h2>Index of Product is {parsed.index}</h2>
        <img src={image}/>
        
     </div>
    )
  }
}

DetailPage.defaultProps = {
  products: []
}

const mapStateToProps = state => ({
products: state.products
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(DetailPage)

