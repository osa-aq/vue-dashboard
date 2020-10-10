import axios from 'axios';

export default {
    getRaddarChartData() {
        return axios.get('/api/raddar-chart')
    },
    getPieChartData() {
        return axios.get('/api/pie-chart')
    },
    getLineChartData() {
        return axios.get('/api/line-chart')
    },
    getBarChartData() {
        return axios.get('/api/bar-chart')
    }
}