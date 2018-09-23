import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends Component {

  constructor(props){

    super(props)

    this.state = {
    ...DEFAULT_STATE
  }
}
  handleSubmit = (event) =>  {
    event.preventDefault()

    document.getElementById("order-form").reset()
    this.props.addOrder(this.state)
    this.setState({
      ...DEFAULT_STATE
    })
  }

  handleChange = (event) => {
    const itemType = event.target.name
    const item = event.target.value

    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      })
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })
  }

  render() {

    console.log(this.state)

    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <ProteinForm handleChange={this.handleChange} />

          <FillingForm handleChange={this.handleChange} orders={this.props.orders} />

          <ToppingForm handleChange={this.handleChange} />

          <SideForm handleChange={this.handleChange} />

          <br />

          <button  onClick={this.handleSubmit} className="ui blue big button"  type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
