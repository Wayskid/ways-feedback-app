import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import FeedbackContext from "../context/FeedbackContext"
import { useContext } from "react"

export default function FeedbackCard({ el }) {

    const {
      feedbackListArray,
      setFeedbackListArray,
      handleEdit
    } = useContext(FeedbackContext)

    //Delete Feedback
    function handleDelete(id){
      setFeedbackListArray(feedbackListArray.filter(item=>{
        return el.id !== item.id
      }))
    }

    

  return (
    <div className='feedbackCard'>
        <div className="ratingScore">{el.rating}</div>
        <div className="editDelete">
          <FontAwesomeIcon 
            icon={faEdit} 
            onClick={()=>handleEdit(el)}
          />
          <FontAwesomeIcon 
            icon={faTrashCan} 
            onClick={()=>handleDelete(el.id)}
          />
        </div>
        <p className="ratingText">{el.text}</p>
    </div>
  )
}
