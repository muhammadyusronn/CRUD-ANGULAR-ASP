import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaksi } from '../models/transaksi.model';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {
  baseApiURL:string = "https://localhost:7152"


  constructor(private http: HttpClient) { }
  getAllTransaksi():Observable<Transaksi[]>{
    return this.http.get<Transaksi[]>(this.baseApiURL+'/api/transaksi')
  }
  addUser(addTrxReq:Transaksi):Observable<Transaksi>{
    addTrxReq.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Transaksi>(this.baseApiURL+'/api/transaksi', addTrxReq)
  }
  getTransaksiByID(id:string):Observable<Transaksi>{
    return this.http.get<Transaksi>(this.baseApiURL+'/api/transaksi/'+id)
  }
  updateTransaksi(id:string, req:Transaksi):Observable<Transaksi>{
    return this.http.put<Transaksi>(this.baseApiURL+'/api/transaksi/'+id, req)
  }
  deleteTransaksi(id:string):Observable<Transaksi>{
    return this.http.delete<Transaksi>(this.baseApiURL+'/api/transaksi/'+id)
  }
}
