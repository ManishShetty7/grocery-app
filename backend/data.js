import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Manish',
            email:'manishshetty714@gmail.com',
            password: bcrypt.hashSync('9768',8),
            isAdmin: true,
            isSeller: true,
      seller: {
        name: 'Manish',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
        },
      seller: {
        name: 'Manish',
        logo: '/images/logo2.png',
        description: 'best seller',
        rating: 4.0,
        numReviews: 125,
        },
      },
        {
            name:'John',
            email:'vidyashetty714@gmail.com',
            password: bcrypt.hashSync('9768',8),
            isAdmin: false,
        },
    ],
    products:[
        {
            name:'Onion 1kg',
            category:'Vegetables',
            image:'/images/p1.jpg',
            price:25,
            countInStock: 10,
            brand:'Fresh',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
          {  
            name:'Potato 1kg',
            category:'Vegetables',
            image:'/images/p2.jpg',
            price:24,
            countInStock: 10,
            brand:'Fresh',
            rating:4.0,
            numReviews:10,
            description:'high quality product',
    },
    {
            
            name:'Tomato 1kg',
            category:'Vegetables',
            image:'/images/p3.jpg',
            price:29,
            countInStock: 10,
            brand:'Fresh',
            rating:4.8,
            numReviews:17,
            description:'high quality product',
    },
    {
            
            name:'Sweet Corn 1 pc',
            category:'Vegetables',
            image:'/images/p4.jpg',
            price:16,
            countInStock: 10,
            brand:'Fresh',
            rating:4.5,
            numReviews:14,
            description:'high quality product',
           },
           {       
            name:'Lauki(Bottle Gourd) 1kg',
            category:'Vegetables',
            image:'/images/p5.jpg',
            price:34,
            countInStock: 10,
            brand:'Fresh',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
           {      
            name:'Bhendi(Okra) 1kg',
            category:'Vegetables',
            image:'/images/p6.jpg',
            price:42,
            countInStock: 10,
            brand:'Fresh',
            rating:4.5,
            numReviews:15,
            description:'high quality product',
        },
           {      
            name:'Green Capsicum 1kg',
            category:'Vegetables',
            image:'/images/p7.jpg',
            price:80,
            countInStock: 10,
            brand:'Fresh',
            rating:4.3,
            numReviews:10,
            description:'high quality product',
        },
           {      
            name:'Beetroot 1kg',
            category:'Vegetables',
            image:'/images/p8.jpg',
            price:28,
            countInStock: 10,
            brand:'Fresh',
            rating:4.1,
            numReviews:13,
            description:'high quality product',
        },
           {       
            name:'Cucumber 1kg',
            category:'Vegetables',
            image:'/images/p9.jpg',
            price:40,
            countInStock: 10,
            brand:'Fresh',
            rating:4.0,
            numReviews:13,
            description:'high quality product',
        },
           {       
            name:'Cauliflower 1pc',
            category:'Vegetables',
            image:'/images/p10.jpg',
            price:20,
            countInStock: 10,
            brand:'Fresh',
            rating:4.6,
            numReviews:9,
            description:'high quality product',
        },
           {       
            name:'Carrot 1kg',
            category:'Vegetables',
            image:'/images/p11.jpg',
            price:40,
            countInStock: 10,
            brand:'Fresh',
            rating:4.2,
            numReviews:10,
            description:'high quality product',
        },
    
           {     
            name:'Brinjal 1kg',
            category:'Vegetables',
            image:'/images/p12.jpg',
            price:50,
            countInStock: 10,
            brand:'Fresh',
            rating:3.2,
            numReviews:8,
            description:'high quality product',
        },
           {      
            name:'Green Chilli 200g',
            category:'Vegetables',
            image:'/images/p13.jpg',
            price:38,
            countInStock: 10,
            brand:'Fresh',
            rating:3.8,
            numReviews:7,
            description:'high quality product',
        },
           {       
            name:'Garlic 200g',
            category:'Vegetables',
            image:'/images/p14.jpg',
            price:19,
            countInStock: 10,
            brand:'Fresh',
            rating:1.8,
            numReviews:9,
            description:'high quality product',
        },
           {       
            name:'Ginger 200g',
            category:'Vegetables',
            image:'/images/p15.jpg',
            price:12,
            countInStock: 10,
            brand:'Fresh',
            rating:3.8,
            numReviews:12,
            description:'high quality product',
        },
           {     
            name:'Lemon 100g',
            category:'Vegetables',
            image:'/images/p16.jpg',
            price:18,
            countInStock: 10,
            brand:'Fresh',
            rating:1.6,
            numReviews:17,
            description:'high quality product',
        },
        
           {      
            name:'Apple 6pcs',
            category:'Fruit',
            image:'/images/p17.jpg',
            price:149,
            countInStock: 10,
            brand:'Fresh',
            rating:2.6,
            numReviews:11,
            description:'high quality product',
        },
           {       
            name:'Orange 1kg',
            category:'Fruit',
            image:'/images/p18.jpg',
            price:119,
            countInStock: 10,
            brand:'Fresh',
            rating:3.6,
            numReviews:8,
            description:'high quality product',
        },
           {     
            name:'Banana 6pcs',
            category:'Fruit',
            image:'/images/p19.jpg',
            price:37,
            countInStock: 10,
            brand:'Fresh',
            rating:2.6,
            numReviews:10,
            description:'high quality product',
        },
           {       
            name:'Pineapple 1pc',
            category:'Fruit',
            image:'/images/p20.jpg',
            price:68,
            countInStock: 10,
            brand:'Fresh',
            rating:7.6,
            numReviews:14,
            description:'high quality product',
        },
           {       
            name:'Watermelon 1pc',
            category:'Fruit',
            image:'/images/p21.jpg',
            price:54,
            countInStock: 10,
            brand:'Fresh',
            rating:9.6,
            numReviews:24,
            description:'high quality product',
        },
           {       
            name:'Papaya 1pc',
            category:'Fruit',
            image:'/images/p22.jpg',
            price:54,
            countInStock: 10,
            brand:'Fresh',
            rating:10.4,
            numReviews:44,
            description:'high quality product',
        },
           {       
            name:'Pomegranate 4pcs',
            category:'Fruit',
            image:'/images/p23.jpg',
            price:159,
            countInStock: 10,
            brand:'Fresh',
            rating:18.4,
            numReviews:14,
            description:'high quality product',
        },
    
           {      
            name:'Sapota 6pcs',
            category:'Fruit',
            image:'/images/p24.jpg',
            price:49,
            countInStock: 10,
            brand:'Fresh',
            rating:11.4,
            numReviews:4,
            description:'high quality product',
        },
           {   
            name:'Kiwi 3pcs',
            category:'Fruit',
            image:'/images/p25.jpg',
            price:89,
            countInStock: 10,
            brand:'Fresh',
            rating:11.3,
            numReviews:6,
            description:'high quality product',
        },
           {       
            name:'Sweet Lime 3kg',
            category:'Fruit',
            image:'/images/p26.jpg',
            price:199,
            countInStock: 10,
            brand:'Fresh',
            rating:10.4,
            numReviews:8,
            description:'high quality product',
        },
           {       
            name:'Grapes 1kg',
            category:'Fruit',
            image:'/images/p27.jpg',
            price:89,
            countInStock: 10,
            brand:'Fresh',
            rating:10.4,
            numReviews:6,
            description:'high quality product',
        },
           {       
            name:'Mango 4pcs',
            category:'Fruit',
            image:'/images/p28.jpg',
            price:299,
            countInStock: 10,
            brand:'Fresh',
            rating:7.4,
            numReviews:5,
            description:'high quality product',
        },
        
           {      
            name:'Milk 1ltr',
            category:'Dairy',
            image:'/images/p29.jpg',
            price:52,
            countInStock: 10,
            brand:'Fresh',
            rating:6.4,
            numReviews:8,
            description:'high quality product',
        },
           {      
            name:'Paneer 200g',
            category:'Dairy',
            image:'/images/p30.jpg',
            price:70,
            countInStock: 10,
            brand:'Fresh',
            rating:5.4,
            numReviews:2,
            description:'high quality product',
        },
           {      
            name:'Curd 1kg',
            category:'Dairy',
            image:'/images/p31.jpg',
            price:68,
            countInStock: 10,
            brand:'Fresh',
            rating:4.4,
            numReviews:7,
            description:'high quality product',
        },
           {      
            name:'Ghee 1ltr',
            category:'Dairy',
            image:'/images/p32.jpg',
            price:460,
            countInStock: 10,
            brand:'Fresh',
            rating:8.4,
            numReviews:4,
            description:'high quality product',
        },
           {       
            name:'Butter 500g',
            category:'Dairy',
            image:'/images/p33.jpg',
            price:235,
            countInStock: 10,
            brand:'Fresh',
            rating:7.4,
            numReviews:10,
            description:'high quality product',
        },
           {      
            name:'Bread 400g',
            category:'Bakery',
            image:'/images/p34.jpg',
            price:30,
            countInStock: 10,
            brand:'Fresh',
            rating:3.5,
            numReviews:10,
            description:'high quality product',
        },
           {       
            name:'Cupcake',
            category:'Bakery',
            image:'/images/p35.jpg',
            price:20,
            countInStock: 10,
            brand:'Fresh',
            rating:2.5,
            numReviews:10,
            description:'high quality product',
        },
           {       
            name:'Cookies',
            category:'Bakery',
            image:'/images/p36.jpg',
            price:50,
            countInStock: 10,
            brand:'Fresh',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
           {      
            name:'Donut',
            category:'Bakery',
            image:'/images/p37.jpg',
            price:50,
            countInStock: 10,
            brand:'Fresh',
            rating:4.0,
            numReviews:10,
            description:'high quality product',
        },
           {       
            name:'Biscuits',
            category:'Bakery',
            image:'/images/p38.jpg',
            price:40,
            countInStock: 10,
            brand:'Fresh',
            rating:4.0,
            numReviews:10,
            description:'high quality product',
        },
    ],
};
export default data;
