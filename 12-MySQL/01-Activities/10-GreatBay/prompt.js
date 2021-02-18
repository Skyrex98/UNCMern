'use strict';

const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "test",
  database: "greatBay_DB"
});

//connecting to the mysql
connection.connect(function(err) {
  if (err) throw err;
});

//function if they choose to bid. it will ask you what ID do you what to bid on and how much you want to bid. it will rerun if the ID is wrong or bid is to low. then it will update the database with the newest bid
const biddingWar = function(){
  connection.query("SELECT * FROM auctions", function(err, res) {
    if(err) throw err;

    for (var i = 0; i < res.length; i++) {
      console.log("ID: " +res[i].id + " | " + "Item: " + res[i].item_name + " | " + "Current Bid: " + res[i].highest_bid);
      console.log("-----------------------------------");
    }

    inquirer.prompt([
      {
        type: "input"
        , name: "itemBid"
        , message: "What item do you you want to bid on? (insert ID)"
      }
      , {
        type: "input"
        , name: "bid"
        , message: "How much do you want to bid?"
      }

    ]).then(function(user){
      var existItem;

      existItem = false

      for (var i = 0; i < res.length; i++) {
        if(parseInt(res[i].id)===parseInt(user.itemBid)) {
          existItem = true;
        }
      }

      if(!existItem){
        console.log("**********************************************************");
        console.log("ID is incorrect. Please try again.");
        console.log("**********************************************************");
        biddingWar();
      } else if(res[user.itemBid-1].highest_bid>=user.bid){
        console.log("**********************************************************");
        console.log("Bid needs to be higher then current bid. Please try again.");
        console.log("**********************************************************");
        biddingWar();
      } else if (res[user.itemBid-1].highest_bid<user.bid) {
        connection.query("UPDATE auctions SET ? WHERE ?", [{
          highest_bid: parseFloat(user.bid)}, {id: user.itemBid}], function(err, res) {
            if(err) throw err;
            console.log("Congrats!! You are the highest bidder");
            connection.end();
        });
      }
    });
  });
};

//consturtor to input items into the DB
function ItemInfo (item, category, startingBid){
  if(!(this instanceof ItemInfo)){
    return new ItemInfo (item, category, startingBid);
  }
  this.item_name = item;
  this.category = category;
  this.starting_bid = startingBid;
  this.highest_bid = startingBid;
};

//function to post products to the database
const posting = function(){
  inquirer.prompt([
    {
      type: "input"
      , name: "item"
      , message: "What item do you want to post?"
    }
    , {
      type: "input"
      , name: "category"
      , message: "What category does your item belong in?"
    }
    , {
      type: "input"
      , name: "startingBid"
      , message: "How much do you want your starting bid to be?"
    }

  ]).then(function(user){
    var newItem = new ItemInfo(user.item, user.category, user.startingBid)

    connection.query("INSERT INTO auctions SET ?", newItem, function(err, res) {
      if(err) throw err;

      console.log("Congrats!! Your item have been posted.");
    });
    connection.end();
  });
};


inquirer.prompt([
  {
    type: "list",
    name: "whatToDo",
    message: "What do you want to do?",
    choices: ["POST AN ITEM", "BID ON AN ITEM"]
  }

]).then(function(user) {
  if(user.whatToDo==="BID ON AN ITEM"){
    biddingWar();
  } else if (user.whatToDo==="POST AN ITEM"){
    posting();
  }
});