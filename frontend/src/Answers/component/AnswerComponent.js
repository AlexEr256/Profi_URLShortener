import React from 'react'

export default function AnswerComponent({data}){
    return(
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Ответ сервера</span>
                <p>{data.answer ?  "Ваш URL найден в базе данных" : "Новый URL создан"}</p>
            </div>
            <div class="card-action">
                {data.answer ?
                    <a href={`${data.answer}`}>{data.answer}</a> :
                data.shortUrl ?
                    <a href={`${data.shortUrl}`}>{data.shortUrl}</a> :
                    <a href={`${data.friendlyUrl}`}>{data.friendlyUrl}</a> }

            </div>
        </div>
    )
}