function APP() {
    this.previewProducts = [
        { id: 1, name: "Macbook Air", description: 799, value: 799 },
        { id: 2, name: "Macbook Air", description: 799, value: 799 },
        { id: 3, name: "Macbook Air", description: 799, value: 799 },
        { id: 4, name: "Macbook Air", description: 799, value: 799 },
        { id: 5, name: "Macbook Air", description: 799, value: 799 }
    ];

    this.MerchantProducts = [
        { id: 1, name: "Macbook Air", description: 799, width: "Macbook Air", length: 799, weight: "Macbook Air", height: "Macbook Air", value: 799 },
        { id: 2, name: "Macbook Air", description: 799, width: "Macbook Air", length: 799, weight: "Macbook Air", height: "Macbook Air", value: 799 },
        { id: 3, name: "Macbook Air", description: 799, width: "Macbook Air", length: 799, weight: "Macbook Air", height: "Macbook Air", value: 799 },
        { id: 4, name: "Macbook Air", description: 799, width: "Macbook Air", length: 799, weight: "Macbook Air", height: "Macbook Air", value: 799 },
        { id: 5, name: "Macbook Air", description: 799, width: "Macbook Air", length: 799, weight: "Macbook Air", height: "Macbook Air", value: 799 }
    ];

}

APP.prototype.start = function() {
    define(
        ["jquery",
            "lib/backbone",
            "router"
        ],
        function ($, Backbone, Router) {
                this.routes = new Router();
                Backbone.history.start();
        }
    );

}()

