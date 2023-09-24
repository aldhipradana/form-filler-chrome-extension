console.log('autosubmit.js loaded');

// Create a MutationObserver instance
// const observer = new MutationObserver((mutationsList, observer) => {
//     // Handle changes here
//     mutationsList.forEach((mutation) => {
//       if (mutation.type === 'childList') {
//         console.log('A child node has been added or removed.');
//       } else if (mutation.type === 'attributes') {
//         console.log('Attributes of an element have changed.');
//       }
//     });
//   });
  
//   // Start observing the document or a specific element
//   observer.observe(document, { childList: true, attributes: true, subtree: true });
  


function clickNextButton() {
    const nextButton = document.querySelector('[jsname="OCpkoe"]');
    if (nextButton) {
      nextButton.click();
    }
  }
  
// Function to click the "Submit" button
function clickSubmitButton() {
    const submitButton = document.querySelector('[jsname="M2UYVd"]');
    if (submitButton) {
        submitButton.click();
    }
}

clickNextButton();

clickSubmitButton();