var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm',
        '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'],
        datasets: [{
            lineTension: 0,
            data: [750, 1250, 1000, 1500, 2000, 1500,
                1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: 'rgba(95, 154, 224, 0.2)',
            pointBorderColor: 'rgba(95, 154, 224, 1)',
            borderColor: 'rgba(95, 154, 224, 1)',
            pointHitRadius: 4
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                }
            }]
        }
    }
});

var barCtx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            backgroundColor: 'rgba(95, 154, 224, 1)',
            data: [80, 100, 180, 120, 220, 200, 100]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {

                }
            }]
        }
    }
});

var doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [80, 100, 180],
            backgroundColor: ["#5f9ae0", "#6ea9c9","#a0dfe5"],
        }]
    },
        options: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 15
                }
            }
        }
});