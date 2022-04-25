import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationserviceService {
  // readonly API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  addReclamation(Reclamation: any, user1_Id: any , user2_id: any){
    return this.httpClient.post('${this.API_URL}/AddReclamation/'+user1_Id+'/'+user2_id, Reclamation)
  }
  updateReclamation(Reclamation: any){
    return this.httpClient.put('${this.API_URL}/UpdateReclamation', Reclamation)
  }
  deleteReclamation(Reclamation: any){
    return this.httpClient.delete('${this.API_URL}DeleteRec/{idr}')
  }
  ShowAllReclamation(Reclamation: any){
    return this.httpClient.get("localhost:8083/ShowAllRecl")
  }
}
