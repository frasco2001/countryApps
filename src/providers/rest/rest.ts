import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the Rest provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rest {

  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  private apiCountry = 'https://restcountries.eu/rest/v2/alpha/';
  private apiContinent = 'https://restcountries.eu/rest/v2/region/';
  private tetrisUrl = 'http://ginebra.ual.es/Tetris/Api/Jugador';

  private headers = new Headers();
  constructor(public http: Http) {}

  getJugadores(): Observable<string[]> {
    this.headers.set("Content-Type",'application/json');
    return this.http.get(this.tetrisUrl,{headers : this.headers})
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  
  getCountries(): Observable<string[]> {
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getCountriesByShortName(country: string){
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiCountry + country)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }, (err) =>{
            reject(err);
          }
        );
    });
    return promise;
  }
  getCountriesByContinents(continent: string): Observable<string[]> {
    return this.http.get(this.apiContinent + continent)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}