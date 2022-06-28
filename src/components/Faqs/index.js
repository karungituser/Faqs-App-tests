// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-container">
      <div className="faqs-card">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachText => (
            <FaqItem key={eachText.id} faqsDetails={eachText} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
