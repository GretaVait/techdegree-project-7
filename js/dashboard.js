const ulChartBtn = document.querySelector('.chart-btn');
const liChartBtn = ulChartBtn.children;
const closeAlertMsg = document.querySelector('.alert-close');
const alertMsg = document.querySelector('.alert-container');
const notificationDiv = document.querySelector('.notification-div');
const bellIcn = document.querySelector('.bell-icn');
const bellMarker = document.querySelector('.bell-marker');
var createNotifications = [];
const notifications = [
  'Your first message',
  'Your second message'
];
const userName = document.querySelector('.user-name');
const userMessage = document.querySelector('.user-msg');
const errorMsg = document.querySelector('.error-msg');

function defaultButton() {
    liChartBtn[0].classList.add('chart-btn-color');
}
  
defaultButton();
  
let chartUpdates = [

function hourlyChart() {
    lineChart.data.datasets[0].data.splice(
    0, 12,
    750, 1250, 1000, 1500, 2000, 1500,
    1750, 1250, 1750, 2250, 1750, 2250
    );
    lineChart.data.labels.splice(
    0, 11,
    '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm',
    '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'
    );
    lineChart.update();
},

function dailyChart() {
    lineChart.data.datasets[0].data.splice(
    0, 12,
    550, 2300, 850, 1400, 700, 1150,
    1050, 1850, 1000, 2250, 1250, 1500
    );
    lineChart.data.labels.splice(
    0, 11,
    '7/7', '7/8', '7/9', '7/10', '7/11', '7/12',
    '7/13', '7/14', '7/15', '7/16', '7/17'
    );
    lineChart.update();
},

function weeklyChart() {
    lineChart.data.datasets[0].data.splice(
    0, 12,
    950, 1250, 1000, 1250, 700, 1200,
    800, 1250, 1200, 2100, 750, 1000
    );
    lineChart.data.labels.splice(
    0, 11,
    'May 8', 'May 15', 'May 22', 'May 29', 'June 5', 'June 12',
    'June 19', 'June 26', 'July 3', 'July 10', 'July 17'
    );
    lineChart.update();
},

function monthlyChart() {
    lineChart.data.datasets[0].data.splice(
    0, 12,
    1050, 1950, 800, 1200, 2300, 1700,
    1750, 1350, 1150, 1250, 2150, 2000
    );
    lineChart.data.labels.splice(
    0, 11,
    'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb',
    'Mar', 'Apr', 'May', 'June', 'July'
    );
    lineChart.update();
}
]

ulChartBtn.addEventListener('click', function(event) {
    for (let i = 0; i < liChartBtn.length; i++) {
      let chartBtn = liChartBtn[i];
      let chartClass = chartBtn.classList;
  
      if (event.target === chartBtn) {
        chartClass.add('chart-btn-color');
        chartUpdates[i]();
      } else {
        chartClass.remove('chart-btn-color');
      }
    }
});

// Alert message close

closeAlertMsg.addEventListener('click', function() {
  alertMsg.style.display = 'none';
});

//Show notifications

bellIcn.addEventListener('click', function(){
  if(notificationDiv.style.display === 'flex') {
    notificationDiv.style.display = 'none';
  } else {
    notificationDiv.style.display = 'flex';
    bellMarker.style.display = 'none';
  }
});

//Create notification messages

function printNotifications(createNotifications) {
  for (let i = 0; i < notifications.length; i++) {
    notificationDiv.innerHTML += createNotifications[i];
  }
}

for (let i = 0; i < notifications.length; i++) {
  createNotifications[i] = '<span class="notifications">' + notifications[i] + '<i class="fa fa-close close-notification"></i></span>';
}

printNotifications(createNotifications);

//Hide notification messages

const closeNotification = document.querySelectorAll('.close-notification');

const hideNotification = document.querySelector('.notifications');

for (let i = 0; i < closeNotification.length; i++) {
closeNotification[i].addEventListener('click', function(){
  hideNotification.style.display = 'none';
});
}

//Show error message if field is empty

function errorMessage() {
  var text;
  if (userName.value !== '' && userMessage.value !== '') {
    text = "Your message successfully sent!";
  } else {
    text = "Please fill out fields that are empty";
  }
  errorMsg.classList.add('show');
  errorMsg.innerHTML = text;
}