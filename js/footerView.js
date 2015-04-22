UAM.FooterView = function (footerView) {
	UAM.EventEmitter.call(this);

	this.elementsDone = document.querySelector('#done');
	this.elementsNotDone = document.querySelector('#notdone');

	this.updateCounter = function(all, done) {
		this.elementsDone.innerHTML  = "Done : " + done;
		x=all - done;
		this.elementsNotDone.innerHTML = "Todo: "  + x;
	};
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);