import { Component, OnDestroy, OnInit, } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FlotChartDirective } from '../../components/charts/flotChart';

declare var jQuery:any;

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.template.html'
})

export class DashboardComponent implements OnDestroy, OnInit {

  public nav:any;
  public todos: any;
  mainData;
  income;
  orders;
  visits;
  userActivity;
  ordersTable;
  infos= [];

  projects: FirebaseListObservable<any[]>;
  public constructor(public db: AngularFireDatabase) {
    this.nav = document.querySelector('nav.navbar');
    this.todos = [
      {name: "Buy a milk", completed: true},
      {name: "Go to shop and find some products.", completed: false},
      {name: "Send documents to Mike ", completed: false, time: 1},
      {name: "Go to the doctor dr Smith", completed: false},
      {name: "Plan vacation", completed: true},
      {name: "Create new stuff", completed: false},
      {name: "Call to Anna for dinner", completed: false},
    ];

    this.projects = db.list('/projects');
    this.mainData = db.object('/mainData').subscribe(client => {

      this.orders = client.orders;
      this.income = client.income;
      this.visits = client.visits;
      this.userActivity = client.userActivity;

    });
    console.log(this.orders,55);

    this.ordersTable = db.list('/orders').subscribe(snapshots => {


      snapshots.forEach(snapshot => {
        let day = [];
        let split = snapshot.date.split(',');
        day.push(snapshot.date, 500);
        this.infos.push([this.gd(+split[0], +split[1], +split[2]), snapshot.orderSum]);
        console.log(snapshot.date,32);
        console.log(day,33);
        console.log(this.infos,34);
      });

      setTimeout(()=>{
        this.flotDataset = [
          {
            label: "Number of orders",
            data: this.infos,
            color: "#1ab394",
            bars: {
              show: true,
              align: "center",
              barWidth: 24 * 60 * 60 * 600,
              lineWidth: 0
            }

          }
        ];
      },3000)



    });

  }

  public ngOnInit():any {
    this.nav.className += " white-bg";
  }


  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
  }

  // Flot chart data and options

  private gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
  }

  private data1 = [
    [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
    [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
    [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
    [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
    [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
    [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
    [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
    [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
  ];

  private data2 = this.infos;


  public flotDataset:any ;

  public flotOptions:any =
  {
    xaxis: {
      mode: "time",
      tickSize: [30, "day"],
      tickLength: 0,
      axisLabel: "Date",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: 'Arial',
      axisLabelPadding: 10,
      color: "#d5d5d5"
    },
    yaxes: [{
      position: "left",
      max: 1070,
      color: "#d5d5d5",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: 'Arial',
      axisLabelPadding: 3
    }, {
      position: "right",
      clolor: "#d5d5d5",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: ' Arial',
      axisLabelPadding: 67
    }
    ],
    legend: {
      noColumns: 1,
      labelBoxBorderColor: "#000000",
      position: "nw"
    },
    grid: {
      hoverable: false,
      borderWidth: 0
    }
  };

  // jVector Map options

  public mapOptions:any = {
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 0.9,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 0
      }
    },
    series: {
      regions: [{
        values: {
          "US": 298,
          "SA": 200,
          "DE": 220,
          "FR": 540,
          "CN": 120,
          "AU": 760,
          "BR": 550,
          "IN": 200,
          "GB": 120
        },
        scale: ["#1ab394", "#22d6b1"],
        normalizeFunction: 'polynomial'
      }]
    },
  }

  monthSort() {
    console.log("Sort month");
  this.flotOptions =
    {
      xaxis: {
        mode: "time",
        tickSize: [30, "day"],
        tickLength: 0,
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 10,
        color: "#d5d5d5"
      },
      yaxes: [{
        position: "left",
        max: 1070,
        color: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 3
      }, {
        position: "right",
        clolor: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: ' Arial',
        axisLabelPadding: 67
      }
      ],
      legend: {
        noColumns: 1,
        labelBoxBorderColor: "#000000",
        position: "nw"
      },
      grid: {
        hoverable: false,
        borderWidth: 0
      }
    };
    //this.ordersTable.subscribe(snapshots => {
    //
    //
    //  snapshots.forEach(snapshot => {
    //    let day = [];
    //    let split = snapshot.date.split(',');
    //    day.push(snapshot.date, 500);
    //    this.infos.push([this.gd(+split[0], +split[1], +split[2]), snapshot.orderSum]);
    //    console.log(snapshot.date,32);
    //    console.log(day,33);
    //    console.log(this.infos,34);
    //  });
    //
    //  setTimeout(()=>{
    //    this.flotDataset = [
    //      {
    //        label: "Number of orders",
    //        data: this.infos,
    //        color: "#1ab394",
    //        bars: {
    //          show: true,
    //          align: "center",
    //          barWidth: 24 * 60 * 60 * 600,
    //          lineWidth: 0
    //        }
    //
    //      }
    //    ];
    //  },5000)
    //
    //
    //
    //});
  }

  yearsSort() {
    console.log("Sort month");
    this.flotOptions =
    {
      xaxis: {
        mode: "time",
        tickSize: [365, "day"],
        tickLength: 0,
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 10,
        color: "#d5d5d5"
      },
      yaxes: [{
        position: "left",
        max: 1070,
        color: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 3
      }, {
        position: "right",
        clolor: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: ' Arial',
        axisLabelPadding: 67
      }
      ],
      legend: {
        noColumns: 1,
        labelBoxBorderColor: "#000000",
        position: "nw"
      },
      grid: {
        hoverable: false,
        borderWidth: 0
      }
    };
  }

  daySort() {
    console.log("Sort month");
    this.flotOptions =
    {
      xaxis: {
        mode: "time",
        tickSize: [3, "day"],
        tickLength: 0,
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 10,
        color: "#d5d5d5"
      },
      yaxes: [{
        position: "left",
        max: 1070,
        color: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 3
      }, {
        position: "right",
        clolor: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: ' Arial',
        axisLabelPadding: 67
      }
      ],
      legend: {
        noColumns: 1,
        labelBoxBorderColor: "#000000",
        position: "nw"
      },
      grid: {
        hoverable: false,
        borderWidth: 0
      }
    };
  }

}
