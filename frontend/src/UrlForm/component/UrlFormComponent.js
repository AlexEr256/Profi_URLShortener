import React from 'react'

export default function UrlFormComponent({flag, slogan, data, UrlChange, CheckboxChange, SloganChange, SendData}){
    return(
    <div>
        <h1>URL Shortener</h1>
        <form>
            <label>
                <input required={true} onChange={UrlChange} placeholder="URL"></input>
                {data.errorflag === false ? null : <span>{data.error}</span>}
            </label>
            <p>
                <label>
                    <input onChange={CheckboxChange}  type="checkbox" />
                    <span>Show slogan input for building friendly URL?</span>
                </label>
            </p>

            <input value={slogan} onChange={SloganChange} className={flag===false ? 'hide' : 'show'}  placeholder="slogan"></input>

            <button onClick={SendData} className="btn waves-effect waves-light" type="submit">
                Submit
            </button>
        </form>
    </div>
    )
}