import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // Two approaches to see every keystroke login (input value) on submit

  // 1. Ref might be better if I am interested in the value once
  const nameInputRef = useRef();

  // 2. State might be suitable for instant validation
  //    + if I want to reset the input value after the submit
  const [enteredName, setEnteredName] = useState("");

  // useState for providing feedback on validation
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // add touched for providing feedback only affter field was edited
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // Validation conditions
    // Check if the input is empty or not
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);

    // Validation conditions
    // Check if the input is empty or not
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    // Validation conditions
    // Check if the input is empty or not
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      // cancel the function execution as there is 
      // nothing to operate with: the input value is empty
      return;
    }
    setEnteredNameIsValid(true);

    // State for tracking every keystroke
    console.log(enteredName + ", hello! <-- useState");

    // Ref for tracking every keystroke
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue + ", hello! <-- useRef");

    // Reset the value in the input on submit
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // Change the css classes if input is valid or not
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name field can't be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
