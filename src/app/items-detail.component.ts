import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { SearchService } from './search.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'items-detail-detail',
  templateUrl: 'items-detail.component.html',
  providers: [SearchService]
})
export class ItemsDetail implements OnInit {

  private items = [];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {

    this.route.params
      .map(params => params['id'])
      .subscribe( id => {
        this.searchService.getItemById(id)
          .subscribe( items => {
            this.items = items;
          })
      });

  }

}
