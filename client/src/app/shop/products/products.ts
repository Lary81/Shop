

export class Product {

  id: number
  productName: string
  quantity: number
  properities: string


  constructor(json) {
    this.id = json['id']
    this.productName = json['productName']
    this.quantity = json['quantity']
    this.properities = json['properities']
  }}


