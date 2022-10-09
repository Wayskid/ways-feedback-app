import FeedbackForm from "./componenets/FeedbackForm"
import FeedbackList from "./componenets/FeedbackList"
import { FeedbackProvider } from "./context/FeedbackContext"

 export default function App() {
  return (
    <FeedbackProvider>
      <div className="containerBody">
        <h1>Ways Services Reviews</h1>
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  )
}

