import React from 'react'
import AnswerComponent from '../component/AnswerComponent'
import {connect} from 'react-redux'


function AnswersContainer({data}){
    return (
        data.errorFlag === false ? 
            <AnswerComponent data={data}/> : null     
    )
    }

function mapStateToProps(state){
    return{
        data:state.formReducer.data
    }
}

function mapDispatchToProps(dispatch){
    return {} 
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersContainer)