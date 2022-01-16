import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products: any
  constructor(private productService: ProductService) { }

  ngOnInit(){
    // this.products = this.productService.getProducts()

    const prodctsObservable = this.productService.getProducts()
    prodctsObservable.subscribe(
      (data) =>{console.log('次のデータが出力されました:' + data);},
      (err) =>{console.error('次のエラーが発生しました: ' + err); },
      () =>{console.log('完了');},
    )


    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.complete();
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 5000);
    // });

    // console.log('subscribe前');
    // observable.subscribe({
    //   next(data) { console.log('次のデータが出力されました:' + data); },
    //   error(err) { console.error('次のエラーが発生しました: ' + err); },
    //   complete() { console.log('完了'); }
    // });
    // console.log('subscribeを抜けました');


  }

}
