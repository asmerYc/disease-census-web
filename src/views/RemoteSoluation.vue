<template>
  <el-container class="container">
    <!-- <el-header>Message</el-header> -->
    <el-aside class="aside">
      <div class="list">
        <div class="search">
          <el-input
            style="font-size:12px;height:18px"
            placeholder="Please enter the content"
            v-model="searchName"
            @keyup.enter.native="search"
          >
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
        <ul style="border-top:1.5px solid #c9c9c9">
          <li
            class="cell"
            @click="click(item,index)"
            v-for="(item,index) in infoList"
            :key="index"
            :class="{active:index === checkindex}"
          >
            <!-- 图片区域 -->
            <div class="Img">
              <img class="docImg" src="../assets/remote/doctor.jpg" alt />
            </div>
            <!-- 医生信息部分 -->
            <div class="doc">
              <div class="info">
                <p class="name" title>Patient:{{item.patientName}} Doctor:{{item.doctorName}}</p>
                <span style="margin-top:2px;font:8px /1.2em arial;color:black">{{item.lastContent}}</span>
                <span style="margin-top:2px;font:8px /1.2em arial;color:black;position:absolute;right:-30px;">{{item.lastTime | getDateDiff}}</span>
              </div>
            </div>
          </li>
        </ul>
        <div
          style="text-align:center;line-height:800px;"
          v-if="infoList.length === 0"
        >No data available</div>
      </div>
    </el-aside>
    <el-main class="main">
      <div class="title">
        <p
          style="font:bold 12px/1.5em arial;line-height: 56px;padding-left:20px;border-bottom:1.5px solid #c9c9c9"
        >patient:{{patient}} --- Doctor:{{doctor}}</p>
      </div>
      <div class="bigImg">
        <img style="width:1200px;height:820px" :src="bigImgUrl" alt />
      </div>
    </el-main>
  </el-container>
</template>>
<script>
import { getInfo } from '../axios/api'
export default {
  data () {
    return {
      searchName: '',
      bigImgUrl: '',
      checkindex: 0, // 初始化第一项默认高亮
      infoList: [],
      patient: '',
      doctor: ''
    }
  },
  methods: {
    click (item, index) {
      this.checkindex = index
      this.patient = item.patientName
      this.doctor = item.doctorName
      if (index === 0) {
        this.bigImgUrl = require('../assets/remote/chartlog.jpeg')
      } else {
        this.bigImgUrl = require('../assets/remote/web_chartlog.png')
      }
    },
    // 查询医生和患者信息
    getAll () {
      this.$axios.get('/api/consultation/consultation/name').then(res => {
        if (res.data.code === 0) {
          this.infoList = res.data.data.content
          this.click(this.infoList[0], 0)
        }
      })
    },
    // 会话列表搜索过滤方法
    search () {
      this.$axios
        .get('/api/consultation/consultation/name', {
          params: {
            name: this.searchName
          }
        })
        .then(res => {
          if (res.data.code !== 0) {
            this.$message('操作失败')
            return
          }
          this.infoList = res.data.data.content
        })
    }
  },
  filters: {
    getDateDiff: function (value) {
      var dateTimeStamp = new Date(value).getTime()
      var minute = 1000 * 60
      var hour = minute * 60
      var day = hour * 24
      var halfamonth = day * 15
      var month = day * 30
      var now = new Date().getTime()
      var diffValue = now - dateTimeStamp
      if (diffValue < 0) {
        return
      }
      var monthC = diffValue / month
      var weekC = diffValue / (7 * day)
      var dayC = diffValue / day
      var hourC = diffValue / hour
      var minC = diffValue / minute
      var result = ''
      if (monthC >= 1) {
        result = '' + parseInt(monthC) + ' month ago'
      } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + ' week'
      } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + ' day'
      } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + ' hour'
      } else if (minC >= 1) {
        result = '' + parseInt(minC) + ' minute'
      } else result = 'just now'
      return result
    }
  },
  created () {
    this.getAll()
  }
}
</script>>
<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
}
.aside {
  height: 903px;
  background-color: #fff;
  /* margin-right: 5px; */
  margin-left: 2px;
  width: 300px;
}
.aside .list {
  width: 300px;
  height: 903px;
}
.main {
  flex: 1;
  padding: 0;
  background-color: #fff;
}
.aside .list ul li {
  list-style: none;
  padding: 5px;
}
.aside .list .search {
  padding: 8px;
  height: 40px;
}
.docImg {
  width: 45px;
  height: 45px;
}
.cell {
  display: flex;
  cursor: pointer;
}
.cell .Img {
  flex-grow: 1;
}
.cell .doc {
  display: flex;
  flex-grow: 4;
  border-bottom: 1px solid #c9c9c9;
}
.cell .doc .info {
    position: relative;
}
/* 主题图片部分的样式 */
.main .title {
  height: 54px;
}
.bigImg {
  text-align: center;
  padding: 12px;
}
.name {
  font: bold 12px/1.5em arial;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  white-space: nowrap;
}
/* 高亮样式 */
.active {
  background: lightblue;
}
</style>
