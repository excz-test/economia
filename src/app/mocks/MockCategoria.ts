import { Categoria } from '../models/categoria'
export class MockCategoria{
    //public categoria:Categoria;
    public categorias:Array<Categoria>;
    constructor(){
        //this.crearCategorias();
    }

    ngOnInit(){
        console.log('Ingresando a Mock de categorias');
    }

    /**
     * I: Ingreso
     * E: Egreso
     */
    crearCategorias(){ 
       return this.categorias=[
            new Categoria(1,"I","Inversiones","#099999","flecha_informes","ACT"),
            new Categoria(1,"I","Otros","#099999","...","ACT"),
            new Categoria(1,"I","Premios","#099999","estrella","ACT"),
            new Categoria(1,"I","Regalos","#099999","regalo","ACT"),
            new Categoria(1,"I","Salario","#099999","billete","ACT"),
            new Categoria(1,"I","Interés Bancario","#099999","porcentaje","ACT"),
            new Categoria(1,"I","Arriendos","#099999","casa","ACT"),
            new Categoria(1,"I","Servicios Porfesionales","#099999","muceta","ACT"),
            new Categoria(1,"E","Alimentación","#000000","comida","ACT"),
            new Categoria(1,"E","Educación","#000000","muceta","ACT"),
            new Categoria(1,"E","Recreación","#000000","sombrilla_playa","ACT"),
            new Categoria(1,"E","Ropa","#000000","camiseta","ACT"),
            new Categoria(1,"E","Salud","#000000","corazon_signo_vital","ACT"),
            new Categoria(1,"E","Transporte","#000000","comida","ACT"),
            new Categoria(1,"E","Vivienda","#000000","casa","ACT"),
            new Categoria(1,"E","Gastos Personales","#000000","yo","ACT"),
            new Categoria(1,"E","Tarjeta de crédito","#000000","tarjeta","ACT"),
        ];
    }
}