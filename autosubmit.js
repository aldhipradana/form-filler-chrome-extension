console.log('autosubmit.js loaded');
  
chrome.storage.sync.get(['formData'], (result) => {
    const formData = result.formData;
    console.log('formData: ' + JSON.stringify(formData));
    if (formData.toggle) {
        const savedEmail = document.querySelector('[name="emailAddress"]')
        const recordToggle = document.querySelector('[jsname="MPu53c"]');
        if (recordToggle) {
            recordToggle.click();
        }
        setTimeout(function() {
            clickNextButton();
    
            clickSubmitButton();
        }, 1000);

            
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


    }
});
