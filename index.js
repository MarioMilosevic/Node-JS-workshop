import { PizzaShop } from "./pizza-shop.js";

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order ${size}, ${topping}`);
});

pizzaShop.order("large", "ketchup");
pizzaShop.displayOrderNumber();
