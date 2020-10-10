<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" v-loading="!totalData">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-s-finance card-panel-icon"></i>
        </div>
        <div class="card-panel-description" v-if="totalData">
          <div class="card-panel-text-container">
            <div class="card-panel-text">
              Total
            </div>
            <count-to :start-val="0" :end-val="totalData" :duration="2600" class="card-panel-num" /> JOD
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" v-loading="!transactionsData">
        <div class="card-panel-icon-wrapper icon-message">
          <i class="el-icon-s-marketing card-panel-icon"></i>
        </div>
        <div class="card-panel-description" v-if="transactionsData">
          <div class="card-panel-text-container">
            <div class="card-panel-text">
              Transactions
            </div>
            <count-to :start-val="0" :end-val="transactionsData" :duration="3000" class="card-panel-num" /> JOD
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" v-loading="!averageData">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="el-icon-s-data card-panel-icon"></i>
        </div>
        <div class="card-panel-description" v-if="averageData">
          <div class="card-panel-text-container">
            <div class="card-panel-text">
              Average
            </div>
            <count-to :start-val="0" :end-val="averageData" :duration="3200" class="card-panel-num" /> JOD
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" v-loading="!refundsData">
        <div class="card-panel-icon-wrapper icon-shopping">
          <i class="el-icon-bottom card-panel-icon"></i>
        </div>
        <div class="card-panel-description" v-if="refundsData">
          <div class="card-panel-text-container">
            <div class="card-panel-text">
              Refunds
            </div>
            <count-to :start-val="0" :end-val="refundsData" :duration="3600" class="card-panel-num" /> JOD
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import api from '@/api/panel'

export default {
    name: "PanelGroup",
    data() {
      return {
        totalData: 0,
        transactionsData: 0,
        averageData: 0,
        refundsData: 0
      }
    },
    components: {
        CountTo
    },
    mounted() {
      api.getTotalData().then((response)=>{
        this.totalData = response.data.total
      })

      api.getTransactionsData().then((response)=>{
        this.transactionsData = response.data.transactions
      })

      api.getAverageData().then((response)=>{
        this.averageData = response.data.average
      })

      api.getRefundsData().then((response)=>{
        this.refundsData = response.data.refunds
      })
    }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-text-container {
      display: inline-block;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
@media (max-width:550px) {
  .card-panel-icon-wrapper {
    display: none;
  }
  .card-panel-description {
    float: none !important;
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    .card-panel-text-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>