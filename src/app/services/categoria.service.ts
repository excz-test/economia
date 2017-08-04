import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//Mock
import { MockCategoria } from '../mocks/MockCategoria';

@Injectable()
export class CategoriaService{
    public mockCategoria;
    
    constructor(){
        this.mockCategoria=new MockCategoria();
    }

    getCategorias(){
        console.log("Categora.services ------>");
        return this.mockCategoria.crearCategorias();//.map(res =>res.json());
    }
}