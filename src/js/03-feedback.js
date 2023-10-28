
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const localStorageKey = 'feedback-form-state';

  const saveStateToLocalStorage = throttle(function () {
    const feedbackState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(feedbackState));
  }, 500);

  const savedState = JSON.parse(localStorage.getItem(localStorageKey));

  if (savedState) {
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
  }

  form.addEventListener('input', saveStateToLocalStorage);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log(formData);

    localStorage.removeItem(localStorageKey);

    emailInput.value = '';
    messageInput.value = '';
  });
});
