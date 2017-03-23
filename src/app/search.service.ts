import { Injectable }    from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

let totalResults = 0;

@Injectable()
export class SearchService {

  constructor(private _http:Http) { }

  public getItems(from:number=0) {

    let getItems = 'https://search-fittery-challenge-pv7vc3ugoko5hngpgxdh4szuqm.us-east-1.es.amazonaws.com/items/_search?q=is_live:true&_source_include=id,item_price,item_name,image&size=12&from=' + from;

    return this._http.get(getItems)
      .map(res => {
        totalResults = res.json().hits.total;
        return res.json().hits.hits;
      })
  }

  public getItemById(id:number): any {

    let getItemsByIdURL = 'https://search-fittery-challenge-pv7vc3ugoko5hngpgxdh4szuqm.us-east-1.es.amazonaws.com/items/_search?q=id:' + id;

    return this._http.get(getItemsByIdURL)
      .map(res => res.json().hits.hits);
  }

  public getTotalResults() {
    return totalResults;
  }

}
