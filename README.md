# Password Generator

This is a micro application built to showcase my understanding of Javascript ES5. The main HTML/CSS backbone of this site was given to me prebuilt with the task of adding the functionality via Javascript. While I have not utilized Bootstrap in this site as I have done for past projects, I have continued to use semantic HTML. HTML was scarce in this project, but I aimed to use semantic tags where I could. This project is currently deployed and can be viewed at [https://thelbaumann.github.io/passwordGenerator/](https://thelbaumann.github.io/passwordGenerator/).

## About The Project

This micro application serves one purpose: to generate a password that meets criteria of your choosing. Upon entering the page, you see a few titles, an area which will display your password once generated, and a button to launch the generator. The button launches a pseudo pop-up window which is set in a fixed position on the page. This window allows you to choose the criteria of your password, requiring that it meet certain standards and also that no fields are left completely blank. Once you click "submit", it closes the window and takes you back to the first page where the box in the middle now contains your new secure password. The headings and buttons also update to let you know that you can regenerate a new password again without refreshing. This page also utilizes responsive media queries to make sure the experience is optimal/equivalent at all device screen sizes!

#### User Story
I was given the following user story to guide my development:

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

#### Acceptance Criteria
As a part of this project, I was also provided with the following standards that my project should meet:


```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Walkthrough

### Landing Page
![screenshot of landing page](https://github.com/thelbaumann/passwordGenerator/blob/main/images/screen_1.png)

This site begins with the landing page, which features the area in which your generated password will display, and a button to launch the form for the password generation. On the backend, an event listener for click is waiting to launch the form when the user clicks the generate button. Also, on page load a default value (the minimum of the range) has been assigned to the password length input field and will appear as a placeholder on the form when it is opened. While it still possible for a user to type a number outside of the range into the field (which would trigger an error alert upon submission), I thought it provided good user experience to have the minimum value autofilled as a placeholder upon opening the form.


#### Popup Window Form 
![screenshot of popup window form](https://github.com/thelbaumann/passwordGenerator/blob/main/images/screen_2.png) 

The generate button on the landing page launches this "popup window", which is really just a form that is fixed on the page to appear as a window. This page allows you to choose 1-4 character types to include in your password and a password length. While this does utilize form, input, and button html tags, it does not actually store any information to a database or to a device. Everything is wiped clean from the cache upon page load/reload. Instead, the javascript manually validates what is checked/not checked in the checkmark inputs, and manually pulls the value that is contained within the password length input when the submit button is pressed.

#### Form Validation
![screenshot of form validation error](https://github.com/thelbaumann/passwordGenerator/blob/main/images/screen_3.png) 

The form is validated via if statements in the javascript. It loops through one if statement making sure the length of checked character inputs is greater than 0, and also that the length of the password falls into the desired range. If both of these conditions are met, it runs a function to generate the password and another to hide the form. If this is not met, a second if statement validates that at least one checkmark input is checked, and sends an alert to the user that the password length is out of the correct range. Finally, if it continues to the final else statement, it sends an alert to the user that there needs to be at least one character type checked.

### Landing Page after Submission
![screenshot of landing page changes](https://github.com/thelbaumann/passwordGenerator/blob/main/images/screen_4.png) 

Upon successful submission of the form, it combines predetermined strings of the chosen character categories and then uses .split("") to create an array of the allowed characters. Then, it runs an equation with Math.floor and Math.random that utilizes a minimum of 0 and a maximum of one less than the length of our new array. A random number is chosen from this range, and that random number is used to pick the index of a character within our password character array. Whatever character resides at this index is added to the final password string. Then a "for loop" repeats this process for the amount of times required to create a password of the desired length, adding a new character to the end of our final password string each time.

Visually, the page changes slightly after you submit the form for the first time. Firstly, the heading above the password area changes to let you know that you can click the password to copy to the clipboard. I added a function that makes it so if you click once anywhere inside the password "container" it automatically copies the password to the clipboard. Also, obviously, another thing that changes is that your password is displayed in this area now. Finally, the button at the bottom changes to say "generate another password." If you reopen the form, it retains the values of the last time you submitted, but generates an entirely new password upon resubmission (even if you changed no criteria). This allows the user to keep regenerating passwords if they are unhappy with their result!


## Installing/Dependencies
No prerequisites or browser modifications are needed to run the page online here.
If you wish to clone the project,

git clone git@github.com:thelbaumann/passwordGenerator.git

## Credits
I consulted various sources to help me in this project.

First, I utilized a [StackOverflow thread](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript) to help me with the equation for picking a random integer that is within a certain range of numbers. 

Secondly, I used [this page from W3Schools](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp) to help me write the function for the "click to copy to keyboard" functionality for the generated password.

Thirdly, I used this [Mozilla Developer Page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) to help me figure out how to figure out setting min, max, and default values for my number input.

## Authors
Laura Baumann (https://www.linkedin.com/in/laura-baumann-070338102/)

## License
This project is licensed under [MIT](LICENSE) - 2020 Laura Baumann
