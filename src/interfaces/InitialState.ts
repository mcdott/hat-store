import { CartItems } from "./CartItems"

export interface InitialState {
  cartItems: CartItems[],
  totalAmount: number,
  totalQuantity: number
}
