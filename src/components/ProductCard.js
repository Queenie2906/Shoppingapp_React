import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../App.css";

class ProductCard extends Component {
    state = {
        isDisplayed: false
    }

    showPrice = ()=> {
        this.setState({isDisplayed: true})
    }
    render() {
        const {product, index} = this.props;
        return (
            <div>
                 <Link to={`/detail?id=${product.id}$name=${product.name}&index=${product.index}`}>
                <div>
                    <img src={product.image} />
                    <h4>{product.name}</h4>
                    <h5 style={{display: this.state.isDisplayed? "block" : "none"}}>{product.price}</h5>
                </div>
                </Link>
                <button type="button" onClick={this.showPrice}>Show price</button>
            </div>
           
        )
    }
}

export default ProductCard