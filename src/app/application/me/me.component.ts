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
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MEComponent implements OnInit  {

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
    no: 65831,
    date: '05-05-2022',
    fpCost:'$1,891.50',
    printerCost: '$50',
    description: 'Wrong pantone allocation',
  }, {
    no: 66052,
    date: '05-06-2022',
    fpCost:'1,000.00',
    printerCost: '$60',
    description: 'Stains on the garment',
  },
  {
    no: 65057,
    date: '05-07-2022',
    fpCost:'$182.00',
    printerCost: '$70',
    description: 'Incorrect custom names',
  },
  {
    no: 58605,
    date: '11-06-2022',
    fpCost:'$8.90',
    printerCost: '$3,300.00',
    description: 'Printer oversight',
  },
  {
    no: 62729,
    date: '11-05-2022',
    fpCost:'$1,676.99',
    printerCost: '$1,322.75',
    description: 'Quality of embroidery',
  },
  {
    no: 65831,
    date: '05-05-2022',
    fpCost:'$500',
    printerCost: '$50',
    description: 'Color Bleeding.',
  },
  {
    no: 64955,
    date: '05-05-2022',
    fpCost:'$0',
    printerCost: '$975.00',
    description: 'Printer Oversight',
  },
  {
    no: 67689,
    date: '05-05-2022',
    fpCost:'$0',
    printerCost: '$900',
    description: 'Quality of Print',
  },
  {
    no: 65186,
    date: '05-05-2022',
    fpCost:'$0',
    printerCost: '$191.50',
    description: 'Printer Oversight',
  },
  {
    no: 66552,
    date: '05-04-2022',
    fpCost:'$100.00',
    printerCost: '$0',
    description: 'Damaged garment',
  },
  {
    no: 66965,
    date: '08-07-2022',
    fpCost:'$922.00',
    printerCost: '$0',
    description: 'UPS Error',
  },
];

  doughNutData :any = {
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

  ngOnInit(): void {

    this.configuration = { ...DefaultConfig };
    this.configuration.resizeColumn = false;
    this.configuration.fixedColumnWidth = false;
    this.configuration.selectRow = true;

    this.columns = [
      { key: 'no', title: 'Order Number' },
      { key: 'date', title: 'Issue Noted Date' },      
      { key: 'fpCost', title: 'COR by FP' },
      { key: 'printerCost', title: 'COR by Printer' },
      { key: 'description', title: 'Description' },
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
            label: 'Income',
            data: [12000, 10000, 15000, 20000, 25000, 9000, 21000, 8000, 11000, 24000, 18000, 12000],
            backgroundColor: '#85FF5F',
            fill: true,
          },
           
          {
            type: 'bar',
            label: 'Expenses',
            data: [7000, 8000, 19000, 10000, 11000, 13000, 24000, 16000, 16000, 18000, 14000, 10000].reverse(),
            backgroundColor: '#FF8383',
            fill: true,
            
          }
        ]
      }
    });

    this.doughtNutChart = new Chart('doughnut-weekly', {
      type: 'doughnut',
      data: this.doughNutData,
      // options: options
  });

  this.doughtNutChart = new Chart('doughnut-monthly', {
    type: 'doughnut',
    data: this.doughNutData,
    // options: options
   });

   this.doughtNutChart = new Chart('doughnut-yearly', {
    type: 'doughnut',
    data: this.doughNutData,
    // options: options
   });
   
   this.doughtNutChart = new Chart('doughnut-overall', {
    type: 'doughnut',
    data: this.doughNutData,
    // options: options
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

 

 }
