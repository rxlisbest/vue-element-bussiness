<template>
  <layout index="index">
    <template slot="body">
      <el-carousel height="380px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <el-row :gutter="20" class="index-product">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-for="i in 3" >
          <el-card :body-style="{ padding: '0px' }" class="index-product-item">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546850533502&di=3231818618a5c6fd4366d41c80f7e04a&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201504%2F04%2F20150404H0224_hK5ma.jpeg" class="image" width="100%">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time"></time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
import Layout from '../../components/Layout'
export default {
  name: 'HelloWorld',
  components: {
    Layout
  },
  data() {
  	return {}
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
</style>
