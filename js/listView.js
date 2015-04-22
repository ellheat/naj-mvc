UAM.ListView = function (listView) {
	UAM.EventEmitter.call(this);

	this.list= listView;

	this.drawElement = function(data) {
		var element = document.createElement('li');
    		element.innerHTML = data;
      		element.className = 'listItem';
      		var me = this;

    		element.addEventListener("click", function() {
    			me.changeState(element);
    	});

    	this.list.appendChild(element);
    	this.updateView(element, true);
	};

	this.changeState = function(element) {
		
		if (element.className =='listItem')
    		element.className = 'doneItem';
    	else
    		element.className ='listItem';

    	this.updateView(element, false);
	};

	this.updateView = function(element, ifNew){
    this.emit("updateView", element.className, ifNew);
    };
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);