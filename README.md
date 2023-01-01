# Registration Form for the Yoga Classes
  This is a admission form for yoga classes made with using fundamentals of ReactJS. The basic task was to hadle and validate the form using ReactJS. 

# Contents
 * [Task](#task)
 * [Project Description](#project-description)
 * [Approach](#approach)
 * [ER Diagram](#er-diagram)
 * [Future Direction](#future-direction)

## Task
To build an admission form for the Yoga Classes which happen every month. I did this project as a part of assignment that was given to me by a company.

## Project Description
It is a registration form for Yoga classes which has been made in React . The form asks the user to fill in their details for example- name, age, email address etc. and does the basic validation incase user enters the invalid details.

For example - Only users between the age of 18-65 can enroll , so if user is not of the required age , it will give a message saying invalid age.

## Approach 
* Starting of with the project, first thing i did was to write the basic html code for the form .

* Next task for me was to handle the form, for that I made a function Form where with the use of hooks , I input all the important form data. To handle the function I   made handleChange() function.

* Next task was to validate the function and the challenging part. Here, firstly I made a validate function where I passed in all the errors that we want to show up ,   then I made handleSubmit() function where I set by isSubmit flag as true, so whenever I click my Submit button(Pay 500/-) , my Submit flag truns to true.

* Now, what we want is as all the fills satisfy the criteria, we want to submit the form, for that we make use of the useEffect() where we will add the dependencies of   formErrors and there I have made a check , if conditions satisfied , those values will be the correct form values with proper handling of the form and validation.

* Last thing we had to do was to make sure that the person can only change batch on the 1st of every month. For this I made another validate2() function and OnClick()   function and my passing the date criteria , I made sure that the person can only change batch on 1st of every month.

## ER-Diagram

<img src="ER diagram.jpg" alt="ER-diagram">


## Future Direction
* I was unable to make the change to the batch criteria fully functional. I could not figure out I could I make it enable only on 1st of every month. This is something I  will get done.
