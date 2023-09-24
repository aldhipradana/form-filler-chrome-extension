// background.js
chrome.runtime.onStartup.addListener(() => {
    console.log('chrome.runtime.onStartup.');

});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('message chrome.runtime.onMessage.addListener: ' + JSON.stringify(message));
    console.log('sender chrome.runtime.onMessage.addListener: ' + JSON.stringify(sender));
    console.log('sendResponse chrome.runtime.onMessage.addListener: ' + JSON.stringify(sendResponse));

    switch (message.action) {
        case 'openLink':
            chrome.storage.sync.get(['formData'], (result) => {
                const formData = result.formData;
                if (formData) {
                    let name = formData.name;
                    let attendance = formData.attendance;
                    let comments = formData.comments;

                    let urls = `https://docs.google.com/forms/d/e/1FAIpQLSe1A52nkqnQ_0569Rgx439fTVcnFoFF6_Uw4sbAwwUZ_JAyaQ/viewform?usp=pp_url&entry.1498135098=${name}&entry.877086558=${attendance}&entry.2606285=${comments}`;

                    if (formData.surveys.length > 0) {
                        formData.surveys.forEach((data) => {
                            urls = urls + `&entry.1424661284=${data}`;
                        });
                    }
                    
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