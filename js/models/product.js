/**
 * Created by ajaykadus on 6/23/14.
 */
define(["lib/backbone"], function (Backbone) {
    var Product = Backbone.Model.extend({
        image: this.image || "images/product_default.jpg",
        defaults: {
            "name":  "empty",
            "value":     "0"
        }
    });


    return Product;
});
