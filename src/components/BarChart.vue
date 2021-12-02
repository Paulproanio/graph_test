<template>
<div class="">
    <v-card>
        <v-card-text>
            <BarChar :chart-data="datacollection"></BarChar>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="getRandomInt()">random</v-btn>
        </v-card-actions>
    </v-card>

</div>
</template>

<script>
import BarChar from '@/components/BarBar.js'

export default {
    components: {
        BarChar
    },
    data() {
        return {
            datacollection: null,
            elementos: [],
            elementos2: []
        }
    },
    mounted() {
        this.getRandomInt();
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
                datasets: [{
                        label: 'Data One',
                        backgroundColor: 'rgba(255,0,0,0.1)',
                        borderColor: 'lightpink', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'pink', // borde de los puntos 
                        data: this.elementos,
                    },
                    {
                        label: 'Data Dos',
                        backgroundColor: 'rgba(0,0,255,0.1)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        data: this.elementos2,
                    },

                ]
            }
        },
        getRandomInt() {
            this.elementos = [];
            this.elementos2 = [];
            for (let index = 0; index < 10; index++) {
                this.elementos.push((Math.random() * (500 + 1)));
                this.elementos2.push((Math.random() * (500 + 1)));
            }
            this.fillData();
        }
    }
}
</script>




<!--
  
//Importing Bar class from the vue-chartjs wrapper
import {
    Bar
} from 'vue-chartjs'
//Exporting this so it can be used in other components
export default {
    extends: Bar,
    data() {
        return {
            datacollection: {
                //Data to be represented on x-axis
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                datasets: [{
                    label: 'Poduccion Mensual',
                    backgroundColor: '#f87979',
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    pointBorderColor: '#249EBF',
                    //Data to be represented on y-axis
                    data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 80]
                }]
            },
            //Chart.js options that controls the appearance of the chart
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
    mounted() {
        //renderChart function renders the chart with the datacollection and options object.
        this.renderChart(this.datacollection, this.options)

    },
    methods: {
        hola() {

        }
    },
}*/-->

