import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  Highcharts = Highcharts
  chartOptions ={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Validation of works',
        align: 'center'
    },
    
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    credits:{
      enabled:false
    },
    series: [{
        type: 'pie',
        name: 'Share',
        data: [
            ['jan', 23],
            ['feb', 18],
            {
                name: 'jun',
                y: 12,
                sliced: true,
                selected: true
            },
            ['mar*', 9],
            ['apr', 8],
            ['may', 30]
        ]
    }]
    }
  }

}
