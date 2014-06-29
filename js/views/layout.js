
define(
    ["lib/backbone",
        "views/productList",
        "views/addProduct",
        "text!templates/layout.html"
    ], function (Backbone, ProductListView, AddProduct, LayoutTmpl) {
        var ProductCatalog = Backbone.View.extend({
            el: 'body',
            events: {
                "click .js-add-product": "addProduct"
            },
            initialize: function (options) {
                this.collection = options.collection;
                this.render();
            },
            addProduct: function (e) {
                e.preventDefault();
                var addView = new AddProduct({collection: this.collection});
                this.$(".js-add-product").hide();
                this.$(".js-product-form").append(addView.render().el);
            },
            render: function () {
                var that = this;
                var productList = new ProductListView(this.collection );
                this.$el.append(_.template(LayoutTmpl));
                this.$('.js-product-list').append(productList.render().el)
            }
        });
        return ProductCatalog;
    });
