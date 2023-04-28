// Email Validation
function validate() {
    let mail = document.getElementById(`email`).value
        name = document.getElementById(`name`).value
        message = document.getElementById(`message`).value,
        regx = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
        toastValid = document.getElementById(`toastValid`),
        toastInvalid = document.getElementById(`toastInvalid`),
        toastTime = 2500;
    
    event.preventDefault();
    
    if (regx.test(mail) && name !== null && message !== null) {
      toastValid.className = `show`;
      setTimeout(() => {
        toastValid.className = toastValid.className.replace("show", "");
      }, toastTime);
    } else {
      toastInvalid.className = `show`;
      setTimeout(() => {
        toastInvalid.className = toastInvalid.className.replace("show", "");
      }, toastTime);
    }
  
    if (name == null || message == null) {
      alert(`not filled`);
    }
  }