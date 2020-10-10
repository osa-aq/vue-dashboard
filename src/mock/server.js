import { Server } from 'miragejs'
import raddarChartData from './raddar-chart-data.json'
import pieChartData from './pie-chart-data.json'
import lineChartData from './line-chart-data.json'
import barChartData from './bar-chart-data.json'
import totalData from './total-data.json'
import transactionsData from './transactions-data.json'
import averageData from './average-data.json'
import refundsData from './refunds-data.json'

export function makeServer() {
    const server = new Server({
        routes() {
            this.namespace = "api"

            this.get("/raddar-chart", () => {
                return raddarChartData
            },{ timing: 2000 })

            this.get("/pie-chart", () => {
                return pieChartData
            },{ timing: 1000 })

            this.get("/line-chart", () => {
                return lineChartData
            },{ timing: 800 })

            this.get("/bar-chart", () => {
                return barChartData
            },{ timing: 1500 })

            this.get("/total", () => {
                return totalData
            },{ timing: 500 })

            this.get("/transactions", () => {
                return transactionsData
            },{ timing: 2000 })

            this.get("/average", () => {
                return averageData
            },{ timing: 1000 })

            this.get("/refunds", () => {
                return refundsData
            },{ timing: 800 })
        }
    })

    return server;
}