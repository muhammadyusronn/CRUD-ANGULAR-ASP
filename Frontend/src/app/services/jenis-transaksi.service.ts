import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JenisTransaksi } from '../models/jenistransaksi.model';

@Injectable({
  providedIn: 'root'
})
export class JenisTransaksiService {

  baseApiURL : string = "https://localhost:7152"

  constructor(private http: HttpClient) { }

  getAllJenisTransaksi(): Observable<JenisTransaksi[]>{
    return this.http.get<JenisTransaksi[]>(this.baseApiURL+'/api/jenistransaksi')
  }
  addJenisTransaksi(addJsReq:JenisTransaksi): Observable<JenisTransaksi>{
    addJsReq.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<JenisTransaksi>(this.baseApiURL+'/api/jenistransaksi', addJsReq)
  }
  getJenisTransaksiByID(id:string): Observable<JenisTransaksi>{
    return this.http.get<JenisTransaksi>(this.baseApiURL+'/api/jenistransaksi/'+id)
  }
  updateJenisTransaksi(id:string, req:JenisTransaksi):Observable<JenisTransaksi>{
    return this.http.put<JenisTransaksi>(this.baseApiURL+'/api/jenistransaksi/'+id, req);
  }
  deleteJenisTransaksi(id:string):Observable<JenisTransaksi>{
    return this.http.delete<JenisTransaksi>(this.baseApiURL+'/api/jenistransaksi/'+id);
  }
}
