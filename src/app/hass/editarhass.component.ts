import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hass } from '../model/hass';
import { HassservicioService } from '../service/hassservicio.service';

@Component({
  selector: 'app-editarhass',
  templateUrl: './editarhass.component.html',
  styleUrls: ['./editarhass.component.css']
})
export class EditarhassComponent implements OnInit {
  hass : Hass = null;

  constructor(private Hass: HassservicioService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Hass.detail(id).subscribe(
      data => {
        this.hass = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Hass.update(id, this.hass).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
}
