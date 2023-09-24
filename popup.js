

// Handle form submission and save the input value to storage
document.getElementById('saveButton').addEventListener('click', () => {
  // const inputValue = document.getElementById('inputField').value;
  const name = document.getElementById('name').value;
  const attendance = document.getElementById('attendance').value;
  const surveys = document.querySelectorAll('#survey input[name="survey"]:checked');
  const toggle = document.querySelector('input[name="toggle"]').checked || false;
  var surveyValues = [];

  surveys.forEach(function(checkbox) {
    surveyValues.push(checkbox.value);
  });

  const comments = document.getElementById('comments').value;

  saveFormData(name, attendance, surveyValues, comments, toggle);
});

// Handle opening the specific link in a new tab
document.getElementById('openLinkButton').addEventListener('click', () => {
  let toggle = document.querySelector('input[name="toggle"]').checked || false;
  chrome.runtime.sendMessage({
    action: 'openLink',
    value: toggle
  });
});

// Load the saved value into the input field when the popup is opened
chrome.storage.sync.get(['formData'], (result) => {
  const formData = result.formData;
  if (formData) {
    document.getElementById('name').value = formData.name;
    document.getElementById('attendance').value = formData.attendance;
    formData.surveys.forEach((data) => {
      document.querySelector('#survey input[value="' + data + '"]').checked = true;
    });
    document.getElementById('comments').value = formData.comments;
    document.querySelector('input[name="toggle"]').checked = formData.toggle;
  }
});

function saveFormData(name, attendance, surveys, comments, toggle) {
  const formData = {
    name,
    attendance,
    surveys,
    comments,
    toggle
  };

  chrome.runtime.sendMessage({
    action: 'saveFormData',
    value: formData
  })
}
