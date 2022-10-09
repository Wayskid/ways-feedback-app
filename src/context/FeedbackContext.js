import { createContext, useState } from "react";
import uuid from "react-uuid";



const FeedbackContext = createContext()


export function FeedbackProvider({ children }) {

    //Rating Score
    const [ ratingScore, setRatingScore ] = useState("10")

    function handleRatingScore(e) {
        setRatingScore(e.target.value);
    }

    //Input Feedback
    const [ inputVal, setInputVal ] = useState("");
    function handleFormInput(e) {
        setInputVal(e.target.value);
    }

    //FeedbackList Array
    const [ feedbackListArray, setFeedbackListArray ] = useState([
        {
            id: uuid(),
            rating: 8,
            text: "Hello there woman"
        },
        {
            id: uuid(),
            rating: 3,
            text: "Hi you man"
        },
        {
            id: uuid(),
            rating: 9,
            text: "Howdy hey girl"
        },
        {
            id: uuid(),
            rating: 5,
            text: "Hello there woman"
        },
    ]);

    //Submit Feedback
    function handleSubmit(e) {
        e.preventDefault()
        setFeedbackListArray(prevArray=>{
            return [
                ...prevArray,
                {
                    id: uuid(),
                    rating: ratingScore,
                    text: inputVal
                }
            ]
        })
        setRatingScore("10")
        setInputVal("")
    }

    //Edit Feedback

    function handleEdit(item){
        setInputVal(item.text)
        setRatingScore(`${item.rating}`)
    }

    
    return <FeedbackContext.Provider
                value={{
                    ratingScore,
                    setRatingScore,
                    handleRatingScore,
                    inputVal,
                    handleFormInput,
                    handleSubmit,
                    feedbackListArray,
                    setFeedbackListArray,
                    handleEdit,
                }}
            >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;