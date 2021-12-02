<template>
<div>
    <v-card>
        <v-card-text>
            <Timescale :chart-data="datacollection"></Timescale>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="getRandomInt()">random</v-btn>
        </v-card-actions>
    </v-card>

</div>
</template>

<script>
import Timescale from '@/components/js/Timescale.js'

export default {
    components: {
        Timescale
    },
    data() {
        return {
            datacollection: null,
            elementos: [],
            elementos2: [],
            elementos3: [],
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
                        type: 'line',
                        label: 'Objetivo Mensual',fill:false,
                        //   backgroundColor: 'rgba(255,0,0,0.1)',
                           borderColor: 'green', //color de la linea
                           pointBackgroundColor: 'white', // color dentro de los puntos
                        //   borderWidth: 1, // grosor del borde y de los puntos
                        //   pointBorderColor: 'pink', // borde de los puntos 
                        data: this.elementos,
                    },
                    {
                        type: 'bar',
                        label: 'Venta',
                        backgroundColor: 'rgba(0,0,255,0.1)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        data: this.elementos2,
                    },
                    {
                        type: 'bar',
                        label: 'Data Three',
                        backgroundColor: 'rgba(241, 104, 0, 0.39)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        data: this.elementos3,
                    },
                ]
            }
        },
        getRandomInt() {
            this.elementos = [];
            this.elementos2 = [];
            this.elementos3 = [];
            for (let index = 0; index < 10; index++) {
                this.elementos.push((Math.random() * (500 + 1)));
                this.elementos2.push((Math.random() * (500 + 1)));
                this.elementos3.push((Math.random() * (500 + 1)));
            }
            this.fillData();
        }
    }
}
</script>

<style>
.small {
    max-width: 600px;
    margin: 150px auto;
}
</style>
