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

      <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px" class="demo-ruleForm">
        <el-form-item prop="name" label="商品名称">
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item prop="category_id" label="分类">
          <el-select v-model="form.category_id" placeholder="请选择">
            <el-option
              v-for="item in categories"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="price" label="单价">
          <el-input-number v-model="form.price" :precision="2" :step="1" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item prop="amount" label="库存">
          <el-input-number v-model="form.amount" :precision="2" :step="1" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item prop="unit" label="单位">
          <el-col :span="3">
            <el-input v-model="form.unit"></el-input>
          </el-col>（例：千克、个... ...）
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onCancle">取消</el-button>
        </el-form-item>
      </el-form>
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
      form: {
        name: '',
        category_id: '',
        amount: 0.00,
        price: 0.00,
        unit: ''
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
