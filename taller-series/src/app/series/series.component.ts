import { ChangeDetectorRef, Component } from '@angular/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  series!: Serie[];
  seriesavg = 0;


  constructor(private seriesService : SeriesService, private cdr: ChangeDetectorRef){

  }

  ngDoCheck() {
    if (this.seriesavg !== 6) {
      this.cdr.detectChanges();
      this.someMethod();
    }
  }
  someMethod() {
    // Changing the value of myVariable
    for (let index = 0; index < this.series.length; index++) {
      this.seriesavg += this.series[index].seasons;
    }

    this.seriesavg = this.seriesavg / this.series.length;
  }

  ngOnInit(): void {



    this.seriesService.getSeries().subscribe(
      series => this.series = series
    );



  }


}
