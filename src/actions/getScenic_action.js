

export const getScenic_action = (action)=>(dispatch) => {
    
    var data = new FormData();
    data.append("showapi_appid", 68419);
    data.append("showapi_sign", "832c437e768549a49174d11d81951463");
    data.append("keyword", action.name);
    data.append("page", action.page);
    fetch('http://route.showapi.com/268-1', {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
        }),
        body: data
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: action.type,
                scenicArr: data.showapi_res_body.pagebean.contentlist
            })
        })
        .catch(err => console.log(err))
}