import { Component } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria';
import { Message } from "primeng/primeng";



@Component({
    selector: 'categoria',
    templateUrl: '../views/cartegoria.component.html',
    providers: [CategoriaService]
})
export class CategoriaComponent {
    public titulo: string;
    public categorias: Array<Categoria>;
    public categoria: Categoria;
    msgs: Message[] = [];

    constructor(
        private _categoriaServicios: CategoriaService
    ) {
        this.titulo = 'Categorias';

    }

    ngOnInit() {
        this.categorias = this._categoriaServicios.getCategorias();
    }

    show() {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    clear() {
        this.msgs = [];
    }
}