import typeActions from '../header/type-actions'
import Call from '../../../utils-config/call'

const moduleUrl = 'header-items'

export const HeaderItems = (data) => async dispatch => {
    Call(`${moduleUrl}`, 'GET', data).then((reponse) => {
        dispatch({
            type: typeActions.HEADER_LOAD,
            payload: reponse.data
        })
    }).catch((e)=> {

    })
}
