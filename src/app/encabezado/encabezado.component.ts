import { Component, OnInit } from '@angular/core';
import { Libro } from '../common/types';

import { SelectedBooksService } from '../selected-books.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  mostrarLista: boolean = false;

  constructor(public librosSeleccionados: SelectedBooksService) {}

  ngOnInit() {}
}
