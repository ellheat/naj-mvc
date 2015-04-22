UAM.InputView = function (inputView) {
	UAM.EventEmitter.call(this);

	this.textInput = document.querySelector('#input');
	var button = document.querySelector('#button');

	this.addElement = function() {
		text = this.textInput.value;
		
		if(text) {
			this.emit("addElement",text);
		}
		else
			console.log('Nic nie wpisales');
	};
	this.clear = function() {
		if(text) {
			this.textInput.value = "";
		}
	};
	button.addEventListener('click',this.addElement.bind(this));
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);