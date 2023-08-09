import { useState } from "react"
import React from "react"
import { Component } from "react"
import { LanguageContext } from "./Provider"


export class Language extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            lang : ""
        }
    }

    handleLang = (event) => {
        this.setState({ lang: event.target.value})
    }


    render() {
        const {lang} = useState
        return(
            <>
            <h1> Langu </h1>


                <LanguageContext.Provider>
                    <select id="Lang" value={this.state.lang} onChange={this.handleLang}>
                    <option value="default"> Selection </option>
                    <option value="inglese "> English </option>
                    <option value="italiano"> Italian </option>
                    <option value="spagnolo"> Spanish </option>
                    </select>
                </LanguageContext.Provider>
            
                <LanguageContext.Consumer>
                      {(lang) => {
                        return <p>la lingua è : {this.state.lang}</p>;
                     }}
                </LanguageContext.Consumer>
                    
                
            </>
        )
    }
}