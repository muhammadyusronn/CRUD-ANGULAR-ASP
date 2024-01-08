import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JenisTransaksi } from 'src/app/models/jenistransaksi.model';
import { Transaksi } from 'src/app/models/transaksi.model';
import { JenisTransaksiService } from 'src/app/services/jenis-transaksi.service';
import { TransaksiService } from 'src/app/services/transaksi.service';
@Component({
  selector: 'app-edit-transaksi',
  templateUrl: './edit-transaksi.component.html',
  styleUrls: ['./edit-transaksi.component.css']
})
export class EditTransaksiComponent implements OnInit {
  addTrxReq:Transaksi={
    id:'',
    tanggal_transaksi:'',
    kode_transaksi:'',
    nominal_transaksi:0,
    created_by:'muhammadyusron',
    update_by:'muhammadyusron',
    tipe_transaksi:'',
    nama_transaksi:'',
    nama:''
  }
  jenis_transaksi : JenisTransaksi[] = [];
  constructor(private route:ActivatedRoute, private TrxService:TransaksiService, private jtService:JenisTransaksiService, private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id')
        if(id){
          this.TrxService.getTransaksiByID(id).subscribe({
            next:(response)=>{
              this.addTrxReq = response
              this.addTrxReq.created_by='muhammadyusron'
              this.addTrxReq.update_by='muhammadyusron'
            }
          })
        }
      }
    })
    this.getJenisTransaksiList()
  }
  getJenisTransaksiList(){
    this.jtService.getAllJenisTransaksi().subscribe({
      next:(jenis_transaksi)=>{
        this.jenis_transaksi = jenis_transaksi;
      }
    })
  }
  updateTransaksi(){
    this.TrxService.updateTransaksi(this.addTrxReq.id, this.addTrxReq).subscribe({
      next:(response)=>{
        this.router.navigate(['transaksi'])
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }

}
