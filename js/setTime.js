const timeElement = document.querySelector('#time');

function getTime() {
  const options = {
    shortOptions: {
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    },
    longOptions: {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  };

  return new Date().toLocaleDateString(undefined, options.shortOptions);
}

export default function setTime() {
  timeElement.textContent = getTime();

  setInterval(() => {
    timeElement.textContent = getTime();
  }, 1000);
}