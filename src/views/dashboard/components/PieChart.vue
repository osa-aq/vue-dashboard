<template>
  <div :class="className" :style="{height:height,width:width}" v-loading="loading" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import pieConfigs from '@/configs/charts/pie.json'
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
        this.loading = false;
        this.chart = echarts.init(this.$el, 'macarons')
        
        pieConfigs.legend.data = response.data.legend.data
        pieConfigs.series[0].data = response.data.series.data

        this.chart.setOption(pieConfigs)
      });
    }
  }
}
</script>