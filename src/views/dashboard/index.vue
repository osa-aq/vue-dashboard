<template>
  <div class="dashboard-editor-container">

    <el-row class="country-select" type="flex" justify="end">
      <el-col :xs="24" :sm="24" :span="8">
        <span>Locations you are viewing: </span>
        <el-select ref="select" v-model="value" placeholder="Select Country">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
    </el-row>

    <panel-group />

    <el-row class="line-chart-row">
      <line-chart />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import PanelGroup from './components/PanelGroup'

export default {
  name: 'Dashboard',
  data() {
    return {
      options: [
        { value: 'jordan', label: 'Jordan' },
        { value: 'egypt', label: 'Egypt' },
        { value: 'kuwait', label: 'Kuwait' }
      ],
      value: 'jordan'
    }
  },
  components: {
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    PanelGroup
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
  .line-chart-row {
    background:#fff;
    padding:16px 16px 0;
    margin-bottom:32px;
  }
  .country-select {
    margin-bottom:32px;
    text-align:right;
  }
}
@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
