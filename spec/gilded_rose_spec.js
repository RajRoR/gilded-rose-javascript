describe("Gilded Rose", function() {

	it("Requirement: All items have a sell_in value which denotes the number of days we have to sell the item", function () {
		for (var i = 0; i < items.length; i++) {
			expect(true).toEqual(items[i].hasOwnProperty("sell_in"));
			expect(true).toEqual(items[i].sell_in != null);
		}
	});

	it("Requirement: All items have a quality value which denotes how valuable the item is", function () {
		for (var i = 0; i < items.length; i++) {
			expect(true).toEqual(items[i].hasOwnProperty("quality"));
			expect(true).toEqual(items[i].quality != null);
		}
	}); 

	it("Requirement: At the end of each day our system lowers both values for every item (sell_in: 1-->0, quality: 1-->0)", function () {
		items = [];
		items.push(new Item('item 1,1', 1, 1));

		update_quality();

		expect(true).toEqual(items[0].sell_in == 0 && items[0].quality == 0);
	});   

	it("Requirement: At the end of each day our system lowers both values for every item (sell_in: 10-->9, quality: 10-->9)", function () {
		items = [];
		items.push(new Item('item 10,10', 10, 10));

		update_quality();

		expect(true).toEqual(items[0].sell_in == 9 && items[0].quality == 9);
	});  

	it("Requirement: At the end of each day our system lowers both values for every item (sell_in: 20-->19, quality: 20-->19)", function () {
		items = [];
		items.push(new Item('item 20,20', 20, 20));

		update_quality();

		expect(true).toEqual(items[0].sell_in == 19 && items[0].quality == 19);
	});

	it("Requirement: Once the sell_in days is less then zero, quality degrades twice as fast (positive sell_in value, quality: 20-->19)", function () {
		items = [];
		items.push(new Item('item 1,20', 1, 20));

		update_quality();

		expect(19).toEqual(items[0].quality);
	}); 	
	  
	it("Requirement: Once the sell_in days is less then zero, quality degrades twice as fast (zero sell_in value, quality: 20-->19)", function () {
		items = [];
		items.push(new Item('item 0,20', 0, 20));

		update_quality();

		expect(19).toEqual(items[0].quality);
	}); 	  
	it("Requirement: Once the sell_in days is less then zero, quality degrades twice as fast (negative sell_in value, quality: 20-->18)", function () {
		items = [];
		items.push(new Item('item -1,20', -1, 20));

		update_quality();

		expect(18).toEqual(items[0].quality);
	}); 

	it("Requirement: The quality of an item is never negative (positive sell_in, quality: 0-->0)", function () {
		items = [];
		items.push(new Item('item 1,0', 1, 0));
	
		update_quality();
	
		expect(items[0].quality).toEqual(0);
	}); 

	it("Requirement: The quality of an item is never negative (zero sell_in, quality: 0-->0)", function () {
		items = [];
		items.push(new Item('item 0,0', 0, 0));
	
		update_quality();
	
		expect(items[0].quality).toEqual(0);
	}); 

	it("Requirement: The quality of an item is never negative (negative sell_in, quality: 0-->0)", function () {
		// To account for the Requirement, Once the sell_in days is less then zero, quality degrades twice as fast 
		items = [];
		items.push(new Item('item -1,0', -1, 0));
	
		update_quality();
	
		expect(items[0].quality).toEqual(0);
	}); 	

	it("Requirement: The quality of an item is never negative (negative sell_in, quality: 1-->0)", function () {

		items = [];
		items.push(new Item('item -1,1', -1, 1));
	
		update_quality();
	
		expect(items[0].quality).toEqual(0);
	}); 	


	it("Requirement: The quality of an item is never negative ('Conjured', negative sell_in, quality: 1-->0)", function () {

		items = [];
		items.push(new Item('Conjured item -1,1', -1, 1));
	
		update_quality();
	
		expect(items[0].quality).toEqual(0);
	}); 

	it("Requirement: 'Aged Brie' actually increases in *quality* the older it gets (positive sell_in, quality: 1-->2)", function () {
		items = [];
		items.push(new Item('Aged Brie', 1, 1));
	
		update_quality();
	
		expect(items[0].quality).toEqual(2);
	}); 

	it("Requirement: 'Aged Brie' actually increases in *quality* the older it gets (zero sell_in, quality: 1-->2)", function () {
		items = [];
		items.push(new Item('Aged Brie', 0, 1));
	
		update_quality();
	
		expect(items[0].quality).toEqual(2);
	}); 

	it("Requirement: 'Aged Brie' actually increases in *quality* the older it gets (negative sell_in, quality: 1-->3)", function () {
		// To account for the Requirement, Once the sell_in days is less then zero, quality degrades twice as fast 
		items = [];
		items.push(new Item('Aged Brie', -1, 1));
	
		update_quality();
	
		expect(items[0].quality).toEqual(3);
	}); 

	it("Requirement: The *quality* of an item is never more than 50 (positive sell_in, quality: 50-->50)", function () {
		items = [];
		items.push(new Item('Aged Brie', 1, 50));
	
		update_quality();
	
		expect(items[0].quality).toEqual(50);
	}); 

	it("Requirement: The *quality* of an item is never more than 50 (zero sell_in, quality: 50-->50)", function () {
		items = [];
		items.push(new Item('Aged Brie', 0, 50));
	
		update_quality();
	
		expect(items[0].quality).toEqual(50);
	}); 

	it("Requirement: The *quality* of an item is never more than 50 (negative sell_in, quality: 50-->50)", function () {
		// To account for the Requirement, Once the sell_in days is less then zero, quality degrades twice as fast 
		items = [];
		items.push(new Item('Aged Brie', -1, 50));
	
		update_quality();
	
		expect(items[0].quality).toEqual(50);
	}); 

	it("Requirement: The *quality* of an item is never more than 50 (negative sell_in, quality: 49-->50)", function () {
		// To account for the Requirement, Once the sell_in days is less then zero, quality degrades twice as fast 
		items = [];
		items.push(new Item('Aged Brie', -1, 49));
	
		update_quality();
	
		expect(items[0].quality).toEqual(50);
	}); 

	it("Requirement: 'Sulfuras', being a legendary item, never has to be sold nor does it decrease in *quality* (sell_in: 10-->10, quality: 10-->10)", function () {
		items = [];
		items.push(new Item('Sulfuras, Hand of Ragnaros', 10, 10));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(10);
		expect(items[0].quality).toEqual(10);
	}); 

	it("Requirement: 'Sulfuras', being a legendary item, never has to be sold nor does it decrease in *quality* (sell_in: 0-->0, quality: 0-->0)", function () {
		items = [];
		items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 0));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(0);
		expect(items[0].quality).toEqual(0);
	}); 

	it("Requirement: 'Sulfuras', being a legendary item, never has to be sold nor does it decrease in *quality* (sell_in: -1-->-1, quality: 0-->0)", function () {
		// To account for the Requirement, Once the sell_in days is less then zero, quality degrades twice as fast 
		items = [];
		items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 0));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(-1);
		expect(items[0].quality).toEqual(0);
	}); 

	it("Requirement: 'Backstage passes', like aged brie, increases in *quality* as it's *sell_in* value decreases; *quality* increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but *quality* drops to 0 after the concert (sell_in: 20-->19, quality: 20-->21)", function () {
		items = [];
		items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(19);
		expect(items[0].quality).toEqual(21);
	}); 

	it("Requirement: 'Backstage passes', like aged brie, increases in *quality* as it's *sell_in* value decreases; *quality* increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but *quality* drops to 0 after the concert (sell_in: 11-->10, quality: 20-->21)", function () {
		items = [];
		items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(10);
		expect(items[0].quality).toEqual(21);
	}); 

	it("Requirement: 'Backstage passes', like aged brie, increases in *quality* as it's *sell_in* value decreases; *quality* increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but *quality* drops to 0 after the concert (sell_in: 10-->9, quality: 20-->22)", function () {
		items = [];
		items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(9);
		expect(items[0].quality).toEqual(22);
	}); 

	it("Requirement: 'Backstage passes', like aged brie, increases in *quality* as it's *sell_in* value decreases; *quality* increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but *quality* drops to 0 after the concert (sell_in: 6-->5, quality: 20-->22)", function () {
		items = [];
		items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(5);
		expect(items[0].quality).toEqual(22);
	}); 

	it("Requirement: 'Backstage passes', like aged brie, increases in *quality* as it's *sell_in* value decreases; *quality* increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but *quality* drops to 0 after the concert (sell_in: 5-->4, quality: 20-->23)", function () {
		items = [];
		items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(4);
		expect(items[0].quality).toEqual(23);
	}); 

	it("Requirement: 'Backstage passes', like aged brie, increases in *quality* as it's *sell_in* value decreases; *quality* increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but *quality* drops to 0 after the concert (sell_in: 0-->-1, quality: 20-->23)", function () {
		items = [];
		items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(-1);
		expect(items[0].quality).toEqual(23);
	});

	it("Requirement: 'Backstage passes', like aged brie, increases in *quality* as it's *sell_in* value decreases; *quality* increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but *quality* drops to 0 after the concert (sell_in: -1-->-2, quality: 20-->0)", function () {
		items = [];
		items.push(new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(-2);
		expect(items[0].quality).toEqual(0);
	});

	it("Requirement: 'Conjured' items degrade in *quality* twice as fast as normal items (positive sell_in value, quality: 10-->8)", function () {
		items = [];
		items.push(new Item('Conjured', 1, 10));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(0);
		expect(items[0].quality).toEqual(8);
	});	

	it("Requirement: 'Conjured' items degrade in *quality* twice as fast as normal items (zero sell_in value, quality: 10-->8)", function () {
		items = [];
		items.push(new Item('Conjured', 0, 10));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(-1);
		expect(items[0].quality).toEqual(8);
	});	

	it("Requirement: 'Conjured' items degrade in *quality* twice as fast as normal items (negative sell_in value quality: 10-->6)", function () {
		items = [];
		items.push(new Item('Conjured', -1, 10));
	
		update_quality();
	
		expect(items[0].sell_in).toEqual(-2);
		expect(items[0].quality).toEqual(6);
	});	


	it("Requirement: 'Sulfuras' is a legendary item and as such its *quality* is 80 and it never alters (positive sell_in value)", function () {
		items = [];
		items.push(new Item('Sulfuras, Hand of Ragnaros', 1, 80));
	
		update_quality();
	
		expect(items[0].quality).toEqual(80);
	});	

	it("Requirement: 'Sulfuras' is a legendary item and as such its *quality* is 80 and it never alters (zero sell_in value)", function () {
		items = [];
		items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
	
		update_quality();
	
		expect(items[0].quality).toEqual(80);
	});	

	it("Requirement: 'Sulfuras' is a legendary item and as such its *quality* is 80 and it never alters (negative sell_in value)", function () {
		items = [];
		items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
	
		update_quality();
	
		expect(items[0].quality).toEqual(80);
	});	

});
