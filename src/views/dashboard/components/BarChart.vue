<template>
  <div :class="className" :style="{height:height,width:width}" v-loading="loading" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import barConfigs from '@/configs/charts/bar.json'
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
      default: '300px'
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
        this.loading = false
        this.chart = echarts.init(this.$el, 'macarons')

        barConfigs.xAxis[0].data = response.data.xAxis.data
        barConfigs.series = response.data.series
        
        this.chart.setOption(barConfigs)
      })
    }
  }
}
</script>