import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    async mounted() {
        this.renderChart(this.chartData, this.options);
    }
}