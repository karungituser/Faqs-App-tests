// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderQuestion = () => {
    const {isActive} = this.state
    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button
        type="button"
        className="plus-minus-btn"
        onClick={this.onToggleActive}
      >
        <img src={image} alt={altText} className="icon" />
      </button>
    )
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="list-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderQuestion()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
