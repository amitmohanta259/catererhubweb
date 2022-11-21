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
    const cuisine_id = req.params.cuisineId;
    Cuisine.fetchCuisineMenu(cuisine_id)
    .then(([rows,data])=>{
        res.render('user/meal',{
                    cuisineMenuData:rows,
                    pageTitle:'Caterehub',
                    path:'/user/menu'
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
