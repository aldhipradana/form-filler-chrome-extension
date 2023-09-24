// background.js
chrome.runtime.onStartup.addListener(() => {
    console.log('chrome.runtime.onStartup.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    switch (message.action) {
        case 'openLink':
            // Get the current date
            const currentDate = new Date();

            // Extract the year, month, and day components
            const year = currentDate.getFullYear();
            // Months are zero-indexed, so add 1 to get the correct month
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Zero-padding if necessary
            const day = currentDate.getDate().toString().padStart(2, '0'); // Zero-padding if necessary

            console.log("Year:", year);
            console.log("Month:", month);
            console.log("Day:", day);

            // Create the formatted date string in YYYY-MM-DD format
            const formattedDate = `${year}-${month}-${day}`;
            console.log("Formatted Date:", formattedDate);

            
            chrome.storage.sync.get(['formData'], (result) => {
                const formData = result.formData;
                if (formData) {

                    let urls = `https://docs.google.com/forms/d/e/1FAIpQLSfYPQhxINo1zLJ9ZXoKfyvOy2rFvvtLsAZyYt25k9gP2N7DTg/viewform?usp=pp_url&entry.2116052852=Gede+Aldhi+Pradana&entry.532096719=Software+Developer&entry.1369552271=Robotmanager&entry.813213160_hour=08&entry.813213160_minute=00&entry.1923238489_hour=17&entry.1923238489_minute=00&entry.1060472253_day=${day}&entry.1060472253_month=${month}&entry.1060472253_year=${year}`

                    
                    console.log('urls: ' + JSON.stringify(urls));

                    chrome.tabs.create({ url: urls });

                }
            });
            break;
        case 'saveFormData':
            const formData = message.value;
            console.log('formData message.value: ' + JSON.stringify(formData));
            chrome.storage.sync.set({
                formData: formData
            }, () => {
                console.log('formData saved: ' + JSON.stringify(formData));
            });
            break;
        case 'log':
            console.log('message.value: ' + message.value);
            break;
        default:
            console.log('Unknown action: ' + message.action);
            break;
    }
});