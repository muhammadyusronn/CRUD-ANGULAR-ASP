import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaksi } from 'src/app/models/transaksi.model';
import { TransaksiService } from 'src/app/services/transaksi.service';

@Component({
  selector: 'app-transaksi-list',
  templateUrl: './transaksi-list.component.html',
  styleUrls: ['./transaksi-list.component.css']
})
export class TransaksiListComponent implements OnInit{
  transaksi : Transaksi[] = [];
  constructor(private transaksiService:TransaksiService, private router:Router){}
  ngOnInit(): void {
    this.getAllTransaksi()
  }

  getAllTransaksi(){
    this.transaksiService.getAllTransaksi().subscribe({
      next:(transaksi)=>{
        this.transaksi = transaksi;
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }
  deleteTransaksi(id:string){
    this.transaksiService.deleteTransaksi(id).subscribe({
      next:(response)=>{
        this.getAllTransaksi()
        this.router.navigate(['transaksi'])
      }
    })
  }

}
