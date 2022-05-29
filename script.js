const menu = {
    _meal: ' ',
    _price: 0,
  
    set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
      }
    },
  
    set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for $${this._price}!`
        } else {
          return 'Meal or price was not set correctly!'
        };
    },  
  
  };
  
  menu.meal = 'Beef burger';
  menu.price = 12;
  
  console.log(menu.todaysSpecial);
  
  // ['Beef burger', 'Spaghetti Bolognese', 'Pad Thai with chicken or tofu', 'Swedish meatballs', 'Pizza Quatro formaggio', 'Fisn and chips', 'Tomato soup', 'Pasta carbonara', 'Pho Bo soup'];
  
  