import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  Highcharts = Highcharts
  chartOptions ={}

  constructor(){
    this.chartOptions = {
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['kasargod', 'kannur', 'kozhikode', 'malapuram', 'thrissur', 'alapuzha',
            'idukki', 'kollam', 'ekm', 'tvm']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Cars sold: {point.y}'
    },
    title: {
        text: 'Total Project Details',
        align: 'left'
    },
    
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    credits:{
        enabled:false

    },
    series: [{
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
    }]
    }
  }


}
