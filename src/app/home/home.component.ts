import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import {
  Columns,
  Config,
  DefaultConfig,
   API,
   APIDefinition } from 'ngx-easy-table';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chart1: boolean = true;
  chart2: boolean = false;
  chart3: boolean = false;
  chart4: boolean = false;

  date: boolean = false;

  progressOption: string = 'Weekly'

  currentDate = new Date();
  @ViewChild('table', { static: true }) table!: APIDefinition;
  @ViewChild('actionTpl', { static: true }) actionTpl!: TemplateRef<any>;

  public configuration!: Config;
  public columns!: Columns[];
  // data: any;
  stageID:string="";
  jsonBody:any;
  fileName= 'ItemMaster.xlsx';
  IsDisplayExportButton:boolean=false;
  barChart:any;
  doughtNutChart:any;

  constructor( private cdr: ChangeDetectorRef, private route: Router) {
  }

  public data = [{
    phone: '+1 (934) 551-2224',
    age: 20,
    address: { street: 'North street', number: 12 },
    company: 'ZILLANET',
    name: 'Valentine Webb',
    isActive: false,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }];

  overall :any = {
    datasets: [{
        data: [20, 50, 30],
        backgroundColor:['red','yellow','blue']
    }],



    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'deadline miss',
        'printer oversight',
        'orders correctly delivered'
    ]
};

monthly :any = {
  datasets: [{
      data: [40, 10, 50, 100],
      backgroundColor:['#000','yellow','blue','green']
  }],

  

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'deadline miss',
      'printer oversight',
      'orders correctly delivered'
  ]
};

yearly :any = {
  datasets: [{
      data: [10, 20, 30],
      backgroundColor:['red','yellow','blue']
  }],

  

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'deadline miss',
      'printer oversight',
      'orders correctly delivered'
  ]
};

weekly :any = {
  datasets: [{
      data: [20, 40, 40],
      backgroundColor:['red','yellow','blue']
  }],

  

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'deadline miss',
      'printer oversight',
      'orders correctly delivered'
  ]
};

  ngOnInit(): void {

    this.configuration = { ...DefaultConfig };
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;
    this.configuration.selectRow = true;

    this.columns = [
      { key: 'phone', title: 'Phone' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];

    this.barChart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        legend: {
          display: false
       },
        scales: {
          xAxes: [{
              gridLines: {
                  display:false
              }
          }],
          yAxes: [{
              gridLines: {
                  display:false
              },   
              ticks: {
                display: false
            },
          }]
      }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            type: 'bar',
            label: 'year 2021',
            data: [12000, 10000, 15000, 20000, 25000, 9000, 21000, 8000, 11000, 24000, 18000, 12000],
            backgroundColor: '#85FF5F',
            fill: true,
          },
           
          {
            type: 'bar',
            label: 'year 2022',
            data: [0, 0, 0, 0, 0, 13000, 24000, 16000, 16000, 18000, 14000, 15000].reverse(),
            backgroundColor: '#FF8383',
            fill: true,
            
          }
        ]
      }
    });

    this.doughtNutChart = new Chart('doughnut-weekly', {
      type: 'doughnut',
      data: this.weekly,
      options: {
        responsive: true,
        legend: {
          display: false
       },
      }
  });

  this.doughtNutChart = new Chart('doughnut-monthly', {
    type: 'doughnut',
    data: this.monthly,
    options: {
      responsive: true,
      legend: {
        display: false
     },
    }
   });

   this.doughtNutChart = new Chart('doughnut-yearly', {
    type: 'doughnut',
    data: this.yearly,
    options: {
      responsive: true,
      legend: {
        display: false
     },
    }
   });
   
   this.doughtNutChart = new Chart('doughnut-overall', {
    type: 'doughnut',
    data: this.overall,
    options: {
      responsive: true,
      legend: {
        display: false
     },
    }
   });

    // const datapie = {
    //   labels: [
    //     'Red',
    //     'Blue',
    //     'Yellow'
    //   ],
    //   datasets: [{
    //     label: 'My First Dataset',
    //     data: [300, 50, 100],
    //     backgroundColor: [
    //       'rgb(255, 99, 132)',
    //       'rgb(54, 162, 235)',
    //       'rgb(255, 205, 86)'
    //     ],
    //     hoverOffset: 4
    //   }]
    // };

    // const config = {
    //   type: 'doughnut',
    //   data: datapie,
    // };

  }

  onChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }

  exportexcel(){
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  prev() {
    if(this.chart1) {
      this.progressOption = 'Weekly';
      this.chart1 = false;
      this.chart2 = false;
      this.chart3 = false;
      this.chart4 = true;
    } else if (this.chart2) {
      this.progressOption = 'Monthly';
      this.chart2 = false;
      this.chart1 = true;
      this.chart4 = false;
      this.chart3 = false;
    } else if (this.chart3) {
      this.progressOption = 'Yearly';
      this.chart2 = true;
      this.chart1 = false;
      this.chart4 = false;
      this.chart3 = false;
    } else if (this.chart4) {
      this.progressOption = 'Overall Progress';
      this.chart2 = false;
      this.chart1 = false;
      this.chart4 = false;
      this.chart3 = true;
    }
  }

  nxt() {
    if(this.chart1) {
      this.progressOption = 'Monthly';
      this.chart1 = false;
      this.chart2 = true;
      this.chart3 = false;
      this.chart4 = false;
    } else if (this.chart2) {
      this.progressOption = 'Yearly';
      this.chart2 = false;
      this.chart1 = false;
      this.chart4 = false;
      this.chart3 = true;
    } else if (this.chart3) {
      this.progressOption = 'Overall Progress';
      this.chart2 = false;
      this.chart1 = false;
      this.chart4 = true;
      this.chart3 = false;
    } else if (this.chart4) {
      this.progressOption = 'Weekly';
      this.chart2 = false;
      this.chart1 = true;
      this.chart4 = false;
      this.chart3 = false;
    }
  }

  showDate() {
    this.date = true
  }

}
