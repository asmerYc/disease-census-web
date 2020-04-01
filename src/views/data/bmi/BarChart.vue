<template>
  <!-- 盒子 -->
  <div class="chart_box">
    <!-- 左边 -->
    <div class="left">
      <div id="myChart" class="l_top"></div>
      <!-- 柱形图底部信息 -->
      <div class="l_bottom">
          <span class="circle6"></span>
          Average BMI
      </div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <div class="header">
        <h1 style="margin-top:20px;">Interpretation:</h1>
      </div>
      <div class="top">
        <div class="box">
          <div class="circle1">
            <div class="font">
              <p>Total Workloads</p>
              <p style="font-size:26px;font-weight:bold;margin-top:10px;">{{total}}</p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="circle2">
            <div class="font">
              <p>Based on the last year</p>
              <p style="color:red;font-size:26px;font-weight:bold;margin-top:10px;">3.56%</p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="circle3">
            <div class="font">
              <p>The Average</p>
              <p style="font-size:26px;font-weight:bold;margin-top:10px;">{{average}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="box_1">
          <div class="circle4">
            <div class="font">
              <p>The Highest</p>
              <p style="font-size:26px;font-weight:bold;margin-top:10px;">{{highest}}</p>
            </div>
          </div>
        </div>
        <div class="box_1">
          <div class="circle5">
            <div class="font">
              <p>The Lowest</p>
              <p style="font-size:26px;font-weight:bold;margin-top:10px;">{{lowest}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>>

<script>
export default {
  data () {
    return {
      data: [
        18.5,
        17.9,
        20.6,
        22.5,
        21.6,
        19.3,
        20.1,
        19.5,
        17,
        20.5,
        22.9,
        21.9,
        26.4,
        25.7,
        22.7,
        25.9
      ],
      total: '',
      average: '',
      highest: '',
      lowest: ''
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: 'Average BMI by District Last Year'
        },
        tooltip: {},
        xAxis: {
          data: [
            'Lamwo',
            'Kitgum',
            'Amuru',
            'Nwoya',
            'Gulu',
            'Pader',
            'Agago',
            'Oyam',
            'Kile',
            'Lira',
            'Aletyong',
            'Otuke',
            'Alebtong',
            'Apac',
            'Dokolo',
            'Amolatar'
          ]
        },
        yAxis: {},
        series: [
          {
            name: 'Average BMI',
            type: 'bar',
            data: this.data
          }
        ]
      })
    },
    // 计算各种属性
    operating () {}
  },
  created () {
    this.highest = Math.max.apply(null, this.data).toFixed(1)
    this.lowest = Math.min.apply(null, this.data).toFixed(1)
    this.total = this.data
      .reduce((preval, curval) => preval + curval)
      .toFixed(2)
    this.average = (this.total / this.data.length).toFixed(2)
  }
}
</script>
<style scoped>
.chart_box {
  display: flex;
  height: 903px;
}
.chart_box .left {
  display: flex;
  flex: 40%;
  padding: 20px;
  flex-direction: column;
}
.left .l_top {
  flex: 7;
}
.left .l_bottom {
  flex: 1;
  text-align: center;
  position: relative;
}
.left .l_bottom .circle6 {
  display: inline-block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #c23531;
  position: relative;
   top:4px;
}
.chart_box .right {
  flex: 70%;
  display: flex;
  flex-direction: column;
}
.chart_box .right .header {
  flex: 1;
}
.chart_box .right .top {
  flex: 6;
  display: flex;
}
.chart_box .right .bottom {
  display: flex;
  flex: 6;
}
.top .box {
  flex: 1;
}
.bottom .box_1 {
  flex: 1;
}
.circle1 {
  text-align: center;
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: lightcoral;
  margin: 80px 0 0 0px;
  position: relative;
}
.circle2 {
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: lightgoldenrodyellow;
  margin: 80px 0 0 30px;
  position: relative;
  text-align: center;
}
.circle3 {
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: purple;
  margin: 80px 0 0 55px;
  position: relative;
  text-align: center;
}
.circle4 {
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: orange;
  margin: 80px 0 0 150px;
  position: relative;
  text-align: center;
}
.circle5 {
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: yellowgreen;
  margin: 80px 0 0 80px;
  position: relative;
  text-align: center;
}
.font {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>>
