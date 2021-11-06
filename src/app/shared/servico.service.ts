import { Servico } from './servico.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  formData: Servico= new Servico();
  readonly baseURL = 'http://localhost:40579/api/Servico';
  list : Servico[] | undefined;

  constructor(private http: HttpClient) { }

  postServico() {
    return this.http.post(this.baseURL, this.formData);
  }
  putServico() {
    return this.http.put(`${this.baseURL}/${this.formData.ServicoId}`, this.formData);
  }

  deleteServico(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Servico[]);
  }
}







