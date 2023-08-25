import React, { Component } from 'react'
import Products from './Products'

export default class Section extends Component {
    state={
            products: [],
    };
    
    componentDidMount(){
        console.log("mounted");
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((json)=> this.setState({products:json}));
    }
    componentDidUpdate(){
        console.log("update");
    }
    render() {
        console.log("render");
        return (
            <>
                <div className="container  py-5">
                    <div className="row g-3">
                       {this.state.products.map((products) =>(
                            <div key= {products.id} className="col-md-6 col-lg-4">
                                <Products
                                    
                                    title=  {products.title} 
                                    desc={products.desc}
                                    price={products.price}
                                    image={products.image}
                                 />
                             </div>
                        ))
                       }
                        
                    </div>
                </div>
            </>
        )
    }
}
