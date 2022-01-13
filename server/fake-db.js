const Product = require('./model/product')

class FakeDb {
    constructor(){
        this.products = [
            {
                coverImage: './assets/imag/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heding1: 'heding1-1',
                heding2: 'heding1-2',
                heding3: 'heding1-3',
                hedingtext1: 'テキスト１ー１',
                hedingtext2: 'テキスト１ー２',
                hedingtext3: 'テキスト１ー３',
              },
              {
                coverImage: './assets/imag/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heding1: 'heding2-1',
                heding2: 'heding2-2',
                heding3: 'heding2-3',
                hedingtext1: 'テキスト２ー１',
                hedingtext2: 'テキスト２ー２',
                hedingtext3: 'テキスト２ー３',  },
              {
                coverImage: './assets/imag/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heding1: 'heding3-1',
                heding2: 'heding3-2',
                heding3: 'heding3-3',
                hedingtext1: 'テキスト３ー１',
                hedingtext2: 'テキスト３ー２',
                hedingtext3: 'テキスト３ー３',  },
              {
                coverImage: './assets/imag/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heding1: 'heding4-1',
                heding2: 'heding4-2',
                heding3: 'heding4-3',
                hedingtext1: 'テキスト４ー１',
                hedingtext2: 'テキスト４ー２',
                hedingtext3: 'テキスト４ー３',  }
              
        ]

    }
    pushProductsToDb(){
       this.products.forEach(
           (product) => {
               const newProduct = new Product(product)
               newProduct.save()
           }
       ) 
    }
    seedDb(){
        this.pushProductsToDb()
    }
}
module.exports = FakeDb