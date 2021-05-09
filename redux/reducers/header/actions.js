import typeActions from '../header/type-actions'
import Call from '../../../utils-config/call'

const moduleUrl = 'header-items'

export const HeaderItems = () => {
    return (dispatch) => {
        Call(`${moduleUrl}`, 'GET', null).then((response) => {
            dispatch({
                type: typeActions.HEADER_LOAD,
                payload: response.data
            })
        }).catch((e)=> {
        })
    }
}

