/**
 * Created by ajaykadus on 6/23/14.
 */
define(["lib/backbone", "models/product"], function(Backbone, Product) {
    var Products = Backbone.Collection.extend({
        model: Product,
        initialize: function() {
            this.on("add", this.addProduct, this);
        },
        addProduct: function() {
            products = this.models;
        }
    });
    return Products;
});
