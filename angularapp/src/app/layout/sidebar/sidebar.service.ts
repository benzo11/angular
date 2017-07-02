import { SidebarLink } from './sidebar';
import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SidebarService {
    private API_URL = 'http://192.168.33.10/api/v1/sidebarLinks';
    constructor(private http: Http){ }

   /* getLinks(): Promise<SidebarLink[]> {
        var links: SidebarLink[] = [
            new SidebarLink('1',"dashboard","/dashboard","fa fa-fw fa-dashboard"),
            new SidebarLink('2','orders','/orders','fa fa-fw fa-bar-chart-o'),
            new SidebarLink('1','reservations','/reservations','fa fa-fw fa-table'),
            new SidebarLink('1','mycetering','/mycatering','fa fa-fw fa-table')
        ]
        return Promise.resolve(links);
    }*/


    getLinksApi(): Promise<SidebarLink[]> {
        return this.http.get(this.API_URL)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    addLinkApi(): Promise<SidebarLink[]>{
        var url  = "http://192.168.33.10/api/v1/sidebarLinks";
        console.log("asdasd");
        return this.http.post(url,"{id:'1'}",{headers: this.getHeaders()})
            .toPromise()
            .then(this.extractData)
            .then(this.handleError);
    }


    private getHeaders(){
        // I included these headers because otherwise FireFox
        // will request text/html
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        //headers.append('csrf_token,'CSRF_TOKEN');
        return headers;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

}
