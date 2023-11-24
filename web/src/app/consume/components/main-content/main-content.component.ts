import { Component} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  searchQuery: string = '';
  searchResults: string[] = [];

  constructor(private searchService: SearchService) {}

  search(): void {
    this.searchService.search(this.searchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }
}
