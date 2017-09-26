var mongoose = require('mongoose')

var FeedSchema = new mongoose.Schema({
    description: {type: String, default: ''},
    name: {type: String, default: ''},
    price: {type:String, default: '0'},
    location: {type: String, trim:true, lowercase:true, default: ''},
    year: {type: String, default: ''},
    date: {type: String, default: ''},
    uId: {type: String, unique: true, default: ''},
    brand: {type: String, trim:true, lowercase:true, default: ''},
    title: {type: String, default: ''},
    type: {type: String, trim:true, lowercase:true, default: ''},
    category: {type: String, trim:true, lowercase:true, default: ''},
    size: {type: String, trim:true, lowercase:true, default: ''},
    link: {type: String, default: ''},
    status: {type: Boolean, default: false},
    isActive: {type: Boolean, default: false},
    gender: {type: String, default: ''},
    attachments: {type:Array, default:[]},
    timestamp: {type: Date, default: Date.now}
})

FeedSchema.methods.summary = function(){
  var summary  = {
      description: this.description,
      title: this.title,
      name: this.name,
      price: this.price,
      location: this.location,
      year: this.year,
      date: this.date,
      uId: this.uId,
      brand: this.brand,
      type: this.type,
      category: this.category,
      size: this.size,
      link: this.link,
      status: this.status,
      isActive: this.isActive,
      gender: this.gender,
      timestamp: this.timestamp,
      attachments: this.attachments,
      id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('FeedSchema', FeedSchema)
