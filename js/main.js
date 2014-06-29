require.config({
    paths: {
        'jquery': 'lib/jquery',
        'text': 'lib/text',
        'templates': '/merchant-product-catalog/templates'
    },
    shim: {
        'lib/underscore': {
            exports: '_'
        },
        'lib/backbone': {
            deps: ["lib/underscore", "jquery"],
            exports: 'Backbone'
        }
    }
});
pCollection = {};
require(
    ["jquery",
        "app",
        "collections/products",
        "views/layout"
    ],
    function ($, App, Products, LayoutView) {
        $(function () {
            var MyApp = new APP();
            MyApp.collection = new Products(MyApp.previewProducts);
            pCollection = new Products(MyApp.MerchantProducts);
            MyApp.collection.comparator = function(product) {
                return parseFloat(product.get("value"));
            };
            var layout = new LayoutView({collection: MyApp.collection});
        });
    }
);

