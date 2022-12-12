import { useContext, useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm() {
   const {
      ratingScore,
      handleRatingScore,
      handleFormInput,
      inputVal,
      handleSubmit,
   } = useContext(FeedbackContext);

   //Rating
   const [reaction, setReaction] = useState("");

   useEffect(() => {
      if (ratingScore < 5) {
         setReaction("Wow! that's low! Please tell us why");
      } else if (ratingScore === "6" || ratingScore === "5") {
         setReaction("Fair enough. Tell us how we can improve.");
      } else {
         setReaction("Glad you liked it! Tell us what you liked.");
      }
   }, [ratingScore]);

   return (
      <form>
         <h3>Kindly Rate Our Services</h3>
         <div className="inputRadioDiv">
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="1"
                  checked={ratingScore === "1"}
               />
               <div className="radioDiv">1</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="2"
                  checked={ratingScore === "2"}
               />
               <div className="radioDiv">2</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="3"
                  checked={ratingScore === "3"}
               />
               <div className="radioDiv">3</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="4"
                  checked={ratingScore === "4"}
               />
               <div className="radioDiv">4</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="5"
                  checked={ratingScore === "5"}
               />
               <div className="radioDiv">5</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="6"
                  checked={ratingScore === "6"}
               />
               <div className="radioDiv">6</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="7"
                  checked={ratingScore === "7"}
               />
               <div className="radioDiv">7</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="8"
                  checked={ratingScore === "8"}
               />
               <div className="radioDiv">8</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="9"
                  checked={ratingScore === "9"}
               />
               <div className="radioDiv">9</div>
            </div>
            <div className="radioContainer">
               <input
                  type="radio"
                  name="rating"
                  onChange={handleRatingScore}
                  value="10"
                  checked={ratingScore === "10"}
               />
               <div className="radioDiv">10</div>
            </div>
         </div>
         <h4 className="reaction">{reaction}</h4>
         <div className="inputTextDiv">
            <input
               type="text"
               placeholder="Add a comment"
               onChange={handleFormInput}
               value={inputVal}
            />
            <button
               onClick={handleSubmit}
               disabled={inputVal.trim() ? false : true}
            >
               Submit
            </button>
         </div>
      </form>
   );
}
