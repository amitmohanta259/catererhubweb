const express = require('express');
const router = express.Router();
const menuController = require('../controllers/cuisines');
const catererController = require('../controllers/caterers');
const bookingController = require('../controllers/booking');
const paymentController = require('../controllers/payment');
    
// });

router.get('/',menuController.getCuisine);


//router.get('/user/menu',menuController.getMenu);

///user/caterer.html
router.get('/user/caterer',catererController.getCaterer);
//dynamic routes
router.get('/user/caterer/:cuisineId',catererController.getCatererBasedOnCuisine);


///user/profile.html
router.get('/user/profile',catererController.getCatererProfile);
//dynamic route
router.get('/user/profile/:catererId',catererController.getCatererProfile);

//user/booking_details.html
router.get('/user/booking_details/:cuisineId',bookingController.getCatererCuisineCheckout);

///user/confirmation.html
router.get('/user/confirmation',bookingController.bookingConfirmation);


///user/booking_history.html
router.get('/user/booking_history',bookingController.getBookingHistory);

//for meals
router.get('/user/meal/:cuisineId',menuController.getCuisineMeal);

//dynamic routeS
router.get('/user/menu/:cuisineId',menuController.getCuisineMenu);

router.get('/user/menu/:cuisineId',menuController.getCuisineMenu);

///user/payment.html
router.get('/user/addOrder',paymentController.getOrderDetails);

// router.post('/user/addOrder',paymentController.postOrderDetails);


module.exports = router;