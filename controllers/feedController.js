var Feed = require('../models/Feed')
var Promise = require('bluebird')


module.exports = {

  get: function(params){
        return new Promise(function(resolve, reject){
          Feed.find(params, function(err, feeds){
            if(err){
              reject(err)
              return
            }
            resolve(feeds)
          })
        })
  },

  getById: function(id){
        return new Promise(function(resolve, reject){
          Feed.findById(id, function(err, feed){
            if(err){
              reject(new Error('Feed not Found'))
              return
            }
            if(feed == null){
              reject(new Error('Feed not Found'))
            }


            resolve(feed)
          })
        })
  },

  create: function(params){
        return new Promise(function(resolve, reject){
          Feed.create(params, function(err, feed){
            if(err){
              reject(err)
              return
            }
            resolve(feed)
          })
        })
  },

  put: function(id, params){
  return new Promise(function(resolve, reject){

      Feed.findByIdAndUpdate(id, params, {new:true}, function(err, feed){
        if (err){
          reject(err)
          return
        }

        resolve(feed.summary())
      })
  })
},

delete: function(id){
		return new Promise(function(resolve, reject){
			Feed.findByIdAndRemove(id, function (err){
			    if (err) {
					reject(err)
					return
			    }

			    resolve()
			})
		})
	}


}
