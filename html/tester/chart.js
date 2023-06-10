const labels = [
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90
];

const peopleData = [
    {
        x: 20,
        y: 425337,
    },
    {
        x: 21,
        y: 453690,
    },
    {
        x: 22,
        y: 483028,
    },
    {
        x: 23,
        y: 506734,
    },
    {
        x: 24,
        y: 528799,
    },
    {
        x: 25,
        y: 551654,
    },
    {
        x: 26,
        y: 568372,
    },
    {
        x: 27,
        y: 584524,
    },
    {
        x: 28,
        y: 596203,
    },
    {
        x: 29,
        y: 606110,
    },
    {
        x: 30,
        y: 609576,
    },
    {
        x: 31,
        y: 607406,
    },
    {
        x: 32,
        y: 598657,
    },
    {
        x: 33,
        y: 591206,
    },
    {
        x: 34,
        y: 574089,
    },
    {
        x: 35,
        y: 561563,
    },
    {
        x: 36,
        y: 545756,
    },
    {
        x: 37,
        y: 525808,
    },
    {
        x: 38,
        y: 508569,
    },
    {
        x: 39,
        y: 489892,
    },
    {
        x: 40,
        y: 476562,
    },
    {
        x: 41,
        y: 455769,
    },
    {
        x: 42,
        y: 434016,
    },
    {
        x: 43,
        y: 414277,
    },
    {
        x: 44,
        y: 393823,
    },
    {
        x: 45,
        y: 377301,
    },
    {
        x: 46,
        y: 360289,
    },
    {
        x: 47,
        y: 341037,
    },
    {
        x: 48,
        y: 323967,
    },
    {
        x: 49,
        y: 308984,
    },
    {
        x: 50,
        y: 297379,
    },
    {
        x: 51,
        y: 282804,
    },
    {
        x: 52,
        y: 267229,
    },
    {
        x: 53,
        y: 250702,
    },
    {
        x: 54,
        y: 240689,
    },
    {
        x: 55,
        y: 229164,
    },
    {
        x: 56,
        y: 216472,
    },
    {
        x: 57,
        y: 205235,
    },
    {
        x: 58,
        y: 194091,
    },
    {
        x: 59,
        y: 185095,
    },
    {
        x: 60,
        y: 174810,
    },
    {
        x: 61,
        y: 167330,
    },
    {
        x: 62,
        y: 159786,
    },
    {
        x: 63,
        y: 146607,
    },
    {
        x: 64,
        y: 139391,
    },
    {
        x: 65,
        y: 129690,
    },
    {
        x: 66,
        y: 121109,
    },
    {
        x: 67,
        y: 114327,
    },
    {
        x: 68,
        y: 106870,
    },
    {
        x: 69,
        y: 101609,
    },
    {
        x: 70,
        y: 93967,
    },
    {
        x: 71,
        y: 88277,
    },
    {
        x: 72,
        y: 81995,
    },
    {
        x: 73,
        y: 76439,
    },
    {
        x: 74,
        y: 70767,
    },
    {
        x: 75,
        y: 66265,
    },
    {
        x: 76,
        y: 61673,
    },
    {
        x: 77,
        y: 56661,
    },
    {
        x: 78,
        y: 53720,
    },
    {
        x: 79,
        y: 48106,
    },
    {
        x: 80,
        y: 45017,
    },
    {
        x: 81,
        y: 42264,
    },
    {
        x: 82,
        y: 38294,
    },
    {
        x: 83,
        y: 35871,
    },
    {
        x: 84,
        y: 32935,
    },
    {
        x: 85,
        y: 30583,
    },
    {
        x: 86,
        y: 28028,
    },
    {
        x: 87,
        y: 25132,
    },
    {
        x: 88,
        y: 25374,
    },
    {
        x: 89,
        y: 21815,
    },
    {
        x: 90,
        y: 20381,
    },
]

const data = {
    labels: labels,
    datasets: [{
        label: 'dataset',
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(255, 255, 255)',
        data: peopleData
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip :{
                callbacks: {
                    title : (text) => text[0].parsed.y + " people write",
                    label : (text) => text.parsed.x + " words per minute ",
                },
            }
        },
        layout: {
            padding: 40
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 18,
                    },
                    color: 'white',
                    autoSkip: true,
                    callback: function(val, index) {
                        // Hide the label of every 2nd dataset
                        return index % 10 === 0 ? this.getLabelForValue(val) : '';
                    },
                    maxRotation : 0
                },
                grid: {
                    display: false,
                    borderColor: '#fe5a3f'
                },
                title: {
                    padding: 40
                }
            },
            y: {
                max: 610000,
                grid: {
                    display: false,
                    borderColor: '#fe5a3f'
                },
                ticks: {
                    display : false,
                }
            },
        
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);