const db = require('../utils/database');


module.exports = class Cuisine{
    constructor(cuisineName,cuisine_id,dishName,foodType,price,dishDescription,catererName,catererId){
        this.cuisineName = cuisineName;
        this.cuisine_id = cuisine_id;
        this.dishName = dishName;
        this.foodType = foodType;
        this.price = price;
        this.dishDescription = dishDescription;
        this.catererName = catererName;
        this.catererId = catererId;
    }

    static save(){
        return db.execute('insert into catererhub.orders (customer_id,cuisine_id,meal_id,menu_id,dish_name,food_type,price,image_url,cuisine_name,meal_name,order_status) values(?,?,?,?,?,?,?,?,?,?,?)',[1,2,1,1,"Rotla",2,10,"image1.jpg","Gujarati cuisine","Family Pack",1])
        //cuisines.push(this);
    }

    static getAllMenu(id){
        return db.execute('SELECT * FROM catererhub.menu join catererhub.caterer on menu.cuisine_id = caterer.cuisine_ids where caterer_id=?;',[id]);
    }

    static getAllCatererMeal(id){
        return db.execute('select * from catererhub.cuisine join catererhub.meals on cuisine.cuisine_id = meals.cuisine_id and meals.cuisine_id = (select cuisine_ids from catererhub.caterer where caterer_id = ?);',[id]);
    }
    // static getAllCuisine(){
    //     return db.execute('SELECT * FROM catererhub.caterer join catererhub.cuisine on caterer.cuisine_ids = cuisine.cuisine_id where cuisine.cuisine_id= caterer.cuisine_ids');
    // }

    static fetchAllCuisine(){
       return db.query('SELECT * FROM catererhub.cuisine;SELECT * FROM catererhub.caterer');
    }

    static fetchCuisineMenu(id){
        return db.execute('select menu.dish_name,menu.dish_description, details.caterer_name,details.cuisine_name,details.caterer_id FROM catererhub.menu join (select caterer.caterer_name,caterer.caterer_id, caterer.address,caterer.rating,caterer.phone_no,caterer.email,caterer.event_count,caterer.staff_count,caterer.owner_name,mealDetails.cuisine_name,mealDetails.cuisine_id from catererhub.caterer join (select meals.meal_name from catererhub.meals join catererhub.cuisine on meals.cuisine_id = cuisine.cuisine_id where meals.cuisine_id=1) as mealDetails on caterer.cuisine_id = mealDetails.cuisine_id ) as details on caterer.cuisine_ids = details.cuisine_id where caterer.cuisine_ids = 1',[id]);
    }

    //  static fetchMeals(id){
    //     return db.execute('SELECT meals.meal_name, meals.meal_id, meals.cuisine_id,cuisine.cuisine_name FROM catererhub.meals join catererhub.cuisine where meals.cuisine_id = cuisine.cuisine_id and meals.cuisine_id =?',[id]);
    //  }

     static fetchMeals(id){
        return db.query('SELECT meals.meal_name, meals.meal_id, meals.cuisine_id,cuisine.cuisine_name FROM catererhub.meals join catererhub.cuisine where meals.cuisine_id = cuisine.cuisine_id and meals.cuisine_id =1 ; SELECT menu.dish_name,menu.menu_id,menu.image_url,menu.food_type,menu.dish_description, details.caterer_name,details.cuisine_name,details.cuisine_id,details.caterer_id FROM catererhub.menu join (select caterer.caterer_name,caterer.caterer_id, caterer.address,caterer.rating,caterer.phone_no,caterer.email,caterer.event_count,caterer.staff_count,caterer.owner_name,cuisine.cuisine_name,cuisine.cuisine_id from catererhub.caterer join catererhub.cuisine on caterer.cuisine_ids = cuisine.cuisine_id) as details on menu.cuisine_id = details.cuisine_id where menu.cuisine_id=? order by details.caterer_name;',[id,id], function (error, results, fields) {
            if (error) throw error;
        });
     }

     static selectedCuisine(cuisineId,menuId){
        return db.execute('SELECT menu.dish_name,menu.menu_id,menu.image_url,menu.food_type,menu.dish_description, details.caterer_name,details.cuisine_name,details.cuisine_id,details.caterer_id FROM catererhub.menu join (select caterer.caterer_name,caterer.caterer_id, caterer.address,caterer.rating,caterer.phone_no,caterer.email,caterer.event_count,caterer.staff_count,caterer.owner_name,cuisine.cuisine_name,cuisine.cuisine_id from catererhub.caterer join catererhub.cuisine on caterer.cuisine_ids = cuisine.cuisine_id) as details on menu.cuisine_id = details.cuisine_id where menu.cuisine_id=? and menu.menu_id =? order by details.caterer_name;',[cuisineId,menuId]); 
    }

};