/**
 * Created by ajaykadus on 6/25/14.
 */
define([
    'lib/backbone',
    'views/productDetails',
    'views/editProduct'
],function(Backbone, ProductDetails,EditProduct) {
    return Backbone.Router.extend({
        routes: {
            'home': 'index',
            'product/:id': 'showProduct',
            'edit/:id': 'editProduct'
        },

        initialize: function() {

        },
        index: function(id) {
            $(".content").show();
            $(".js-product-details").html('');
        },
        showProduct: function(id) {
            var detailsView = new ProductDetails({model:pCollection.get(id)});
            $(".content").hide();
            $(".js-product-details").html(detailsView.render().el);

        },
        editProduct: function(id) {
            var editView = new EditProduct({model:pCollection.get(id)});
            $(".content, .js-sort").hide();
            $(".js-product-details").html(editView.render().el);

        }
    });
});