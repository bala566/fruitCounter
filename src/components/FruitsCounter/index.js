// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMangoEat = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onBananaEat = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="count">{count1}</span> mangoes
            <span className="count">{count2}</span> bananas
          </h1>
          <div className="img-container">
            <div className="image-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango-image"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.onMangoEat}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="banana-image"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onBananaEat}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
