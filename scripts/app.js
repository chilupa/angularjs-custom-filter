var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    var vm = this;
    vm.gmtTime = "2018-10-30T18:58:28.505Z";
});

app.filter('localTime', function ($filter) {
    return function (gmtTime, format) {
        return $filter('date')(gmtTime, format);
    }
})