<template>
<div>
    <v-card elevation="15">
        <v-card-text>
            <Buble :chart-data="datacollection"></Buble>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="getRandomInt()">random</v-btn>
        </v-card-actions>
    </v-card>

</div>
</template>

<script>
//Importing Bubble class from the vue-chartjs wrapper
import Buble from '@/components/Buble.js'
//Exporting this so it can be used in other components
export default {
    data() {
        return {
            datacollection: null,
            xa: [],
            ya: [],
            r: []
        }
    },
    mounted() {
        //  this.getRandomInt();
        this.fillData()
    },
    components: {
        Buble
    },
    methods: {
        fillData() {
            this.datacollection = {
                //Data to be represented on x-axis
                labels: ['Data'],
                datasets: [{
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    pointBorderColor: '#249EBF',
                    //Data to be represented on y-axis
                    data: [{
                            x: 100,
                            y: 0,
                            r: 10
                        },
                        {
                            x: 60,
                            y: 30,
                            r: 20
                        },
                        {
                            x: 40,
                            y: 60,
                            r: 25
                        },
                        {
                            x: 80,
                            y: 80,
                            r: 50
                        },
                        {
                            x: 20,
                            y: 30,
                            r: 25
                        },
                        {
                            x: 0,
                            y: 100,
                            r: 5
                        }
                    ]
                }], //Chart.js options that controls the appearance of the chart
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },

        getRandomInt() {
            this.elementos = [];
            this.elementos2 = [];
            for (let index = 0; index < 10; index++) {
                this.elementos.push((Math.random() * (500 + 1)));
                this.elementos2.push((Math.random() * (500 + 1)));
                this.elementos3.push((Math.random() * (500 + 1)));
            }
            this.fillData();
        }
    },
}
</script>
