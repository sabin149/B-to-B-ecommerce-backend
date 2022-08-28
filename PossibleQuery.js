// Query 1
// Orders made by a business
db.Business.aggregate([
    {"$match": {"name": "business3" }},
    {
        $lookup:{
            from:"OrderDetails",
            localField:"_id",
            foreignField:"Business_id",
            as:"Order"
            }
        },
         {
            $project:{
                "name":1,
                "Order":1,
                }
            }
    ]);
        
    // Query 2
    // Orders made on a date by business
    //         from specific location
    db.OrderDetails.aggregate([
    {$match: {OrderDate: "2021-01-01"}},
    {
        $lookup:{
            from:"Business",
            localField:"Business_id",
            foreignField:"_id",
            as:"Business"
            }
        },
    {
        $unwind:"$Business"
        },
         { $match: {"Business.address.country":"India"} },
    {
            $project:{
                "_id":0,
                "Items":1,
                "OrderDate":1,
                "OrderStatus":1,
                "Business.address.country":1,
                }
            }
    ]);
         
    // Query 3
    // Payment done by card and order gets cancelled
    db.Payment.aggregate([
      { $match: {paymentType: "card" } },
    {
        $lookup:{
            from:"OrderDetails",
            localField:"Order_id",
            foreignField:"_id",
            as:"Order"
            }
        },
    {
        $unwind:"$Order"
        },
          { $match: {"Order.OrderStatus":"Cancelled"}},    
    ]);
       
    // Query 4 
    // List of business who have bought same product
    db.Product.aggregate([{
        $lookup:{
            from:"OrderDetails",
            localField:"sku",
            foreignField:"Items.sku",
            as:"Products"
            }},
        {$unwind:"$Products"},
        {$match:{sku:"10001"}},
        {
        $lookup:{
            from:"Business",
            localField:"Products.Business_id",
            foreignField:"_id",
            as:"Business"
            }
        },
        {$unwind:"$Business"},
        {
            $project:{
                "_id":0,
                "Name":1,
                "Products.OrderDate":1,
                "Products.Items.Quantity":1,
                "Business.name":1,
                }
            }
    ]);
        
    // Query 5
    // Map Reduce to find which business
    //     have made how much sell amount.
    var mapFunction = function(){
        emit(this.Receiver_Business_id, this.amount);
        }
        
    var reduceFunction = function(Receiver_Business_id, amount){
        return Array.sum(amount);
        }
        
    db.Payment.mapReduce(
        mapFunction,
        reduceFunction,
    {
        out: "total_sale_per_business"
    }
    );
    
    db.total_sale_per_business.aggregate([
    {
        $lookup:{
            from:"Business",
            localField:"_id",
            foreignField:"_id",
            as:"Business"
            }
        }
    ]);