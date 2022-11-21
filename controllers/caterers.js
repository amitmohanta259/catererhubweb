const Caterer = require("../models/caterer");

exports.getCaterer = (req,res,next)=>{
    Caterer.fetchAllCaterers()
        .then(([rows,data])=>{
            res.render('user/caterer',{
                catererData:rows,
                pageTitle:'Caterer',
                path:'/user/caterer'
            });
        })
        .catch(err => {
            console.log(err);
        });
    
}

exports.getCatererBasedOnCuisine = (req,res,next)=>{
    const cuisineId = req.params.cuisineId;
    Caterer.fetchAllCaterersForCuisine(cuisineId)
        .then(([rows,data])=>{
            res.render('user/caterer',{
                catererData:rows,
                pageTitle:'Caterer',
                path:'/user/caterer'
            });
        })
        .catch(err => {
            console.log(err);
        });
    
}

exports.getCatererCuisineCheckout = (req,res,next)=>{
    const cuisineId = req.params.cuisineId;
    const catererId = req.query.catererId;
    Caterer.fetchCaterersCuisineCheckout(cuisineId,catererId)
        .then(([rows,data])=>{
            res.render('user/caterer',{
                catererCuisineData:rows,
                pageTitle:'Caterer',
                path:'/user/caterer',
                catererId:catererId
            });
        })
        .catch(err => {
            console.log(err);
        });
    
}

exports.getCatererProfile = (req,res,next)=>{
    const catererId = req.params.catererId;
    Caterer.getCatererProfile(catererId)
        .then(([rows,data])=>{
            res.render('user/profile',{
                catererProfileData : rows,
                pageTitle:'Caterer Profile',
                path:'/user/profile'
            });
        })
        .catch(err => {
            console.log(err);
        });

     //catererId
}

// exports.getCaterers = (req,res,next)=>{
//     Caterer.fetchAllCaterers().then(([rows,data])=>{
//         res.render('index',{
//             catererData:rows,
//             pageTitle:'Caterehub',
//             path:'/'
//         });
//     }).catch(err=>{
//         console.log(err);
//     });
    
// }