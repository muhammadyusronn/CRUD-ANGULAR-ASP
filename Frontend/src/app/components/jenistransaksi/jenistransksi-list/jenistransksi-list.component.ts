import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JenisTransaksi } from 'src/app/models/jenistransaksi.model';
import { JenisTransaksiService } from 'src/app/services/jenis-transaksi.service';
@Component({
  selector: 'app-jenistransksi-list',
  templateUrl: './jenistransksi-list.component.html',
  styleUrls: ['./jenistransksi-list.component.css']
})
export class JenistransksiListComponent implements OnInit {
  jenis_transaksi : JenisTransaksi[] = [];
  constructor( private jtService: JenisTransaksiService, private router:Router) { }
  ngOnInit(): void {
    this.getAllJenisTransaksi()
  }
  getAllJenisTransaksi(){
    this.jtService.getAllJenisTransaksi().subscribe({
      next: (jenis_transaksi) => {
        this.jenis_transaksi = jenis_transaksi;
      },
      error: (response) =>{
        console.log(response)
      }
    });
  }
  deleteJenisTransaksi(id:string){
    this.jtService.deleteJenisTransaksi(id).subscribe({
      next:(response)=>{
        this.getAllJenisTransaksi()
        this.router.navigate(['jenistransaksi'])
      }
    })
  }

}
