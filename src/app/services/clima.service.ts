import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';

  key = 'bb3bd1023f471eba03a73e03b590bbd1';

  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);
  }
}
