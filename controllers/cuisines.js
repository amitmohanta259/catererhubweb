const Cuisine = require("../models/cuisine");

// exports.getMenu = (req,res,next)=>{
//     Cuisine.getAllCuisine()
//     .then(([rows,data])=>{
//         res.render('user/menu',{
//                     cuisineMenuData:rows,
//                     pageTitle:'Caterehub',
//                     path:'/user/menu'
//                 });
//     })
//     .catch(err=>{
//         console.log(err);
//     });
// }

exports.getCuisine = (req,res,next)=>{
    Cuisine.fetchAllCuisine().then(([rows,data])=>{
        res.render('index',{
            cuisineData:rows,
            pageTitle:'Caterehub',
            path:'/'
        });
    }).catch(err=>{
        console.log(err);
    });
    
}

exports.getCuisineMenu = (req,res,next)=>{
    const cuisine_id = req.query.cuisineId;
    const caterer_id = req.query.catererId;
    Cuisine.fetchCuisineMenu(cuisine_id,caterer_id)
    .then(([rows,data])=>{
        res.render('user/meal',{
                    cuisineMenuData:rows,
                    pageTitle:'Caterehub',
                    path:'/user/menu',
                    cuisineId:cuisine_id,
                    catererId:caterer_id
                });
    })
    .catch(err=>{
        console.log(err);
    });
    
}

//need to pass parameter
exports.getCuisineMeal = (req,res,next)=>{
    const cuisine_id = req.params.cuisineId;
    Cuisine.fetchMeals(cuisine_id)
    .then(([rows,data])=>{
        res.render('user/meals',{
            cuisineMealData:rows,
            pageTitle:'Meals',
            path:'/user/meal',
                    
        });
    })
    .catch(err =>{
        console.log(err);
    });
}

exports.getCatererCuisine = (req,res,next)=>{
    const caterer_id = req.params.catererId;
    // console.log(caterer_id);
    Cuisine.getCuisineBasedOnCaterer(caterer_id)
    .then(([rows,data])=>{
        res.render('user/cuisine',{
            catererCuisineData:rows,
            pageTitle:'Cuisine',
            path:'/user/cuisine',
            catererId:caterer_id
        })
    })
    .catch(err =>{
        console.log(err);
    });
}

exports.getCatererCuisineMeal = (req,res,next)=>{
    const caterer_id = req.query.catererId;
    const cuisine_id = req.query.cuisineId;
    console.log(caterer_id);
    console.log(cuisine_id);
    Cuisine.fetchCatererMeals(caterer_id,cuisine_id)
    .then(([rows,data])=>{
        res.render('user/meals',{
            cuisineMealData:rows,
            pageTitle:'Meals',
            path:'/user/meal',
            catererId:caterer_id,
            cuisineId:cuisine_id      
        });
    })
    .catch(err =>{
        console.log(err);
    });
}


exports.getCatererCuisineMenu = (req,res,next)=>{
    const caterer_id = req.query.catererId;
    const cuisine_id = req.query.cuisineId;
    Cuisine.fetchCatererMenu().then(

    ).catch();

}