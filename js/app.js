var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable("http://placekitten.com/g/1600/900");
	var self = this;


	self.catlevel = ko.computed(function() {
		var clicks = self.clickCount();


		if (clicks < 10) {
			return "Newborn";

		} else if (clicks >= 10 && clicks <= 19) {
			return "Infant";

		} else if (clicks >= 20  && clicks <= 29) {
			return "Teen";

		} else if (clicks >= 30) {
			return "Adult";

		} else {
			return "Current Cat Level could not be computed...check conditionals and try again";
		}

	});

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

		// var count = 0;
		// count++;

	};

}

ko.applyBindings(new ViewModel());

