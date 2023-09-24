

// Handle form submission and save the input value to storage
document.getElementById('saveButton').addEventListener('click', () => {
  // const inputValue = document.getElementById('inputField').value;
  const name = document.getElementById('name').value;
  const attendance = document.getElementById('attendance').value;
  const surveys = document.querySelectorAll('#survey input[name="survey"]:checked');

  var surveyValues = [];

  surveys.forEach(function(checkbox) {
    surveyValues.push(checkbox.value);
  });

  const comments = document.getElementById('comments').value;

  saveFormData(name, attendance, surveyValues, comments);
});

// Handle opening the specific link in a new tab
document.getElementById('openLinkButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'openLink'
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

  }
});

function saveFormData(name, attendance, surveys, comments) {
  const formData = {
    name,
    attendance,
    surveys,
    comments,
  };

  chrome.runtime.sendMessage({
    action: 'saveFormData',
    value: formData
  })
}
