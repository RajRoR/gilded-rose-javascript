function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1
  }
}

function decreaseQuality(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1
  }
}

function updateSellIn(item){
  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sell_in = item.sell_in - 1;
  }
}

function ConjuredItem(item){
  this.item
  this.update = function(){

  }
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        decreaseQuality(items[i])
        if ((items[i].name.toLowerCase().indexOf("conjured") > -1)) {
          decreaseQuality(items[i])
        }
      }

    } else {
      increaseQuality(items[i])
      if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].sell_in < 11) {
          increaseQuality(items[i])
        }
        if (items[i].sell_in < 6) {
          increaseQuality(items[i])
        }
      }
    }

    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            decreaseQuality(items[i])
            if ((items[i].name.toLowerCase().indexOf("conjured") > -1)) {
              decreaseQuality(items[i])
            }
          }

        } else {
          items[i].quality = 0
        }
      } else {
        increaseQuality(items[i])
      }
    }
    updateSellIn(items[i])
  }
}