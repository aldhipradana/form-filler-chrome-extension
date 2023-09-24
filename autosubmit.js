console.log('autosubmit.js loaded');
  
chrome.storage.sync.get(['formData'], (result) => {
    const formData = result.formData;
    if (formData.toggle) {
            
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
    }
});
