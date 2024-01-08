import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JenisTransaksi } from 'src/app/models/jenistransaksi.model';
import { Transaksi } from 'src/app/models/transaksi.model';
import { JenisTransaksiService } from 'src/app/services/jenis-transaksi.service';
import { TransaksiService } from 'src/app/services/transaksi.service';

@Component({
  selector: 'app-add-transaksi',
  templateUrl: './add-transaksi.component.html',
  styleUrls: ['./add-transaksi.component.css']
})
export class AddTransaksiComponent implements OnInit {
  addTrxReq:Transaksi={
    id:'',
    tanggal_transaksi:'',
    kode_transaksi:'',
    nominal_transaksi:0,
    created_by:'',
    update_by: '',
    tipe_transaksi:'',
    nama_transaksi:'',
    nama:''
  }
  jenis_transaksi : JenisTransaksi[] = [];

  constructor(private trxService:TransaksiService, private jtService:JenisTransaksiService, private router:Router){}

  ngOnInit(): void {
    this.getJenisTransaksiList()
  }

  addTransaksi(){
    this.trxService.addUser(this.addTrxReq).subscribe({
      next:(response)=>{
        this.router.navigate(['transaksi'])
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }
  getJenisTransaksiList(){
    this.jtService.getAllJenisTransaksi().subscribe({
      next:(jenis_transaksi)=>{
        this.jenis_transaksi = jenis_transaksi;
      }
    })
  }

}
