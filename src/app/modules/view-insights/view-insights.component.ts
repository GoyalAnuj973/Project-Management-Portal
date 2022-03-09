import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view-insights',
  templateUrl: './view-insights.component.html',
  styleUrls: ['./view-insights.component.scss']
})
export class ViewInsightsComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  componentName!: string;
  selectedProjectID!: string;
  total!: number;
  percentage = [0.25, 0.25, 0.25, 0.25];
  insights = [
    { name: 'TO DO', class: 'todo', status: 0 },
    { name: 'DEVELOPMENT', class: 'development', status: 0 },
    { name: 'TESTING', class: 'testing', status: 0 },
    { name: 'COMPLETED', class: 'completed', status: 0 }
  ];

  ngOnInit(): void {
    this.selectedProjectID = this.activatedRoute.snapshot.params['id'];
    this.total = 0;
    this.apiService
      .getIsuueByProjectID(this.selectedProjectID)
      .subscribe((resp) => {
        for (let i of resp) {
          this.insights[parseInt(i.status) - 1].status += 1;
          this.total += 1;
        }
        for (let i = 0; i < this.insights.length; ++i) {
          this.percentage[i] = this.insights[i].status / this.total;
        }
      });
  }
}
