import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class Products extends Component {
  state = {
    count: 0,

  }

  onIncrease = () => {
    this.setState({ count: this.state.count + 1 })

  }
  onDecrease = () => {
   
      this.setState({ count: this.state.count - 1 })
   

  }

  render() {
    return (
      <>
        <Card className="h-100 " >
          <Card.Img variant="top" src={this.props.image}  className='w-100 h-50'/>
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title style={{ width: "12em", overflow:"hidden" }}> {this.props.title}</Card.Title>
            <Card.Text>
              {this.props.desc}
            </Card.Text>
            <p><b>price: {this.props.price}</b></p>
            <div className="d-flex justify-content-between">
              <Button 
              variant={`btn btn-success ${this.state.count?"": "w-100"}`} onClick={this.onIncrease} > add</Button>
              {
                this.state.count?<>
                   <span>{this.state.count}</span>
                   <Button variant="btn btn-danger" onClick={this.onDecrease}> remove</Button>
                </> :""
              }
             
            </div>

          </Card.Body>
        </Card>
      </>
    )
  }
}
