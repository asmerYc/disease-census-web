<template>
  <div id="container" style="height:853px;"></div>
</template>
<script>
import HighCharts from 'highcharts'
import Highmaps from 'highcharts/modules/map'
import Uganda from './Uganda'
import axios from 'axios'

Highmaps(HighCharts)

export default {
  components: {},
  data () {
    const hightCharts = HighCharts
    return {
      highCharts: hightCharts,
      option: {
        chart: {
          borderWidth: 1
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
          text: 'Heart Disease in District Last Year'
        },
        mapNavigation: {
          enabled: true
        },
        legend: {
          title: {
            text: 'Heart Disease in District Last Year',
            style: {
              color:
                (hightCharts.theme && hightCharts.theme.textColor) || 'black'
            }
          },
          align: 'right',
          verticalAlign: 'bottom',
          floating: true,
          layout: 'vertical',
          valueDecimals: 0,
          backgroundColor:
            (hightCharts.theme && hightCharts.theme.legendBackgroundColor) ||
            'rgba(255, 255, 255, 0.85)',
          symbolRadius: 0,
          symbolHeight: 14
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
              { name: 'Oyam', value: '250' },
              { name: 'Aletyong', value: '159' },
              { name: 'Apac', value: '500' }
            ],
            mapData: Uganda,
            joinBy: 'name',
            animation: true,
            name: 'Clinic Workload',
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
      chartID: 'container'
    }
  },
  methods: {
    init () {
      this.highCharts.Map('container', this.option)
    }
  },
  mounted () {
    this.init()
  }
}
</script>>
