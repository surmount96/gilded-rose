describe("Gilded Rose", function() {
  it("Ensure item(Conjured) degrade in Quality twice as fast as normal items", function() {
    var days = 3;
    items = [ new Item("Conjured", 2, 14) ];
    for (var i = 0; i < days; i++) {
      update_quality();
    }
    expect(items[0].name).toEqual("Conjured");
    expect((items[0].quality)).toEqual(0);
  });

  it("The Quality of an item is never more than 50", function() {
    var days = 3;
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 2, 46) ];
    for (var i = 0; i < days; i++) {
      update_quality();
    }
    expect((items[0].quality)).toEqual(0);
  });

  it("Backstage passes Quality increases by 2 when there are 10 days or less", function() {
    var days = 2;
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 44) ];
    for (var i = 0; i < days; i++) {
      update_quality();
    }
    expect((items[0].quality)).toEqual(48);
  });

  it("Backstage passes Quality increases by 3 when there are 5 days or less", function() {
    var days = 2;
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 44) ];
    for (var i = 0; i < days; i++) {
      update_quality();
    }
    expect((items[0].quality)).toEqual(50);
  });

  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function() {
    var days = 5;
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    for (var i = 0; i < days; i++) {
      update_quality();
    }
    expect((items[0].quality)).toEqual(80);
  });

  it("Aged Brie actually increases in Quality the older it gets", function() {
    var days = 3;
    items = [ new Item("Aged Brie", 2, 0) ];
    for (var i = 0; i < days; i++) {
      update_quality();
    }
    expect((items[0].quality)).toEqual(4);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    var days = 3;
    items = [ new Item("+5 Dexterity Vest", 2, 5) ];
    for (var i = 0; i < days; i++) {
      update_quality();
    }
    expect((items[0].quality)).toEqual(0);
  });

});
