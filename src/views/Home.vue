<template>
  <el-container style="height: 965px;">
    <el-header style="background-color: #1B1F37;position:relative;">
      <div style="color:white;width:170px;">
        <i class="el-icon-platform-eleme"></i>
        Management
        System
      </div>
      <div style="position:absolute;right:30px;top:2px;color:#6F7CA6">
        <i class="el-icon-setting"></i>
        <span>admin</span>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col>
            <el-menu
              :default-active="this.$route.path"
              class="el-menu-vertical-demo"
              router
              @select="select"
              text-color="#fff"
              background-color="#222A44"
              @open="'/bmi/barChart'"
              style="height:921px"
            >
             <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span style="color:#609CFF">Home</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item style="color:#98A3C6;font-size:14px;" index="/pagehome">Home</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-data"></i>
                  <span style="color:#609CFF">Data Management</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item style="color:#98A3C6;font-size:14px;" index="/bmi/barChart">BMI</el-menu-item>
                  <el-menu-item
                    style="color:#98A3C6;font-size:14px;"
                    index="/heart/barChart"
                  >HeartFailure</el-menu-item>
                  <el-menu-item
                    style="color:#98A3C6;font-size:14px;"
                    index="/work/barChart"
                  >WorkLoad</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-message"></i>
                  <span style="color:#609CFF">Remote Consulation</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    style="color:#98A3C6;font-size:14px;"
                    index="/remoteSoluation"
                  >Remote Consulation</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="background-color:#fff;padding:0">
        <div style="height:50px;padding-left:20px;padding-top:10px;" v-if="this.indexKey === '1'">
          <el-button @click="gotoData" icon="el-icon-s-data" circle></el-button>
          <el-button @click="gotoLocation" type="primary" icon="el-icon-map-location" circle></el-button>
          <el-button @click="gotoFold" type="success" icon="el-icon-s-fold" circle></el-button>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  line-height: 60px;
}

.el-aside {
  color: #333;
  margin-right: 0;
}
.el-menu-item.is-active {
   background:linear-gradient(90deg,rgba(50,64,111,1),rgba(27,31,55,-0.19)) !important;
}
</style>

<script>
export default {
  data () {
    return {
      routerName: '',
      isRemote: true,
      indexKey: '',
      originKeyPath: ['3', '/pagehome'],
      defaultUrl: ''
    }
  },
  methods: {
    select (key, keyPath) {
      let index = key.lastIndexOf('/')
      this.routerName = key.slice(1, index)
      this.indexKey = keyPath[0]
      console.log(this.indexKey)
    },
    // 柱状图跳转
    gotoData () {
      this.$router.replace(`/${this.routerName}/barChart`)
    },
    // 地图跳转
    gotoLocation () {
      this.$router.replace(`/${this.routerName}/map`)
    },
    // 折线图跳转
    gotoFold () {
      this.$router.replace(`/${this.routerName}/lineChart`)
    }
  },
  computed: {
    path () {
      console.log(this.$toute.path)
    }
  },
  created () {
    this.select('/pagehome', this.originKeyPath)
  }
}
</script>
