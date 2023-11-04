import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Class} from "../../model/class.entity";
import {MatTableDataSource} from "@angular/material/table";
import {ClassesService} from "../../services/classes.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {

  classData: Class;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'studentCode', 'teacherCode', 'dateTime', 'subject'];

  constructor(private classesService: ClassesService) {
    this.classData = {} as Class;
    this.dataSource = new MatTableDataSource<any>();
  }

  private getAllClasses() {
    this.classesService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.getAllClasses();
  }


}
