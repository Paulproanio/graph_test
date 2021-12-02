<template>
<div class="">
    <v-card>
        <v-card-text>
            <Ejemplo :chart-data="datacollection" :height=100 ></Ejemplo>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="getRandomInt()">random</v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
import Ejemplo from '@/components/Ejemplo.js'

export default {
    components: {
        Ejemplo
    },
    data() {
        return {
            datacollection: null,
            elementos: [],
            elementos2: [],
            elementos3: [],
            elementos4: [],
            elementos5: [],
            elementos6: [],
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
                        pointBorderColor: 'pink', // borde de los puntos ,
                        fill:false,
                        data: this.elementos,
                    },
                    {
                        label: 'Data Two',
                        backgroundColor: 'rgba(0,0,255,0.1)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        fill:false,
                        data: this.elementos2,
                    },
                    {
                        label: 'Data Three',
                        backgroundColor: 'rgba(241, 104, 0, 0.39)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        fill:false,
                        data: this.elementos3,
                    },
                    {
                        label: 'Data Four',
                        backgroundColor: 'rgba(108, 255, 0, 0.24)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 

                        fill:false,
                        data: this.elementos4,
                    },
                    {
                        label: 'Data Five',
                        backgroundColor: 'rgba(82, 0, 255, 0.2)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        fill:false,
                        data: this.elementos5,
                    },
                    {
                        label: 'Data Six',
                        backgroundColor: 'rgba(255, 24, 255, 0.23)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        fill:false,
                        data: this.elementos6,
                    },

                ]
            }
        },
        getRandomInt() {
            this.elementos = [];
            this.elementos2 = [];
            this.elementos3 = [];
            this.elementos4 = [];
            this.elementos5 = [];
            this.elementos6 = [];
            for (let index = 0; index < 10; index++) {
                this.elementos.push((Math.random() * (500 + 1)));
                this.elementos2.push((Math.random() * (500 + 1)));
                this.elementos3.push((Math.random() * (500 + 1)));
                this.elementos4.push((Math.random() * (500 + 1)));
                this.elementos5.push((Math.random() * (500 + 1)));
                this.elementos6.push((Math.random() * (500 + 1)));
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
