<template>
  <admin-layout index="index">
    <template slot="body">
      <el-row>
        <el-col :span="18">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'goods-index' }">商品管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'goods-index' }">详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="6" class="el-col-button">
          <el-button type="primary" @click="open({name: 'goods-add'})" icon="el-icon-plus"></el-button>
        </el-col>
      </el-row>

      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          label="单价">
          <template slot-scope="scope">
            ￥{{scope.row.price.toFixed(2)}} / {{scope.row.unit}}
          </template>
        </el-table-column>
        <el-table-column
          label="库存">
          <template slot-scope="scope">
            {{scope.row.amount}} {{scope.row.unit}}
          </template>
        </el-table-column>
        <el-table-column
          width="200"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="open({name: 'goods-amount', query: {id: scope.row.id}})" type="primary" icon="el-icon-plus" circle title="入库"></el-button>
            <el-button @click="open({name: 'goods-detail', query: {id: scope.row.id}})" type="primary" icon="el-icon-tickets" circle title="详情"></el-button>
            <el-button @click="edit(scope.row.id)" type="primary" icon="el-icon-edit" circle title="编辑"></el-button>
            <el-button @click="del(scope.row.id)" type="danger" icon="el-icon-delete" circle title="删除"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        v-if="tableData.length > 0"
        layout="prev, pager, next"
        :current-page="pagination.page"
        :page-size="pagination.pageSize"
        @current-change="handleCurrentChange"
        :total="pagination.count" class="pagination">
      </el-pagination>
    </template>
  </admin-layout>
</template>

<script>
import AdminLayout from '../../../components/AdminLayout'
export default {
  name: 'HelloWorld',
  components: {
    AdminLayout
  },
  data() {
  	return {
      tableData: [],
      pagination: {
        page: 1,
        pageSize: 8,
        pages: 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-product {
  }
  .index-product-item {
    margin-top: 20px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-col-button {
    text-align: right;
  }
</style>
