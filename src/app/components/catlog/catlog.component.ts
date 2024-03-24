import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../model/Food';
import { CartFood } from '../../model/CartFood';

@Component({
  selector: 'app-catlog',
  standalone: true,
  imports: [],
  templateUrl: './catlog.component.html',
  styleUrl: './catlog.component.scss',
})
export class CatlogComponent {
  constructor(private foodService: FoodService) {}
  foodlist!: CartFood[];
  // foodList !: CartFood[];

  ngOnInit(): void {
    this.foodlist = this.foodService.getAllFoodList();
  }

  addFoodCount(index:number,wantMore:boolean){
    
  }

  // addFoodCount(index: number) {
  //   this.foodlist[index].quantity += 1;
  //   this.foodService.addFoodToCart(this.foodlist[index])
  // }

  // removeFoodCount(index: number) {
  //   this.foodlist[index].quantity = Math.max(
  //     0,
  //     Math.min(this.foodlist[index].quantity) - 1
  //   );
  //   this.foodService.addFoodToCart(this.foodlist[index])
  // }
}
