import { Cliente } from './cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  formData: Cliente= new Cliente();
  readonly baseURL = 'http://localhost:40579/api/Cliente';
  list : Cliente[] | undefined;

  constructor(private http: HttpClient) { }

  postCliente() {
    return this.http.post(this.baseURL, this.formData);
  }
  putCliente() {
    return this.http.put(`${this.baseURL}/${this.formData.ClienteId}`, this.formData);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Cliente[]);
  }
}







