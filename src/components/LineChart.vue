<template>
<div>
    <v-container>
        <v-card>
            <LineChart :chart-data='datacollection'></LineChart>
        </v-card>
    </v-container>
</div>
</template>

<script>
import LineChart from '@/components/LineLine.js'
import axios from 'axios'
export default {
    components: {
        LineChart
    },
    data() {
        return {
            datacollection: null,
            loaded: false,
            temperature: [1, 2, 3, 4, 5, 6, 8, 6, 4, 2, 4, 2],
            humidity: [7, 5, 1, 5, 7, 4, 6, 3, 4, 9, 4, 6],
            potentio: [9, 3, 4, 7, 2, 3, 1, 5, 4, 4, 7, 9],
            time: []
        }
    },
    methods: {
        fillData() {
            this.datacollection = {
                // labels:this.time,
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                datasets: [{
                        label: 'Temp (°C)',
                        backgroundColor: 'rgba(255,0,0,0.1)',
                        borderColor: 'lightpink', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'pink', // borde de los puntos 
                        data: this.temperature,
                    },
                    {
                        label: 'Hum (%)',
                        backgroundColor: 'rgba(0,0,255,0.1)',
                        borderColor: 'lightblue', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'blue', // borde de los puntos 
                        data: this.humidity,
                    },
                    {
                        label: 'Potentio',
                        backgroundColor: 'rgba(255,255,0,0.1)',
                        borderColor: 'orange', //color de la linea
                        pointBackgroundColor: 'white', // color dentro de los puntos
                        borderWidth: 1, // grosor del borde y de los puntos
                        pointBorderColor: 'orange', // borde de los puntos 
                        data: this.potentio,
                    }
                ],
            };
        },
        listar() {
            for (let index = 0; index < 10; index++) {
                this.temperature.push(index);
            }
        },
        obtenerDatos() {
            axios.get('http://localhost:3000/api/articulo/articulo')
                .then(res => {
                    //  console.log(res)
                    for (let index = 0; index < res.data.length; index++) {
                        //  console.log( res.data[0].stock);
                        this.temperature.push(res.data[index].stock);
                        //this.time.push(res.data[index].descripcion);
                    }
                    // console.log(this.temperature);
                    // console.log(this.time);
                    this.fillData();
                })
                .catch(err => {
                    console.error(err);
                })
        },
    },
    async mounted() {
        this.fillData();
        this.listar();
        //   await this.obtenerDatos();
    },
}
</script>

<style>
.area {
    width: 500px;
    height: 100px;
    margin: auto;
}
</style>
