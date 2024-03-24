import { Food } from "./Food";

export interface CartFood extends Food{
    quantity: number;
}