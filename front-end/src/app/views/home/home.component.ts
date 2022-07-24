import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  cnpj: number;
  status: string;
  button: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Auto-Peças Joaquim LTDA.', cnpj: 36339339000164, status: 'Ativo', button: 'EDITAR'},
  {name: 'Auto-Peças Joaquim LTDA.', cnpj: 36339339000164, status: 'Inativo', button: 'EDITAR'},
  {name: 'Auto-Peças Joaquim LTDA.', cnpj: 36339339000164, status: 'Ativo', button: 'EDITAR'},
  {name: 'Auto-Peças Joaquim LTDA.', cnpj: 36339339000164, status: 'Inativo', button: 'EDITAR'},
  {name: 'Auto-Peças Joaquim LTDA.', cnpj: 36339339000164, status: 'Ativo', button: 'EDITAR'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cnpj', 'status', 'button'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
