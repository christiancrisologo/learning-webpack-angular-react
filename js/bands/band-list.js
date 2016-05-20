module.exports = function(app){
    app.factory('bandList',function(){
        return [
            {name:'Cinderalla',formed:1983},
            {name:'Bon Jovi',formed:1982}   
        ]
    })
}