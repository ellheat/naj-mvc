UAM.FooterCtrl = function (footerView,store) {
    UAM.EventEmitter.call(this);
	this.updateData = function(all, done) {
		footerView.updateCounter(all,done);
	};
	store.on("updateFooter",this.updateData);
};