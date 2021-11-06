import { Pagamento } from './pagamento.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  formData: Pagamento= new Pagamento();
  readonly baseURL = 'http://localhost:40579/api/Pagamento';
  list : Pagamento[] | undefined;

  constructor(private http: HttpClient) { }

  postPagamento() {
    return this.http.post(this.baseURL, this.formData);
  }
  putPagamento() {
    return this.http.put(`${this.baseURL}/${this.formData.PagamentoId}`, this.formData);
  }

  deletePagamento(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Pagamento[]);
  }
}







