var initialCats = [
	{
		clickCount : 0,
		name : 'Tabby',
		imgSrc : 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution : "https://www.flickr.com/photos/bigtallguy/434164568",
		nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
	},
	{
		clickCount : 0,
		name : 'Tiger',
		imgSrc : 'img/4154543904_6e2428c421_z.jpg',
		imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
		nicknames: ['Tigger']
	},
	{
		clickCount : 0,
		name : 'Scaredy',
		imgSrc : 'img/22252709_010df3379e_z.jpg',
		imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
		nicknames: ['Casper']
	},
	{
		clickCount : 0,
		name : 'Shadow',
		imgSrc : 'img/1413379559_412a540d29_z.jpg',
		imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
		nicknames: ['Shooby']
	},
	{
		clickCount: 0,
		name: 'Sleepy',
		imgSrc : 'img/9648464288_2516b35537_z.jpg',
		imgAttribution : 'https://www.flickr.com/photos/onesharp/964864288',
		nicknames : ['Zzzzzz']
	}
]

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

// [  ] Make the cats show up in a list

// [  ] Make the currentCat change when you click on a cat in the list

// [  ] 

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0]);
	this.selectCat = function(c) {
		self.currentCat(c);
		console.log(self.currentCat);
	};

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);

		// var count = 0;
		// count++;

	};

};

ko.applyBindings(new ViewModel());

