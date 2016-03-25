module.exports = function(Viewer) {
	Viewer.feed=function(id){
		var v=Viewer.find({where:{id:id}});
		var subscriberList=v.subscriptions;

	};
	Viewer.subscribe=function(id,uid){
        Viewer.find({where:{id:id}}).subscriptions.push(uid);
	}
};
