var food = {
  kind: "MILK",
  type: "cow's",
  weigh: 1,
  getInfo: function() {
   // console.log("food: " + this.kind + "\n" + "type: " + this.type + "\n" + "weigh: " + this.weigh);
    for (var key in this) {
      if (key !== 'getInfo') 
      {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
};

food.getInfo(); 
food.price = "5$"; 
food.getInfo();  
food.name = '1.5';
food.getInfo();