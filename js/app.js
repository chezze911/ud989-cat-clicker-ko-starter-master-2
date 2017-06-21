var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
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
}


var ViewModel = function() {
	var self = this

	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: "http://placekitten.com/g/1600/900",
		nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
	}) );
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);

		// var count = 0;
		// count++;

	};

};

ko.applyBindings(new ViewModel());

