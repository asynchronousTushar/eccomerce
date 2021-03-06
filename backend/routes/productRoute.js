const express = require('express');
const { createProduct, getAllProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteProductReview } = require('../controllers/productController');
const { isAuthenticatedUser, authorizedRole } = require('../middlewares/auth');

const router = express.Router();

router.route('/admin/product/new').post(isAuthenticatedUser, authorizedRole('admin'), createProduct)
router.route('/products').get(getAllProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizedRole('admin'), updateProduct).delete(isAuthenticatedUser, authorizedRole('admin'), deleteProduct)
router.route('/product/:id').get(getProductDetails);
router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(getProductReviews).delete(isAuthenticatedUser, deleteProductReview);

module.exports = router;