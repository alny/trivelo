import constants from '../constants'

var initialState = {
  selectedTopCategory: 'cykler'
  }

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){

    case constants.TOP_SELECTED:
        console.log('NAVBAR_SELECTED ' + JSON.stringify(action.payload))
        updated['selectedTopCategory'] = action.payload
        return updated


  return updated


    default:
      return state
  }
}
