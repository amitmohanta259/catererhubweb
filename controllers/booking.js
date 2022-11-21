const Caterer = require("../models/caterer");
// exports.getbookingDetails = (req,res,next)=>{
//     res.render('user/booking_details',{pageTitle:'Booking Details',path:'/user/booking_details'});
// }

const selectDish = [];

exports.getBookingHistory = (req,res,next)=>{
    res.render('user/booking_history',{pageTitle:'Booking History',path:'/user/booking_history'});
}

exports.bookingConfirmation = (req,res,next)=>{
    res.render('user/confirmation',{pageTitle:'Booking Confirmation',path:'/user/confirmation'});
}

exports.getCatererCuisineCheckout = (req,res,next)=>{
    const cuisineId = req.params.cuisineId;
    const catererId = req.query.catererId;
    Caterer.fetchCaterersCuisineCheckout(cuisineId,catererId)
        .then(([rows,data])=>{
            res.render('user/booking_details',{
                catererCuisineData:rows,
                pageTitle:'Caterer',
                path:'/user/booking_details',
                selectDish:selectDish,
                catererId:catererId
            });
        })
        .catch(err => {
            console.log(err);
        });
    
}