import { Injectable } from '@angular/core';
import { Food } from '../model/Food';
import { CartFood } from '../model/CartFood';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foodlist: CartFood[] = [
    { name: 'dosa', price: 80, quantity: 0 },
    { name: 'poori', price: 15, quantity: 0 },
  ];

  catlogList: Food[] = [
    { name: 'dosa', price: 80},
    { name: 'poori', price: 15},
  ];

  constructor() {}

  getAllCatlogueList():Food[] {
    return this.catlogList;
  }

  getAllFoodList(): CartFood[] {
    return this.foodlist;
  }

  addFoodToCart(cartFood: CartFood) {
    const isCartHasFood = this.foodlist.filter(
      (item) => item.name === cartFood.name
    );

    if (isCartHasFood.length > 0) {
      this.foodlist
        .filter((item) => item.name === cartFood.name)
        .map((item) => {
          item.quantity = cartFood.quantity;
        });
    } else {
      this.foodlist.push(cartFood);
    }
  }

  calculateTotalAmount(foodItems: CartFood[]): number {
    return foodItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
