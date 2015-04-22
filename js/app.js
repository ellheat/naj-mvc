window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	store = new UAM.Store();
	inputView = new UAM.InputView(document.querySelector('#inputview'));
	listView = new UAM.ListView(document.querySelector('#listview'));
	footerView = new UAM.FooterView(document.querySelector('footer'));

	new UAM.InputCtrl(inputView, store);
	new UAM.ListCtrl(listView, store);
	new UAM.FooterCtrl(footerView, store);
});