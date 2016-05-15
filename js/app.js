var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imggAttribution = ko.observable('....');
	this.level = ko.computed(function() {
		console.log(this.clickCount);
		if (this.clickCount() < 11) {
			return "Rookie"
		} else {
			return "Expert"
		}
	}, this);

	this.nicknames = ko.observableArray([
		"faty", "lazy", "Garfield"
	]);

	


	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel())