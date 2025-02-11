window.onload = function () {
  console.log("Page fully loaded");

  // DOM Values
  const queries = document.querySelectorAll(".querytype");
  const checkBox = document.getElementById("consent");
  const emailPlaceholder = document.getElementById("email");
  const errorMsg = document.querySelectorAll(".error-msg");
  //input values
  const inputValues = document.querySelectorAll("input");
  console.log(inputValues);
  // ALL MIGHTY BUTTON
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", displayIt);
  // MASTER FUNCTION
  function displayIt() {
    validValue(0); //FNAME
    validValue(1); //LNAME
    validEmail(2); //EMAIL
    displayRadioValue(3); //RADIO VAL
    validMessage(4); //MESSAGE
    displayCheckedBox(5); //CHECKBOX
    //   loopThrough();    // loop through values
    //DISPLAY SUCCESS BOX WHEN NO MORE ERRORS EXIST
    suceessBox();
  }

  // lOGS THE EXISITING INPUT SECTIONS
  // function loopThrough() {
  //   for (let i = 0; i < inputValues.length; i++) {
  //     console.log(i, inputValues[i]);
  //   }
  // }

  // NAMES, fname lname
  function validValue(a) {
    // ERROR RESET
    errorBorderOff(inputValues[a]);
    errorMsgOff(a);
    // VALIDATION
    if (inputValues[a].value.length <= 0) {
      // console.log("Invalid " + inputValues[a].name);
      errorBorderOn(inputValues[a]);
      errorMsgOn(a);
    }
  }

  //Email
  function validEmail(a) {
    // ERROR RESET
    errorBorderOff(inputValues[a]);
    errorMsgOff(a);
    // VALIDATION
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let mail = inputValues[a].value;
    if (!regex.test(mail)) {
      errorBorderOn(inputValues[a]);
      emailPlaceholder.placeholder = "email#exapmle.com";
      errorMsgOn(a);
      // console.log("Invalid " + inputValues[a].name);
    }
  }

  // Query Radio Values
  function displayRadioValue(a) {
    let query = document.getElementsByName("query");
    // ERROR RESET
    errorMsgOff(a);
    //VALIDATION
    for (i = 0; i < query.length; i++) {
      if (query[i].checked) {
        //   console.log("Query Type: " + query[i].value);
        return true;
      }
    }
    //   console.log("pick one");
    errorMsgOn(a);
  }

  // Consent Input
  function displayCheckedBox(a) {
    // ERROR RESET
    errorMsgOff(a);
    // VALIDATION
    if (!checkBox.checked) {
      // console.log("Not consented");
      errorMsgOn(a);
    }
  }

  // Message Input
  function validMessage(a) {
    let message = document.getElementById("msg");

    //ERROR RESETS
    errorBorderOff(message);
    errorMsgOff(a);
    // VALIDATION
    if (message.value.length <= 0) {
      return errorBorderOn(message), errorMsgOn(a);
    }
  }

  function suceessBox() {
    const errorPoints = document.querySelectorAll(".error-msg.on");
    console.log(errorPoints.length);
    if (errorPoints.length === 0) {
      const successMsg = document.getElementById("successMsg");
      successMsg.style.display = "block";
    }
  }

  // error message ON/OFF
  function errorMsgOn(a) {
    errorMsg[a].classList.add("on");
  }
  function errorMsgOff(a) {
    errorMsg[a].classList.remove("on");
  }
  // error border ON/OFF
  function errorBorderOn(b) {
    b.classList.add("error-border-red");
  }
  function errorBorderOff(b) {
    b.classList.remove("error-border-red");
  }
};
