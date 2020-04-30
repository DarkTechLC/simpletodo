const time = document.querySelector('#time');

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

export default function setTime() {
  let currentTime;

  setInterval(() => {
    currentTime = new Date().toLocaleDateString(undefined, options.shortOptions);
    time.innerHTML = `${currentTime}`;
  }, 1000);
}