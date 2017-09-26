import constants from '../constants'
import APIManager from '../utils/APIManager'

const getRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.get(path, params)
      .then(response => {
        //console.log('GET: ' + JSON.stringify(response))

        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response


      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err
      })
}

const postRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.post(path, params)
      .then(response => {
        //console.log('POST: ' + JSON.stringify(response))
        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response

      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err

      })
}

const putRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.handlePut(path, params)
      .then(response => {
        //console.log('POST: ' + JSON.stringify(response))

        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response

      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err
      })
}

const deleteData = (path, params, actionType) => {
	return (dispatch) => APIManager
		.handleDelete(path)
		.then(response => {
			if (actionType != null){
				dispatch({
					type: actionType,
					params: response.result || response.results || null
				})
			}

			return response
		})
		.catch(err => {
			throw err
		})
}


export default {

  register: (credentials) => {
  return (dispatch) => {
    return dispatch(postRequest('/account/register', credentials, constants.PROFILE_CREATED))
    }
  },
  checkCurrentUser: () => {
    return (dispatch) => {
      return dispatch(getRequest('/account/currentuser', {}, constants.USER_LOGGED_IN))
    }
  },
  login: (credentials) => {
    return (dispatch) => {
      return dispatch(postRequest('/account/login', credentials, constants.USER_LOGGED_IN))
    }
  },
  logOut: () => {
    return (dispatch) => {
      return dispatch(getRequest('/account/logout', {}, constants.USER_LOGGED_IN))
    }
  },

  getAllBikes: (params) => {
        return (dispatch) => {
          return dispatch(getRequest('/category/sorted', params, constants.FETCH_ALL_BIKES))
        }
  },
  getFrontpage: (params) => {
        return (dispatch) => {
          return dispatch(getRequest('/category/frontpage', params, constants.FETCH_FRONT_PAGE))
        }
  },
  sendContactEmail: (params) => {
        return (dispatch) => {
          return dispatch(getRequest('/category/email', params, constants.SEND_CONTACT_EMAIL))
        }
  },
  deleteFeed: (id, params) => {
        return dispatch => {
          return dispatch(deleteData('/api/deleteFeed/'+id, null, constants.DELETE_FEED))
          }
  },
  selectTopCategory: (category) => {
  return {
    type: constants.TOP_SELECTED,
    payload: category
  }
}

}
