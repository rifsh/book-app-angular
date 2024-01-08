export class ProductModel {
    id:number;
    image:string;
    title:string;
    author:string;
    type:string;
    dessc:string;
    price:number;
    quandity?:number = 1;
}

export class ResponseProduct {
    totalProducts: number;
    datas;
}