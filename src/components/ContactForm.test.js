import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

it("renders ContactForm without crashing", () =>{
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/First Name/i);
    getByLabelText(/Last Name/i);
    getByLabelText(/Email/i);
    getByLabelText(/Message/i);  

//TESTING TO SEE IF THEY EXIST AND RENDERED
})


 it('strinf matching to values using RegExp', () => {
  const { getByLabelText } = render(<ContactForm />);

    const fName = getByLabelText(/Last Name/i)
    const lName =  getByLabelText(/Last Name/i)
    const email =  getByLabelText(/Email/i)

    const expected = new RegExp(/^[a-zA-Z\s]+$/i)
    const notExpected = new RegExp(Number('0123456789'))

       expect(fName.value).toEqual(expect.not.stringMatching(notExpected));

       //need time to study .toMatch() for email
  });


it('on change text testing for inputs', () =>{
    const { getByLabelText, getByText } = render(<ContactForm/>);

    const fName = getByLabelText(/first Name/i);

    
    fireEvent.change(fName, {target: {value: "changes value to this"}});

    
    expect(fName.value).toBe("changes value to this");

})

// it('mentions grapefruit', () => {
//     expect(getByLabelText(/First Name/i)).toMatch(/^[a-zA-Z\s]+$/);
//     expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
//   });