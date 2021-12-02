<template>
<div>
    <v-container>
        <v-layout wrap>
            <v-flex sm6>
                <v-card>
                    <h1>EJEMPLO 1</h1>
                    <LineChart></LineChart>
                </v-card>
            </v-flex>
            <v-flex sm6>
                <v-container>
                    <v-card>
                        <h1>BARRAS</h1>
                        <BarChart></BarChart>
                    </v-card>
                </v-container>
            </v-flex>
            <v-flex sm6>
                <v-card>
                    <h1>DONA</h1>
                    <Pie></Pie>
                </v-card>
            </v-flex>
            <v-flex sm6>
                <v-card>
                    <h1>BURBUJAS</h1>
                    <BubleChart></BubleChart>
                </v-card>
            </v-flex>
            <v-flex md12>
                <v-card>
                    <h1>EJEMPLO</h1>
                    <Ejemplocomp></Ejemplocomp>
                </v-card>
            </v-flex>
            <v-flex md6>
                <v-card>
                    <h1>DONA</h1>
                    <Donut></Donut>
                </v-card>
            </v-flex>
            <v-flex md6>
                <v-card>
                    <h1>Time Scale</h1>
                    <Timescale></Timescale>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import LineChart from '@/components/LineChart.vue'
import BarChart from '@/components/BarChart.vue'
import BubleChart from '@/components/BubleChart.vue'
import Ejemplocomp from '@/components/Ejemplocomp.vue'
import Pie from '@/components/Pie.vue'
import Donut from '@/components/Donut.vue'
import Timescale from '@/components/Timescale.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        LineChart,
        BarChart,
        Donut,
        BubleChart,
        Ejemplocomp,
        Pie,
        Donut,
        Timescale
    }
}
</script>

<style>
.small {
    /* max-width: 1200px;*/
    max-height: 300px;
    margin: 10px auto;
}
</style>
