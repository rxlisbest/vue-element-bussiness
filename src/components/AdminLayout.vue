<template>
  <el-container style="height: 100%;">
    <el-header>
      <el-row class="el-header-row">
        <el-col :span="8" class="logo">
          测试后台管理系统
        </el-col>
        <el-col :offset="8" :span="8" style="text-align: right;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-col>
      </el-row>
    </el-header>
    <el-container style="height: 100%;">
      <el-aside style="height: 100%;">
        <el-menu :default-openeds="['1', '3']" style="height: 100%;">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-row>
          <el-col>
            <slot name="body"></slot>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
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
    name: 'AdminLayout',
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
  body, html {
    height: 100%;
  }
  #app {
    height: 100%;
  }
  .logo {
    font-size: 30px;
  }
  .el-header-row {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .el-menu,.el-main {
    overflow: auto;
  }
  .el-header {
    background-color: yellow;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>