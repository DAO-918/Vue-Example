<template>
  <el-container>
    <el-header>
      信息管理
    </el-header>
    <el-container>

      <el-aside>
        <!-- 注意要引入 router -->
        <el-menu router>
          <!-- el-menu，ElementUI将Vue中route的 to 属性，使用index来代替 -->
          <el-menu-item index="/userinfo">
            <i class="el-icon-setting"></i>用户管理
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i>系统管理</template>
            <el-menu-item index="/company">公司管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  .el-header {
    background-color: #409EFF;
    color: #ffffff;
    line-height: 60px;
    font-size: 28px;
  }
  .el-aside {
    background-color: #e3e3e3;
    width: 200px !important;
  }

  body .el-table th.gutter{
    display: table-cell!important;
  }
  body .el-table colgroup.gutter {
    display: table-cell !important;
  }
</style>
