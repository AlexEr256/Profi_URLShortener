export default function formReducer(initialState={
    url:'',
    flag:false,
    slogan:'',
    data:{},
    error:null
}, action){
    switch(action.type){
        case "Set:URL":
            return{
                ...initialState,
                url:action.url
        }
        case "Set:SloganFlag":
            return{
                ...initialState,
                flag:action.flag
        }
        case "Set:Slogan":
            return{
                ...initialState,
                slogan:action.slogan
        }
        case "Set:Data":
            return{
                ...initialState,
                data:action.data
            }
        case "Set:Error":
            return{
                ...initialState,
                error:action.error
            }
        default:
             return initialState
    }
}