import { Raca } from './raca.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  formData: Raca= new Raca();
  readonly baseURL = 'http://localhost:40579/api/Raca';
  list : Raca[] | undefined;

  constructor(private http: HttpClient) { }

  postRaca() {
    return this.http.post(this.baseURL, this.formData);
  }
  putRaca() {
    return this.http.put(`${this.baseURL}/${this.formData.RacaId}`, this.formData);
  }

  deleteRaca(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Raca[]);
  }
}







