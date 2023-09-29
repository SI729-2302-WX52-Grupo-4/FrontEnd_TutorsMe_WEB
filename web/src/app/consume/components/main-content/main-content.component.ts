import { Component, OnInit } from '@angular/core';
import { ConsumeApiService } from "../../services/consume-api.service";
import {Source} from "../../model/source.entity";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'description', 'url', 'category', 'language', 'country' ];
  dataSource: MatTableDataSource<any>;

  status: string = '';
  sources: Array<Source> = [];

  constructor(private consumeService: ConsumeApiService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  private getAllSources(): void {
    this.consumeService.getSources()
      .subscribe((data: any) => {
        this.status = data['status'];
        this.sources = data['sources'];
        console.log(this.status);
        this.dataSource.data = this.sources;
      });
  }

  ngOnInit(): void {
    this.getAllSources();
  }


}
