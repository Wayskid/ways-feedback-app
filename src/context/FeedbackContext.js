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
            text: "Hey, come here boy"
        },
    ]);

    //Submit Feedback
    function handleSubmit(e) {
        e.preventDefault()

        const newFeedBack = {
            id: uuid(),
            rating: ratingScore,
            text: inputVal
        }

        if (itemEditInfo.editStatus === true) {
            setFeedbackListArray(feedbackListArray.map(el=>{
                return el.id === itemEditInfo.itemEdit.id ? {
                    ...newFeedBack
                } : el
            }))

            setItemEditInfo({
                itemEdit: {},
                editStatus: false
            })
        } else {
            setFeedbackListArray(prevArray=>{
                return [
                    ...prevArray,
                    newFeedBack
                ]
            })
        }

        
        setRatingScore("10")
        setInputVal("")
    }

    //Edit Feedback
    const [ itemEditInfo, setItemEditInfo ] = useState({
        itemEdit: {},
        editStatus: false
    })

    function handleEdit(itemToEdit){
        setInputVal(itemToEdit.text)
        setRatingScore(`${itemToEdit.rating}`)

        setItemEditInfo({
            itemEdit: {...itemToEdit},
            editStatus: true
        })

        document.querySelector(".inputTextDiv>input").focus() //Make the input field focus...Don't want to use uesRef for now
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