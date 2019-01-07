<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 16, offset: 4}" :lg="{span: 16, offset: 4}" :xl="{span: 16, offset: 4}">
          <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="index">首页</el-menu-item>
            <el-menu-item index="categories">产品</el-menu-item>
            <el-menu-item index="goods">关于我们</el-menu-item>
            <el-menu-item index="users">联系我们</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>

   <!--  <el-aside width="200px">
      <el-menu :default-active="index" class="el-menu-vertical-demo"  @select="handleSelect" :collapse="false">
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="categories">分类管理</el-menu-item>
        <el-menu-item index="goods">商品管理</el-menu-item>
        <el-menu-item index="users">客户管理</el-menu-item>
        <el-menu-item index="orders">订单管理</el-menu-item>
      </el-menu>
    </el-aside> -->
    <el-main>
      <el-row>
        <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 16, offset: 4}" :lg="{span: 16, offset: 4}" :xl="{span: 16, offset: 4}">
          <slot name="body"></slot>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import {
    Container,
    Header,
    Main,
    Aside,
    Menu,
    MenuItem
  } from 'element-ui'
  export default {
    name: 'Layout',
    components: {
      Container,
      Header,
      Aside,
      Main,
      Menu,
      MenuItem
    },
    props: [
      'index'
    ],
    data () {
      return {
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        this.$router.push({name: key + '-index'})
      }
    }
  }
</script>

<style>
  .el-menu,.el-main {
    overflow: auto;
  }
</style>