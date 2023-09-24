
// Handle opening the specific link in a new tab
document.getElementById('openLinkButton').addEventListener('click', () => {
  let toggle = document.querySelector('input[name="toggle"]').checked || false;
  saveFormData(toggle);
  chrome.runtime.sendMessage({
    action: 'openLink',
    value: toggle
  });
});

// Load the saved value into the input field when the popup is opened
chrome.storage.sync.get(['formData'], (result) => {
  const formData = result.formData;
  if (formData) {
    document.querySelector('input[name="toggle"]').checked = formData.toggle;
  }
});

function saveFormData(toggle) {
  const formData = {
    toggle
  };

  chrome.runtime.sendMessage({
    action: 'saveFormData',
    value: formData
  })
}
