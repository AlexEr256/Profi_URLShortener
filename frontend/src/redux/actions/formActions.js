import axios from 'axios'

export function SetUrl(url){
    return{
        type:"Set:URL",
        url
    }
}

export function SetSloganFlag(flag){
    return{
        type:"Set:SloganFlag",
        flag
    }
}

export function SetSlogan(slogan){
    return{
        type:"Set:Slogan",
        slogan
    }
}

export function SetData(data){
    return{
        type:"Set:Data",
        data
    }
}

export function SetError(error){
    return{
        type:"Set:Error",
        error
    }
}

export function PostDataThunk(url, flag, slogan){
    return function(dispatch){
        axios({
            method:"POST",
            url:'http://localhost:3000', 
            data: {
                url,
                flag,
                slogan,

            }
        }).then(function(response){
            let {data} = response;
            console.log(response)
            dispatch(SetData(data));

        }).catch(function(error){
            dispatch(SetError(error))
        })
    }
}