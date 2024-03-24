import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { CartFood } from '../../model/CartFood';
import { log } from 'console';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList !: CartFood[]
  cartAmt !: number 
  constructor(private foodService: FoodService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.cartList = this.foodService.getAllFoodList();

    // this.cartAmt = this.foodService.calculateTotalAmount(this.cartList);
    console.log(this.cartList);
    
    // this.gstAmt = 0.12 *  this.cartAmt;
  }


}
