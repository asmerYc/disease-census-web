<template>
  <!-- 盒子 -->
  <div class="chart_box">
    <!-- 左边 -->
    <div class="left">
      <div id="myChart" class="l_top"></div>
      <div id="l_b_bar" class="l_bottom"></div>
    </div>
    <div class="middle">
      <div id="container" class="map"></div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <div id="rtop_bar" class="r_top"></div>
      <div id="rbottom_bar" class="r_bottom"></div>
    </div>
  </div>
</template>>

<script>
import HighCharts from 'highcharts'
import Highmaps from 'highcharts/modules/map'
import Uganda from './Uganda'

export default {
  data () {
    const hightCharts = HighCharts
    return {
      // 第一个柱状图数据
      data: [456, 341, 624, 928],
      // 地图数据
      highCharts: hightCharts,
      option: {
        chart: {
          borderWidth: 0,
          backgroundColor: '#222A44'
        },

        colors: [
          'rgba(19,64,117,0.05)',
          'rgba(19,64,117,0.2)',
          'rgba(19,64,117,0.4)',
          'rgba(19,64,117,0.5)',
          'rgba(19,64,117,0.6)',
          'rgba(19,64,117,0.8)',
          'rgba(19,64,117,1)'
        ],
        title: {
          text: 'The Amount of Referrals in Uganda',
          style: {
            'font-size': '20px',
            color: '#D9E0F7',
            fontFamily: 'San-Francisco-Text-Medium'
          },
          y: 20
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            x: 180,
            verticalAlign: 'bottom',
            align: '20'
          }
        },
        legend: {
          title: {
            text: 'The Amount of Referrals in Uganda',
            style: {
              color: '#D9E0F7',
              fontFamily: 'San-Francisco-Text-Medium',
              fontSize: '12px'
            }
          },
          x: -220,
          align: 'right',
          verticalAlign: 'bottom',
          floating: true,
          layout: 'vertical',
          valueDecimals: 0,
          backgroundColor: '#222A44',
          symbolRadius: 0,
          symbolHeight: 14,
          color: 'red',
          itemMarginBottom: 1,
          itemStyle: {
            color: '#FFFFFF'
          }
        },
        colorAxis: {
          dataClasses: [
            {
              to: 3
            },
            {
              from: 3,
              to: 10
            },
            {
              from: 10,
              to: 30
            },
            {
              from: 30,
              to: 100
            },
            {
              from: 100,
              to: 300
            },
            {
              from: 300,
              to: 1000
            },
            {
              from: 1000
            }
          ]
        },
        series: [
          {
            data: [
              { name: 'Gulu', value: '700' },
              { name: 'Pader', value: '300' },
              { name: 'Agago', value: '990' },
              { name: 'Oyam', value: '550' },
              { name: 'Aletyong', value: '420' },
              { name: 'Apac', value: '500' },
              { name: 'Nwoya', value: '345' },
              { name: 'Gulu', value: '200' },
              { name: 'Pader', value: '300' },
              { name: 'Agago', value: '990' }
            ],
            mapData: Uganda,
            joinBy: 'name',
            animation: true,
            name: 'Referrals',
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            tooltip: {
              valueSuffix: '/Number'
            }
          }
        ]
      },
      chartID: 'container',
      // 转诊数据
      xAxisData: ['Central', 'Eastern', 'Northern', 'Western'],
      data1: [10152, 10248, 9966, 8726],
      data2: [7200, 8400, 7896, 6875],
      itemStyle: {
        normal: {},
        emphasis: {
          barBorderWidth: 1,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
    }
  },
  mounted () {
    this.hospitalLine()
    this.supplyLine()
    this.init()
    this.rtopLine()
    this.rbottomLine()
  },
  methods: {
    hospitalLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: 'The Amount of Hospitals in Uganda',
          top: '4',
          left: '2',
          textStyle: {
            color: '#D9E0F7',
            fontFamily: 'San-Francisco-Text-Medium',
            fontSize: '14'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          top: '30',
          left: '200',
          textStyle: {
            color: ['#C85655', '#50616C', '#6FA6AB']
          }
        },
        grid: {
          show: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Central', 'Eastern', 'Northern', 'Western'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              textStyle: {
                color: '#6F7CA6' // 坐标值得具体的颜色
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 300,
            interval: 50,
            axisLabel: {
              textStyle: {
                color: '#6F7CA6' // 坐标值得具体的颜色
              }
            }
          }
        ],
        series: [
          {
            name: 'HCs',
            type: 'bar',
            data: [297, 241, 105, 63]
          },
          {
            name: 'General ',
            type: 'bar',
            data: [247, 141, 45, 33]
          },
          {
            name: 'Regional ',
            type: 'bar',
            data: [107, 81, 15, 7]
          }
        ]
      })
    },
    supplyLine () {
      let supplyChart = this.$echarts.init(document.getElementById('l_b_bar'))
      supplyChart.setOption({
        title: {
          text: 'The Amount of Supplies Used Last Year',
          top: '8',
          left: '2',
          textStyle: {
            color: '#D9E0F7',
            fontFamily: 'San-Francisco-Text-Medium',
            fontSize: '14'
          }
        },
        tooltip: {},
        xAxis: {
          data: ['Cartridge', 'Ribbon', 'Print Paper', 'Test Strip'],
          axisLabel: {
            textStyle: {
              color: '#6F7CA6' // 坐标值得具体的颜色
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: '#6F7CA6' // 坐标值得具体的颜色
            }
          }
        },
        series: [
          {
            name: 'The Amount of Supplies Used Last Year',
            type: 'bar',
            data: this.data,
            itemStyle: {
              normal: {
                color: '#4ad2ff'
              }
            },
            barWidth: '20'
          }
        ]
      })
    },
    init () {
      this.highCharts.Map('container', this.option)
    },
    // 上下问诊差异图
    rtopLine () {
      let myChart = this.$echarts.init(document.getElementById('rtop_bar'))
      myChart.setOption({
        title: {
          text: 'The Amount of Referrals in Uganda',
          top: '4',
          left: '2',
          textStyle: {
            color: '#D9E0F7',
            fontFamily: 'San-Francisco-Text-Medium',
            fontSize: '14'
          }
        },

        // backgroundColor: "#fff",
        legend: {
          data: ['Upward referral', 'Downward referral'],
          align: 'left',
          left: 10
        },
        tooltip: {},
        legend: {
          top: '30',
          textStyle: {
            color: ['#C85655', '#50616C']
          }
        },
        xAxis: {
          data: this.xAxisData,
          name: '',
          silent: false,
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
          axisLabel: {
            textStyle: {
              color: '#6F7CA6' // 坐标值得具体的颜色
            }
          }
        },
        yAxis: {
          inverse: false,
          splitArea: { show: false },
          axisLabel: {
            textStyle: {
              color: '#6F7CA6' // 坐标值得具体的颜色
            }
          }
        },
        grid: {
          left: 100
        },

        series: [
          {
            name: 'Upward referral',
            type: 'bar',
            stack: 'one',
            itemStyle: this.itemStyle,
            data: this.data1,
            barWidth: '20'
          },
          {
            name: 'Downward referral',
            type: 'bar',
            stack: 'one',
            itemStyle: this.itemStyle,
            data: this.data2,
            barWidth: '20'
          }
        ]
      })
    },
    // 右部下方折线图
    rbottomLine () {
      let myChart = this.$echarts.init(document.getElementById('rbottom_bar'))
      myChart.setOption({
        title: {
          text: 'Percentage of Referral Growth based on Last Year',
          top: '8',
          left: '2',
          textStyle: {
            color: '#D9E0F7',
            fontFamily: 'San-Francisco-Text-Medium',
            fontSize: '14'
          }
        },
        tooltip: {},
        xAxis: {
          data: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
          ],
          axisLabel: {
            textStyle: {
              color: '#6F7CA6' // 坐标值得具体的颜色
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: '#6F7CA6' // 坐标值得具体的颜色
            }
          }
        },
        series: [
          {
            name: 'Percentage of Referral Growth',
            type: 'line',
            data: [
              2.03,
              2.12,
              3.05,
              1.25,
              1.98,
              2.56,
              1.95,
              1.64,
              1.27,
              0.83,
              1.51,
              2.94
            ]
          }
        ]
      })
    }
  },
  created () {}
}
</script>
<style scoped>
.chart_box {
  display: flex;
  height: 921px;
  background-color: #1f2439;
}
.chart_box .left {
  display: flex;
  flex: 3;
  padding: 20px;
  flex-direction: column;
}
.chart_box .left .l_top {
  flex: 1;
  margin-bottom: 20px;
  background-color: #222a44;
}
.chart_box .left .l_bottom {
  flex: 1;
  background-color: #222a44;
}
.chart_box .middle {
  display: flex;
  flex: 3;
  padding: 20px 0;
  flex-direction: column;
}
.map {
  background-color: #222a44;
  flex-direction: column;
  flex: 1;
}

.chart_box .right {
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.chart_box .right .r_top {
  flex: 1;
  background-color: #222a44;
  margin-bottom: 20px;
}
.chart_box .right .r_bottom {
  flex: 1;
  background-color: #222a44;
}
</style>
