module.exports = function(app){ //modularity directive , make the app argument 
    app.directive('bandInfo',function(bandList){
        return {
            template: require('./band-info.html'),  // add the band-info html instead using templateUrl,using relative path ./
            restrict:'E',
            controller:function($scope){
                $scope.bands = bandList;         
            }
        }
    })
}