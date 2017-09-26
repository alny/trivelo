"use strict";

module.exports = {

  subNavbar: function (page) {
    if (page == "cykler") {
      return ["tricykler", "racercykler", "mountainbikes", "crosscykler", "rammer"];
    }
    if (page == "cykelbekladning") {
      return ["cykelsko", "cykelhjelme", "cykelbukser", "cykeltrojer", "veste", "cykeljakker", "cykelbriller", "cykelhandsker", "diverse"];
    }
    if (page == "cykelhjul") {
      return ["hjulsat", "hjul", "cykeldak", "nav", "falge", "eger", "slanger", "hjulvarktoj"];
    }
    if (page == "cykeltilbehor") {
      return ["cykelcomputere", "skarme", "cykellygter", "pumper", "cykelkuffert", "varktoj", "cykellase", "diverse"];
    }
    if (page == "cykelkomponenter") {
      return ["gear", "bremser", "forskifter", "bagskifter", "sadler", "frempinde", "krank", "kassette", "klinger", "styr", "forgafler", "pedaler", "diverse"];
    }
    if (page == "løbetilbehør") {
      return ["lobeur", "lobebalte", "lobebriller", "drikkedrunk"];
    }
    if (page == "løbeudstyr-mænd") {
      return ["lobetroje", "lobebukser", "lobesko", "lobehue"];
    }
    if (page == "løbeudstyr-kvinder") {
      return ["lobetroje", "lobebukser", "lobesko", "lobehue"];
    }
    if (page == "våddragte") {
      return ["gear", "bremser", "kabler", "pedaler", "forgafler"];
    }
    if (page == "svømmetøj-mænd") {
      return ["gear", "bremser", "kabler", "pedaler", "forgafler"];
    }
    if (page == "svømmetøj-kvinder") {
      return ["gear", "bremser", "kabler", "pedaler", "forgafler"];
    }
    if (page == "svømmeudstyr") {
      return ["gear", "bremser", "kabler", "pedaler", "forgafler"];
    }
  },
  showAfterCountry: function (text) {
    var patt1 = /\n/;
    var result = text.search(patt1);
    text = text.substring(result);
    return text;
  },

  findLocation: function (str) {
    var matches = str.match(/\n([^\s]+).*?([^\s]+)\n/);
    var data = matches[0];
    var each = data.split(" ").splice(1);
    var trimmed = each[1].replace(/(^,)|(,$)/g, "");
    return trimmed;
  },

  findString: function (string, subString, index) {
    var patt1 = /\n/;
    var test = string.split(subString, index).join(subString).length;
    var result = string.substring(test).replace("Denmark", "");

    if (result == null) {
      return string;
    }
    return result;
  },
  findCategory: function (text) {
    var brand = ["giant", "trek", "specialized", "cannondale", "cervelo", "pinarello", "s-works", "scott", "bianchi", "canyon", "cube", "fuji", "colnago", "felt", "wilier", "bh", "boardman"];
    var size = ["46", "48", "50", "52", "54", "56", "58", "60", "62"];
    var year = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];

    var keywords = brand.concat(size, year);
    var out = keywords.filter(function (item) {
      return text.includes(item);
    });
    return out;
  },
  findCategory2: function (text) {
    var brand = ["giant", "trek", "specialized", "cannondale", "cervelo", "pinarello", "s-works", "scott", "bianchi", "canyon", "cube", "fuji", "colnago", "felt", "wilier", "bh", "boardman"];
    var size = ["46", "48", "50", "52", "54", "56", "58", "60", "62"];
    var year = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];


    var result = [brand, size, year].map(function (arr) {
      return arr.filter(function (word) {
        return text.indexOf(word) > -1;
      });
    }).reduce(function (prev, current) {
      return prev.concat(current);
    });
    return result;
  },
  findCategory3: function (text) {
    var brand = ["giant", "trek", "specialized", "cannondale", "cervelo", "pinarello", "s-works", "scott", "bianchi", "canyon", "cube", "fuji", "colnago", "felt", "wilier", "bh", "boardman"];

    var out = brand.filter(function (item) {
      return text.includes(item);
    });
    return out;
  }
};