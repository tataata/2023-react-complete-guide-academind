import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // Two approaches to see every keystroke login (input value) on submit

  // 1. Ref might be better if I am interested in the value once 
  const nameInputRef = useRef();

  // 2. State might be suitable for instant validation 
  //    + if I want to reset the input value after the submit
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    // Ref for tracking every keystroke
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue + ", hello!");

    // State for tracking every keystroke
    event.preventDefault();
    console.log(enteredName + ", hello!");

    // Reset the value in the input on submit
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
