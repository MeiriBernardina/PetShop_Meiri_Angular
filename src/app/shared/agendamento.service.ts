import { Agendamento } from './agendamento.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  formData: Agendamento= new Agendamento();
  readonly baseURL = 'http://localhost:40579/api/Agendamento';
  list : Agendamento[] | undefined;

  constructor(private http: HttpClient) { }

  postAgendamento() {
    return this.http.post(this.baseURL, this.formData);
  }
  putAgendamento() {
    return this.http.put(`${this.baseURL}/${this.formData.AgendamentoId}`, this.formData);
  }

  deleteAgendamento(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Agendamento[]);
  }
}







