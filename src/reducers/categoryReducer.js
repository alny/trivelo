import constants from '../constants'

var initialState = {

  allFrontpage: null

  }

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){

    case constants.FETCH_ALL_BIKES:
        console.log('FETCH_ALL_BIKES ' + JSON.stringify(action.params))
        const keys = Object.keys(action.params)
        keys.forEach((key, i) => {
            const value = action.params[key]
            updated[value] = action.payload
        })
        console.log('UPDATED ' + JSON.stringify(updated))

        return updated

    case constants.FETCH_FRONT_PAGE:
        console.log('FETCH_FRONT_PAGE: ' + JSON.stringify(action.payload))
        updated['allFrontpage'] = action.payload
        return updated


    default:
      return state
  }
}
