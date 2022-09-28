import { headerComponent } from './../header/header.component';
export class Ingredient{
    public name:string;
    public amount:number;
    public price:number

    constructor(name:string,amount:number,price:number){
        this.name=name;
        this.amount=amount;
        this.price=price;
    }
}

export class home{
    name:string;
    amount:number;

    constructor(name:string,amount:number){
        this.name=name;
        this.amount=amount
    }
}