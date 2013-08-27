(function () {
    CAAT.Text = function () {
        CAAT.Text.superclass.constructor.call(this);
        return this;
    }

    CAAT.Text.prototype = {
        x: 0,
        y: 0,
        text: '',

        initialize: function (x, y, text) {

        }
    }

    extend(CAAT.Text, CAAT.Actor);
})();