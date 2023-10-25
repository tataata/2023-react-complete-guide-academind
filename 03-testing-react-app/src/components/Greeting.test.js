import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Test Suite Greeting component', () => {
  test('renders Hello world text', () => {
    // three things here
    // A -- arrange, render the component that wil be testd
    // A -- act, run the logic that should be tested 
    // A -- assert, compare execution results with expected result
  
    // Arrange
    render(<Greeting />)
  
    // Act
    // ... nothing
  
    // Assert
    const helloElement = screen.getByText('Hello World', {exact: false});
    expect(helloElement).toBeInTheDocument;
  })

  test('renders initial greeting text aka if the button was NOT clicked', () => {
    render(<Greeting ></Greeting>)
    const initialGreetingText = screen.getByText('It is good to see you');
    expect(initialGreetingText).toBeInTheDocument;
  })

  test('renders change if the button WAS CLICKED', () => {
    // Arrange
    render(<Greeting ></Greeting>)
    // Act
    const buttonElement = screen.getByRole('button') // ok to do it as there is only one button
    userEvent.click(buttonElement)
    // Assert
    const changedText = screen.getByText('Changed Text')
    expect(changedText).toBeInTheDocument();
  })

  test('does not render good to see you if the button was clicked', () => {
    // Arrange
    render(<Greeting ></Greeting>)
    // Act
    const buttonElement = screen.getByRole('button') // ok to do it as there is only one button
    userEvent.click(buttonElement)
    // Assert
    const changedText = screen.queryByText(' good to se', {exact: false})
    expect(changedText).toBeNull();
  })
});


