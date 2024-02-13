var food = {
  kind: "MILK",
  type: "cow's",
  weigh: 1,
  getInfo: function()
   { console.log("food: " + this.kind + "\n" + "type: " + this.type + "\n" + "weigh: " + this.weigh);
    if (this.price) 
    {
      console.log("price: " + this.price);
    }
   }
};
food.getInfo(); 
food.price = "5$"; 
food.getInfo(); 