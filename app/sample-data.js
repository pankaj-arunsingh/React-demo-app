module.exports = {
  "humans": {
    "Pankaj Singh" : {
      "conversations": [
        {
          "who": "bot",
          "text": "Hello, can I take your order?",
          "time": new Date(2016, 4, 5, 15, 10, 0, 0)
        },
        {
          "who": "human",
          "text": "Can I have a small meat-lovers cheese pizza?",
          "time": new Date(2016, 4, 5, 15, 10, 30, 0)
        }, 
        {
          "who": "bot",
          "text": "Where would you like it delivered?",
          "time": new Date(2016, 4, 5, 15, 11, 0, 0)
        },
        {
          "who": "human",
          "text": "4-16 Montgomery Street, Kogarah",
          "time": new Date(2016, 4, 5, 15, 11, 30, 0)
        },
      ],
      "orders": [
        {
          "time": new Date(2016, 4, 5, 15, 11, 45, 0),
          "pizzas": [{
            "toppings": ["Meat-Lovers","Mushroom","onions","capsicum"],
            "size": "S"
          }],
          "price": 15,
          "address": "42 President Avenue, Kogarah Sydney",
          "status": "Confirmed" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    },
    "Dhirendra Singh" : {
      "conversations": [
        {
          "who": "bot",
          "text": "Hello, can I take your order?",
          "time": new Date(2016, 4, 4, 20, 30, 0, 0)
        },
        {
          "who": "human",
          "text": "I would like to order an extra-large cheese pizza",
          "time": new Date(2016, 4, 4, 20, 30, 15, 0)
        }, 
        {
          "who": "bot",
          "text": "Where would you like it delivered?",
          "time": new Date(2016, 4, 4, 20, 30, 30, 0)
        },
        {
          "who": "human",
          "text": "4-16 Montgomery Street, Kogarah",
          "time": new Date(2016, 4, 4, 20, 30, 45, 0)
        },
      ],
      "orders": [
        {
          "time": new Date(2016, 4, 4, 20, 31, 0, 0),
          "pizzas": [{
            "toppings": ["Vegoroma"],
            "size": "XL"
          }],
          "price": 15,
          "address": "4-16 Montgomery Street, Kogarah",
          "status": "Delivered" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    }
  }
};
