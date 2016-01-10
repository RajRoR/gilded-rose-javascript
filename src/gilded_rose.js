function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality += 1
  }
}

function decreaseQuality(item) {
  if (item.quality > 0) {
    item.quality -= 1
  }
}

function isNotSulfuras(item) {
  return item.name != 'Sulfuras, Hand of Ragnaros'
}

function isNotAgedBrie(item) {
  return item.name != 'Aged Brie'
}

function isNotBackstagePasses(item) {
  return item.name != 'Backstage passes to a TAFKAL80ETC concert'
}

function updateSellIn(item) {
  if (isNotSulfuras(item)) {
    item.sell_in -= 1;
  }
}

function sulfurasItem(item) {
  if (isNotSulfuras(item)) {
    decreaseQuality(item)
    conjuredItem(item)
  }
}

function conjuredItem(item) {
  if ((item.name.toLowerCase().indexOf("conjured") > -1)) {
    decreaseQuality(item)
  }
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (isNotAgedBrie(items[i]) && isNotBackstagePasses(items[i])) {
      sulfurasItem(items[i])
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
      if (isNotAgedBrie(items[i])) {
        if (isNotBackstagePasses(items[i])) {
          sulfurasItem(items[i])
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
