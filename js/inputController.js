UAM.InputCtrl = function (inputView,store) {
    UAM.EventEmitter.call(this);
	this.addElement = function(element) {
		store.add(element);
	};
	this.updateView = function(text) {
		inputView.clear(text);
	};
	inputView.on("addElement", this.addElement);
	store.on("updateView", this.updateView);
};