import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('Hello world test check', () => {
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