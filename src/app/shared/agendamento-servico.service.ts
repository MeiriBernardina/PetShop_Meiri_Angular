import { AgendamentoServico } from './agendamento-servico.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoServicoService {

  formData: AgendamentoServico= new AgendamentoServico();
  readonly baseURL = 'http://localhost:40579/api/AgendamentoServico';
  list : AgendamentoServico[] | undefined;

  constructor(private http: HttpClient) { }

  postAgendamentoServico() {
    return this.http.post(this.baseURL, this.formData);
  }
  putAgendamentoServico() {
    return this.http.put(`${this.baseURL}/${this.formData.Agendamento_servicoId}`, this.formData);
  }

  deleteAgendamentoServico(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as AgendamentoServico[]);
  }
}







