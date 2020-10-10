import axios from 'axios';

export default {
    getTotalData() {
        return axios.get('/api/total')
    },
    getTransactionsData() {
        return axios.get('/api/transactions')
    },
    getAverageData() {
        return axios.get('/api/average')
    },
    getRefundsData() {
        return axios.get('/api/refunds')
    }
}