import React from 'react';
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {filter} from '../action'
class ListPage extends React.Component {
  render() {
    return(
      <div>
        <button type="button" onClick={()=>this.props.filter('apple')}>Apple</button>
        <button type="button" onClick={()=>this.props.filter('samsung')}>Samsung</button>
        <p>Selected Category: {this.props.category}</p>
        {this.props.products.map((item,index)=> (
          <ProductCard product={item} index={index} />     
        ))}
      </div>
    );
  }
}

ListPage.defaultProps = {
    products: []
}

const mapStateToProps = state => ({
  products: state.products,
  category: state.category
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators ({filter}, dispatch)

})
export default connect(mapStateToProps,mapDispatchToProps)(ListPage)
