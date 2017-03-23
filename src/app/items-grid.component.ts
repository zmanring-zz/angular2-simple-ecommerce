import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { OnInit } from '@angular/core';

import { SearchService } from './search.service';

// Component
@Component({
  moduleId: module.id,
  selector: 'items-grid',
  templateUrl: 'items-grid.component.html',
  styleUrls: [ 'items-grid.component.css' ],
  providers: [SearchService]
})
export class ItemsGrid implements OnInit {

  private items:void[] = [];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.params
      .map(params => params['page'])
      .subscribe( page => {
        this.searchService.getItems(page)
          .subscribe( items => {
            this.items = items;
          })
      });

  }

  gotoNextPage(): void {
    var params:any = this.route.params;
    var currentPageNum:number = parseInt(params.getValue().page);
    var totalItemCount = this.searchService.getTotalResults();

    if (currentPageNum+12 < totalItemCount) {
      this.router.navigate(['/items', currentPageNum+12]);
    } else {
      this.router.navigate(['/items', totalItemCount-12]);
    }
  }

  gotoPrevPage(): void {
    var params:any = this.route.params;
    var currentPageNum:number = parseInt(params.getValue().page);

    if (currentPageNum-12 >= 0) {
      this.router.navigate(['/items', currentPageNum-12]);
    } else {
      this.router.navigate(['/items', 0]);
    }
  }

}
