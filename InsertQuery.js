// Insertion Queries

// Businesses
db.Business.insertMany([{
    username: "business1",
    password: "business1",
    name: "business1",
    address: {
            country: "United States",
            street1: "99 Main Street",
            street2: "Walter Road",
            city: "New York",
            state: "New York",
            zip: "12345"},
    phone: "9876543210",
    email: "b2b@email.com",
    isVerified: true,
    isSeller: true
    },
    {username: "business2",
    password: "business2",
    name: "business2",
    address: {
            country: "Nepal",
            street1: "KMC",
            street2: "New Road",
            city: "Kathmandu",
            state: "Bagmati",
            zip: "44600"
            },
    phone: "9876543210",
    email: "b2b@email.com",
    isVerified: true,
    isSeller: true 
    },
    {username: "business3",
    password: "business3",
    name: "business3",
    address: {
            country: "India",
            street1: "Flimcity Road",
            city: "Mumbai",
            state: "Maharastra",
            zip: "12345"},
    phone: "9876543210",
    email: "b2b@email.com",
    isVerified: true,
    isSeller: false
    }]);
    
    // Warehouses
    db.Warehouse.insertMany([{
    Business_id: ObjectId("61531c4f31ca86e8b08b278f"),
    address: {
            country: "United States",
            street1: "99 Main Street",
            street2: "Walter Road",
            city: "New York",
            state: "New York",
            zip: "12345"},
    },
    {Business_id: ObjectId("61531c4f31ca86e8b08b278f"),
    address: {
            country: "Nepal",
            street1: "KMC",
            street2: "New Road",
            city: "Kathmandu",
            state: "Bagmati",
            zip: "44600"
            },
    }]);
    
    // Categories
    db.Category.insertMany([{
    CategoryName: "Clothes",
    Description: "Fashion Items",
    CategoryImage: "imagepath",
    },{
    CategoryName: "Kids",
    Description: "Kids Items",
    CategoryImage: "imagepath",
    },{
    CategoryName: "Electronics",
    Description: "Electronics Items",
    CategoryImage: "imagepath",
    }]);
    
    
    // Product 1
    db.Product.insert({
    sku:"10001",
    Name:"Jeans Pant",
    Category:"Clothes",
    price:27000,
    discount:null,
    Weight:0.1,
    business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    warehouse_id:ObjectId("6153217431ca86e8b08b2792"),
    ProductImage:"imagepath",
    Tag:["#Blue","#Fitting","#H&M"],
    features:{
        productdetails:'Best Quality',},
    StockDetails:{
        UnitonOrder:NumberInt(24),
        RemainingQty:NumberInt(9),}
    });
    
    // Product 2
    db.Product.insert({
    sku:"10002",
    Name:"Orient Fan",
    Category:"Electronics",
    price:4500,
    discount:null,
    Weight:0.35,
    business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    warehouse_id:ObjectId("6153217431ca86e8b08b2792"),
    ProductImage:"imagepath",
    Tag:["#fan","#electric","#fan"],
    features:{
        productdetails:'Best Quality',},
    StockDetails:{
        UnitonOrder:NumberInt(35),
        RemainingQty:NumberInt(23),}
    });
    
    // Product 3
    db.Product.insert({
    sku:"10003",
    Name:"Tshirt",
    Category:"Kids",
    price:650,
    discount:null,
    Weight:0.25,
    business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    warehouse_id:ObjectId("6153217431ca86e8b08b2792"),
    ProductImage:"imagepath",
    Tag:["#cotton","#printed","#best"],
    features:{
        productdetails:'Good Quality',},
    StockDetails:{
        UnitonOrder:NumberInt(25),
        RemainingQty:NumberInt(13),}
    });
    
    // Product 4
    db.Product.insert({
    sku:"10004",
    Name:"Pant",
    Category:"Kids",
    price:750,
    discount:null,
    Weight:0.35,
    business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    warehouse_id:ObjectId("6153217431ca86e8b08b2793"),
    ProductImage:"imagepath",
    Tag:["#Pant","#half","#full"],
    features:{
        productdetails:'Best Quality',},
    StockDetails:{
        UnitonOrder:NumberInt(35),
        RemainingQty:NumberInt(23),}
    });
    
    // Product 5
    db.Product.insert({
    sku:"10005",
    Name:"Mobile Cover",
    Category:"Electronics",
    price:4500,
    discount:null,
    Weight:0.35,
    business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    warehouse_id:ObjectId("6153217431ca86e8b08b2793"),
    ProductImage:"imagepath",
    Tag:["#iphone13","#pro","#leather"],
    features:{
        productdetails:'Best Quality',},
    StockDetails:{
        UnitonOrder:NumberInt(35),
        RemainingQty:NumberInt(23),}
    });
    
    // Search Products
    db.SearchProduct.insert({
    CustomerId:ObjectId("61531c4f31ca86e8b08b2791"),
    Keywords:["mobile","cover","shirt","mobile cover","iphone"]
    })
    
    // Wishlists
    db.Wishlist.insertMany([{
    ProductId:["10001","10004"],
    Business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    },{
    ProductId:["10004","10005"],
    Business_id:ObjectId("61531c4f31ca86e8b08b2790"),
    },{
    ProductId:["10002","10003","10004"],
    Business_id:ObjectId("61531c4f31ca86e8b08b2791"),
    }]);
    
    // Carts
    db.Cart.insert({
    Business_id:ObjectId("61531c4f31ca86e8b08b2791"),
    Products:[{
        ProductId:"10001",
        NoOfProducts:NumberInt(3),},
    {
        ProductId:"10005",
        NoOfProducts:NumberInt(4),}
    ]
    });
    
    // Order Details 1
    db.OrderDetails.insert({
    Business_id: ObjectId("61531c4f31ca86e8b08b2791"),
    Items:{
        Quantity:NumberInt(100),
        sku:"10001"
         },
        ShippingAddress:{    
            street1: "Wall Street",
            street2: "Wall Street Road",
            city: "New York",
            state: "New York",
            country: "United States",
            zip: "12345"
        },
    OrderDate:'2021-01-01',
    OrderStatus:"Completed"
    });
    
    // Order Details 2   
    db.OrderDetails.insert({
    Business_id: ObjectId("61531c4f31ca86e8b08b2791"),
    Items:{
        Quantity:NumberInt(2),
        sku:"10002"
        },
        ShippingAddress:{    
            street1: "49 grama",
            street2: "99 stat",
            city: "New York",
            state: "New York",
            country: "United States",
            zip: "12345"
        },
    OrderDate:'2021-02-02',
    OrderStatus:"Completed"
    });
    
    // Order Details 3 
    db.OrderDetails.insert({
    Business_id: ObjectId("61531c4f31ca86e8b08b2791"),
    Items:{
        Quantity:NumberInt(5),
        sku:"10005"
             },
        ShippingAddress:{    
            street1: "NH2",
            street2: "Sallaghari",
            city: "Bhaktapur",
            state: "Bagmati",
            country: "Nepal",
            zip: "4600"
        },
    OrderDate:'2021-03-03',
    OrderStatus:"Cancelled"
    });
    
    // Order Details 4
    db.OrderDetails.insert({
    Business_id: ObjectId("61531c4f31ca86e8b08b2790"),
    Items:[{
       Quantity:NumberInt(20),
       sku:"10004"
         },
         {
       Quantity:NumberInt(10),
       sku:"10005"
         },
         ],
        ShippingAddress:{    
            street1: "Lake Side",
            street2: "Zero KM",
            city: "Pokhara",
            state: "Gandaki",
            country: "Nepal",
            zip: "4700"
    },
    OrderDate:'2021-04-04',
    OrderStatus:"Shipped"
    });
    
    // Order Details 5
    db.OrderDetails.insert({
    Business_id: ObjectId("61531c4f31ca86e8b08b2790"),
    Items:[{
        Quantity:NumberInt(15),
        sku:"10001"
         },
         {
        Quantity:NumberInt(15),
        sku:"10003"
         },
    ],
        ShippingAddress:{    
            street1: "Baneshor",
            street2: "New Baneshor",
            city: "Kathmandu",
            state: "Bagmati",
            country: "Nepal",
            zip: "4600"
    },
    OrderDate:'2021-05-05',
    OrderStatus:"Canceled"
    });
    
    // Payment 1
    db.Payment.insert({
    Order_id:ObjectId("61533e5331ca86e8b08b27a6"),
    Receiver_Business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    amount: 40000,
    date: "2021-01-01",
    paymentType: "card",
    cardDetail: {
        brand: "Visa",
        cardNumber: "1456357896325698",
        expirationMonth: 6,
        expirationYear: 2025,
        cvv: 864
    },
    BillingAddress : {
            country : "Nepal",
            street1 : "KMC",
            street2 : "New Road",
            city : "Kathmandu",
            state : "Bagmati",
            zip : "44600"
        },
    });
    
    // Payment 2
    db.Payment.insert({
    Order_id:ObjectId("615343b931ca86e8b08b27a7"),
    Receiver_Business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    amount: 15000,
    date: "2021-02-02",
    paymentType: "paypal",
    paymentDetail: {
        id: "15987532147896",
        transaction_id: "AHY5FV47896",
    },
    BillingAddress : {
            country : "Nepal",
            street1 : "KMC",
            street2 : "New Road",
            city : "Kathmandu",
            state : "Bagmati",
            zip : "44600"
        },
    });
    
    // Payment 3
    db.Payment.insert({
    Order_id:ObjectId("615343da31ca86e8b08b27a8"),
    Receiver_Business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    amount: 18500,
    date: "2021-03-03",
    paymentType: "card",
    cardDetail: {
        brand: "mastercard",
        cardNumber: "65632147895123",
        expirationMonth: 3,
        expirationYear: 2031,
        cvv: 456
    },
    BillingAddress : {
            country : "Nepal",
            street1 : "KMC",
            street2 : "New Road",
            city : "Kathmandu",
            state : "Bagmati",
            zip : "44600"
        },
    });
    
    // Payment 4
    db.Payment.insert({
    Order_id:ObjectId("6153445931ca86e8b08b27a9"),
    Receiver_Business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    amount: 17000,
    date: "2021-04-04",
    paymentType: "Cheque",
    bankDetail: {
        bankName: "Chase Bank",
        accountNo: "15697532698745",
        branch: "New York"},
    BillingAddress : {
        country : "India",
        street1 : "Flimcity Road",
        city : "Mumbai",
        state : "Maharastra",
        zip : "12345"
        },
    });
    
    // Payment 5
    db.Payment.insert({
    Order_id:ObjectId("615344d631ca86e8b08b27aa"),
    Receiver_Business_id:ObjectId("61531c4f31ca86e8b08b278f"),
    amount: 35500,
    date: "2021-05-05",
    paymentType: "Wire Transfer",
    bankDetail: {
        bankName: "Chase Bank",
        accountNo: "15697532698745",
        branch: "New York"},
    BillingAddress : {
        country : "India",
        street1 : "Flimcity Road",
        city : "Mumbai",
        state : "Maharastra",
        zip : "12345"
        },
    });
    