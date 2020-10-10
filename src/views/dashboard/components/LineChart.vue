<template>
  <div :class="className" :style="{height:height,width:width}" v-loading="loading" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import lineConfigs from '@/configs/charts/line.json'
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    data: {
      default: null
    }
  },
  data() {
    return {
      chart: null,
      loading: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      if ( this.data ) {
        this.initChart()
      }
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.data.then((response)=>{
        this.loading = false;
        this.chart = echarts.init(this.$el, 'macarons')

        lineConfigs.xAxis.data = response.data.xAxis.data
        lineConfigs.title = response.data.title
        lineConfigs.series[0].data = response.data.series.data
        lineConfigs.series[0].name = response.data.series.name

        this.chart.setOption(lineConfigs)
      })
    }
  }
}
</script>