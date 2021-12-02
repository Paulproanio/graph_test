<template>
<div>
    <v-card>
        <v-card-text>
            <Pie :chart-data="datacollection"></Pie>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="getRandomInt()">random</v-btn>
        </v-card-actions>
    </v-card>

</div>
</template>

<script>
import Pie from '@/components/js/Pie.js'

export default {
    components: {
        Pie
    },
    data() {
        return {
            datacollection: null,
            elementos: [1, 2, 3, 4, 5, 6, 7],
        }
    },
    mounted() {
        this.getRandomInt();
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['Ecuagarden', 'Green Garden', 'Boutique flowers', 'Ecua2', 'Amazon','Carcola'],
                datasets: [{
                        label: 'Data One',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ], //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'pink', // borde de los puntos 
                        data: this.elementos,
                    }

                ]
            }
        },
        getRandomInt() {
            this.elementos = [];
            this.elementos2 = [];
            for (let index = 0; index < 6; index++) {
                this.elementos.push((Math.random() * (500 + 1)));
            }
            this.fillData();
        }
    }
}
</script>
