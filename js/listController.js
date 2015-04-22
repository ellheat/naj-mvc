UAM.ListCtrl = function (listView,store) {

	this.drawElement = function(data) {
		listView.drawElement(data);
	}

	this.updateView = function(className, ifNew) {
		store.update(className, ifNew);
	}

	store.on("elementAdded",this.drawElement);
	listView.on("updateView", this.updateView);
	
};