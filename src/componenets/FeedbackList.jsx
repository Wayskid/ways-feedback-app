import { useContext } from 'react'
import FeedbackCard from './FeedbackCard'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackList() {

    const {
      feedbackListArray,
    } = useContext(FeedbackContext)

    
    const feedbackListMapped = feedbackListArray.map(el=>{
            return <FeedbackCard 
                        key= {el.id}
                        el= {el} 
                    />
        })



    //Feedback Stats  
    const ratingsAverage = feedbackListArray.reduce((acc, cur)=>{
      return acc + +cur.rating
    }, 0)/feedbackListArray.length

  return (
    <div className="listSec">
      <div className='stats'>
        <p>{feedbackListArray.length} reviews</p>
        <p>{isNaN(ratingsAverage) ? 0 : ratingsAverage.toFixed(1)} rating</p>
      </div>
      <ul className="fbList">
        {feedbackListMapped}
      </ul>
    </div>
  )
}
