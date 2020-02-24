import React from 'react';
import {Link} from 'react-router-dom'
import products from '../data/products.json';

class ListPage extends React.Component {
  render() {
    return(
     <div>
         {this.props.products.map((item,index)=> 
             <Link to={`/detail?id=${item.id}&name=${item.name}&index=${index}`}>
                <div>
                    <img src={item.image}/>
                    <h4>{item.name}</h4>
                    <h5>{item.price}</h5>
                </div>
            </Link>
            )}
     </div>
    )
  }
}

ListPage.defaultProps = {
    products: products
}
export default ListPage ;
