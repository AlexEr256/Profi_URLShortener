
import React from 'react'
import {connect} from 'react-redux'
import { SetUrl, SetSloganFlag, SetSlogan, PostDataThunk } from '../../redux/actions/formActions'
import UrlFormComponent from '../component/UrlFormComponent';

function UrlFromContainer({url, flag, data, slogan, SetUrl, SetSloganFlag, SetSlogan, PostData}){

    function UrlChange(e){
        SetUrl(e.target.value);
    }

    function CheckboxChange(e){
        SetSloganFlag(!flag);
        if(flag === false){
            SetSlogan('');
        }
    }

    function SloganChange(e){
        SetSlogan(e.target.value);
    }

    function SendData(e){
        e.preventDefault()   
        PostData(url, flag, slogan)
    }

    return (
        <UrlFormComponent
            flag={flag}
            slogan={slogan}
            data={data}
            UrlChange={UrlChange}
            CheckboxChange={CheckboxChange}
            SloganChange={SloganChange}
            SendData={SendData}
        />
    )
}


function mapStateToProps(state){
    return{
        url:state.formReducer.url,
        flag: state.formReducer.flag,
        slogan: state.formReducer.slogan,
        data: state.formReducer.data

    }
}

function mapDispatchToProps(dispatch){
    return {
        SetUrl: (url) => dispatch(SetUrl(url)),
        SetSloganFlag: (flag) => dispatch(SetSloganFlag(flag)),
        SetSlogan: (slogan) => dispatch(SetSlogan(slogan)),
        PostData: (url, flag, slogan) => dispatch(PostDataThunk(url, flag, slogan))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlFromContainer)