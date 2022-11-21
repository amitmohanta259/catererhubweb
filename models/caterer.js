const db = require('../utils/database');

module.exports = class Caterer{
    constructor(caterer_name,address,rating,phone_no,email,event_count,staff_count,owner_name,cuisine_ids){
        this.caterer_name = caterer_name;
        this.address = address;
        this.rating = rating;
        this.phone_no = phone_no;
        this.email = email;
        this.event_count = event_count;
        this.staff_count = staff_count;
        this.owner_name = owner_name;
        this.cuisine_ids = cuisine_ids;
    }

    save(){
        cuisines.push(this);
    }

    static fetchAllCaterers(){
       return db.execute('SELECT * FROM catererhub.caterer');
    }

    static fetchAllCaterersForCuisine(id){
        return db.execute('SELECT * FROM catererhub.caterer join catererhub.cuisine on caterer.cuisine_ids = cuisine.cuisine_id where cuisine_id = ?',[id]);
    }

    static fetchCaterersCuisineCheckout(cusineId,catererId){
        return db.query('SELECT * FROM catererhub.caterer join catererhub.cuisine on caterer.cuisine_ids = cuisine.cuisine_id where cuisine_id = ? and caterer_id =?;SELECT menu.dish_name,menu.image_url,menu.food_type,menu.price,menu.dish_description, details.caterer_name,details.cuisine_name,details.cuisine_id,details.caterer_id FROM catererhub.menu join (select caterer.caterer_name,caterer.caterer_id, caterer.address,caterer.rating,caterer.phone_no,caterer.email,caterer.event_count,caterer.staff_count,caterer.owner_name,cuisine.cuisine_name,cuisine.cuisine_id from catererhub.caterer join catererhub.cuisine on caterer.cuisine_ids = cuisine.cuisine_id) as details on menu.cuisine_id = details.cuisine_id where menu.cuisine_id=? and caterer_id=? order by details.caterer_name;',[cusineId,catererId,cusineId,catererId],function (error, results, fields) {
        });
    }

    static getCatererProfile(id){
        return db.execute('select * from catererhub.caterer where caterer_id = ?',[id]);
    }

}