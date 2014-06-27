/**
 * Created by ajaykadus on 6/23/14.
 */
define([
    "lib/backbone",
    "models/product",
    "text!templates/editDetails.html"
], function (Backbone, Product, editProductTmpl) {
    var ItemView = Backbone.View.extend({
        events: {
            "click .js-update-product": "updateProduct"
        },
        updateProduct: function (e) {
            e.preventDefault();
            var data = {};
            $(".js-edit-product-details").find("input").each(function (i, el) {
                data[el.id] = $(el).val();
            });
            var updatedProduct = new Product(data);
            updatedProduct.set('id',this.model.get('id'))
            Backbone.Events.trigger('changed_product', updatedProduct);
            $(".content").show();
            $(".js-add-product").show();
            $(".js-product-details").html('');
        },
        render: function () {
            this.$el.html(_.template(editProductTmpl, {model: this.model}));
            return this;
        }
    });
    return ItemView;
});
