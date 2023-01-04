
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';


@Injectable({providedIn: 'any'})
export class searchService {
    constructor(private http: HttpClient) { }

    getRhc() {
        return this.http.get<any>('/assets/ritehite.json')
            .toPromise()
            .then(res => <data[]> res.data)
            .then(data => { return data; });
    }
}
