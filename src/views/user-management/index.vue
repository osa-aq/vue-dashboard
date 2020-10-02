<template>
    <div class="app-container">
        <h2>User Management</h2>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            fixed
            prop="date"
            label="Date"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="Name"
            width="120">
            </el-table-column>
            <el-table-column
            prop="email"
            label="Email"
            width="120">
            </el-table-column>
            <el-table-column
            prop="state"
            label="State"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="City"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="Address"
            width="300">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="Zip"
            width="120">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="Operations"
            width="120">
            <template>
                <el-button @click="handleClick" type="text" size="small">Detail</el-button>
                <el-button type="text" size="small">Edit</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    name:'UserManagement',
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          email: 'test@posrocket.com',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          email: 'test@posrocket.com',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          email: 'test@posrocket.com',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          email: 'test@posrocket.com',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
</script>