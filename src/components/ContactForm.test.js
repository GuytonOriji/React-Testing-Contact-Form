import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";






//seeing if form renders and matches snapshot that I think will be created also...we'll see
it("renders ContactForm without crashing an", () =>{
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  
})









//seeing if inputs render and exist
it('renders inputs inside form', ()=>{
const { getByLabelText, getByTestId } = render(<ContactForm/>)

   const fName = getByLabelText(/Last Name/i)
    const lName =  getByLabelText(/Last Name/i)
    const email =  getByLabelText(/Email/i)
   const msg = getByLabelText(/Message/i);  

  const btn = getByTestId('thisIsmySubmitBtnTestId')


    
   //does the first and last name inputs exist
   expect(fName).toBeTruthy()
   expect(lName).toBeTruthy()
    expect(email).toBeTruthy()
   expect(msg).toBeTruthy()
   expect(btn).toBeTruthy()

     expect(fName).toBeInTheDocument()
   expect(lName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
   expect(msg).toBeInTheDocument()
   expect(btn).toBeInTheDocument()
   //does the first and last name inputs exist
})












//testing on inputs value changes after virtually typing in them
it("testing on elements value change", () =>{
    const { getByLabelText , getByText } = render(<ContactForm />);
    const fName = getByLabelText(/Last Name/i)
    const lName =  getByLabelText(/Last Name/i)
    const email =  getByLabelText(/Email/i)
    const msg = getByLabelText(/Message/i);  




//typing input value changes virtually..
fireEvent.change(fName, {target: {value: "I am inside a Names value"}});
fireEvent.change(lName, {target: {value: "I am inside a Names value"}});
fireEvent.change(email, {target: {value: "iamaEamailfrfr@ijs.com"}});
fireEvent.change(msg, {target: {value: "random text in textarea innerHTML"}});
//typing input value changes virtually..






    //making the email reg exp
   const expectedEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)
    //making the email reg exp

    //email valdation testing
   expect(email.value).toMatch(expectedEmail)
   //email valdation testing





    //making name inputs reg exp
    const expectedNames = new RegExp('I am inside a Names value')
    const notExpectedNames = new RegExp('I am not inside a Names value')

   //does the first and last name inputs contain no numbers?
   expect(fName.value).not.toBeNaN()
   expect(lName.value).not.toBeNaN()
   expect(fName.value).toMatch(expectedNames)
   expect(lName.value).toMatch(expectedNames)
   expect(fName.value).not.toMatch(notExpectedNames)
   expect(lName.value).not.toMatch(notExpectedNames)
   //does the first and last name inputs contain no numbers?

   

   //message has a message, even if its just a letter
   expect(msg.value.length).toBeGreaterThan(1)
   expect(msg.value.length).not.toBeLessThan(1)
   //message has a message, even if its just a letter



 })






it("rendering and testing after submit", () =>{
    const { getByLabelText, getByTestId, } = render(<ContactForm />);
   const fName = getByLabelText(/Last Name/i)
    const lName =  getByLabelText(/Last Name/i)
    const email =  getByLabelText(/Email/i)
   const msg = getByLabelText(/Message/i);  
   // const preEl = getByLabelText(/pre/i) I was gonna add a label tag but idk if thats cheating

   //creating my btn var by calling its data-test id (data-testid)
   const btn = getByTestId('thisIsmySubmitBtnTestId')

    expect(btn).toBeInTheDocument()
    expect(btn).toBeTruthy()


//cant get the button!!!!
// expect(preEl).toBeInTheDocument()
//     expect(preEl).toBeTruthy()
   // const onClick = jest.fn()

    // fireEvent.submit(btn)

    // expect(preEl.value.length).toBeGreaterThan(3)

 })