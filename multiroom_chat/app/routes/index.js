module.exports = function(application){
application.get('/', function (req, res){
//excutar função que está sendo exportada em index no controller.
    application.app.controllers.index.home(application, req, res)
});
}