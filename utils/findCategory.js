var _ = require('underscore')


module.exports = {


  findBrand: (text) => {
    var brand = ['giant', 'trek', 'specialized', 'cannondale', 'cervelo', 'pinarello', 's-works', 'scott', 'bianchi', 'canyon', 'cube', 'fuji', 'colnago', 'felt', 'wilier', 'bh', 'boardman']
    var lowercaseText = text.toLowerCase()
    var out = brand.filter(function(item){
      return lowercaseText.includes(item)
    })
    console.log(out)

    if(out[0] == null){
      var result = text.substr(0,text.indexOf(' '));
      return result

    }
    return out[0]
  },

  findLocation: (text) => {

    var location = ['kastrup', 'københavn', 'copenhagen', 'horsens', 'aarhus', 'aalborg', 'odense', 'sjælland', 'jylland', 'fyn', 'frederiksberg', 'randers', 'vejle', 'esbjerg', 'herning', 'hillerød', 'helsingør', 'hørsholm', 'farum']
    var lowercaseText = text.toLowerCase()
    var out = location.filter(function(item){
      return lowercaseText.includes(item)
    })
    if(out[0] == null){
      var Denmark = 'denmark'
      return Denmark
    }
    return out


  },
  findPrice: (str) => {
    var afterDot = str.substr(str.indexOf('.')+1);
    var each = (afterDot.split(" "))
    var result = each[0].replace( /,/g, "" );
    console.log(result)
    if(result == null){
      var Price = '1234'
      return Price
    }
    return result
  },

  findSize: (text) => {

    var size = ['44','46','48', '50', '52', '54', '56', '58', '60', '62']
    var lowercaseText = text.toLowerCase()
    var out = size.filter(function(item){
      return lowercaseText.includes(item)
    })
    if(out[0] == null){
      var cSize = 'x'
      return cSize
    }
    return out[0]
  },

  findYear: (text) => {

    var year = ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    var lowercaseText = text.toLowerCase()
    var out = year.filter(function(item){
      return lowercaseText.includes(item)
    })
    if(out[0] == null){
      var cYear = '20xx'
      return cYear
    }
    return out[0]
  },

  findCategory2: (text) => {
  var brand = ['giant', 'trek', 'specialized', 'cannondale', 'cervelo', 'pinarello', 's-works', 'scott', 'bianchi', 'canyon', 'cube', 'fuji', 'colnago', 'felt', 'wilier', 'bh', 'boardman']
  var year = ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
  const res = [...brand].reduce((acc, item) => {
    if(text.includes(item)){
      acc.push(item);
    }
    return acc;
  },[]);
  return res
},

findCategory3: (text) => {
  var brand = ['giant', 'trek', 'specialized', 'cannondale', 'cervelo', 'pinarello', 's-works', 'scott', 'bianchi', 'canyon', 'cube', 'fuji', 'colnago', 'felt', 'wilier', 'bh', 'boardman']
  var result = [brand].map(function(arr) {
      return arr.filter(function(word) {
          return text.indexOf(word) > -1;
      });
  }).reduce(function(prev, current) {
      return prev.concat(current);
  })
  return result
},

findCategory: (text) => {

  ///////////////////CYKLER//////////////////////////////

  var cykler = ['tricykel', 'racercykel','mountainbike', 'specialized', 'python', 'merida', 'crosscykel', 'giant', 'trek', 'ramme', 'racercykler', 'cervelo', 'pinarello', 's-works', 'scott', 'bianchi', 'canyon', 'cube', 'fuji', 'colnago', 'felt', 'planet', 'wilier', 'boardman', 'vision']

  var lowercaseText = text.toLowerCase()

  var cykel = cykler.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(cykel[0] != null){
    var aCykel = 'cykler'
    return aCykel
  }

  ///////////////////CYKLERBEKÆDNING//////////////////////////////

  var bekladning = ['cykelsko', 'rapha', 'cykelhjelm', 'hjelm', 'sko', 'bukser', 'trøje', 'cykelbukser', 'briller', 'handsker', 'jakke', 'cykeltrøje', 'cykeljakke', 'cykelbriller', 'cykelhandsker']

  var cykelbekladning = bekladning.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(cykelbekladning[0] != null){
    var aCykel = 'cykelbekladning'
    return aCykel
  }

  ///////////////////CYKELHJUL//////////////////////////////

  var cykelhjul = ['hjulsæt', 'hjul', 'cykeldæk', 'nav', 'fælge', 'eger', 'slanger', 'hjulværktøj', 'zipp', 'roval', 'mavic', 'reynolds']

  var hjul = cykelhjul.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(hjul[0] != null){
    var aCykel = 'cykelhjul'
    return aCykel
  }

  ///////////////////CYKELTILBEHØR//////////////////////////////

  var cykeltilbehor = ['sadler', 'sadel', 'frempinde', 'frempind', 'cykelcomputer', 'skærm', 'cykellygte', 'pumpe', 'cykelkuffert', 'værktøj', 'cykellås', 'garmin', 'polar', 'edge']

  var tilbehor = cykeltilbehor.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(tilbehor[0] != null){
    var aCykel = 'cykeltilbehor'
    return aCykel
  }

  ///////////////////CYKELKOMPONENTER//////////////////////////////

  var cykelkomponenter = ['gear', 'bremser', 'kranksæt', 'bremse','shimano', 'sram', 'ultregra', 'pedalarm', 'tiagra', 'dura', 'forskifter', 'bagskifter', 'krank', 'kassette', 'kabel', 'klinge', 'pedal', 'forgafel']

  var komponenter = cykelkomponenter.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(komponenter[0] != null){
    var aCykel = 'cykelkomponenter'
    return aCykel
  }

  return null

  console.log('TISSEMAND: ' + out)

},
findType: (text) => {

  ///////////////////TRICYKLER//////////////////////////////

  var tricykler = ['tricykel', 'tri', 'tri-cykel']

  var lowercaseText = text.toLowerCase()

  var tricykel = tricykler.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(tricykel[0] != null){
    var aCykel = 'tricykler'
    return aCykel
  }

  ///////////////////RACERCYKLER//////////////////////////////

  var racercykler = ['racer', 'racercykler', 'racercykel', 'giant', 'trek', 'specialized', 'cannondale', 'cervelo', 'pinarello', 's-works', 'scott', 'bianchi', 'canyon', 'cube', 'fuji', 'colnago', 'felt', 'wilier', 'bh', 'boardman']

  var lowercaseText = text.toLowerCase()

  var racercykel = racercykler.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(racercykel[0] != null){
    var aCykel = 'racercykler'
    return aCykel
  }

  ///////////////////MOUNTAINBIKE//////////////////////////////

  var mountainbike = ['mountainbike', 'mountainbikes', 'xo', 'giant', 'trek', 'specialized', 'cannondale']

  var lowercaseText = text.toLowerCase()

  var mountainbike = mountainbike.filter(function(item){
    return lowercaseText.includes(item)
  })

  if(mountainbike[0] != null){
    var aCykel = 'mountainbikes'
    return aCykel
  }

  return null

  console.log('TISSEMAND: ' + out)

}

}
