import { createSlice } from "@reduxjs/toolkit"
import { html, css, js } from "../assets/index"

const initialState = [
    {
        id: 1,
        lang: "html",
        imgURL: html,
        buttonContent: "HTML",
        code: `
        <div>
        <h1>Editeur de code avec React </h1>
        <p>Codez directement sur votre navigateur</p>
        </div>  
        `
    },
    {
        id: 2,
        lang: "css",
        imgURL: css,
        buttonContent: "CSS",
        code: `body{
        font-family: Roboto, sans-serif;
        padding: 25px;
        color: #111;
        background-color: #f1f1f1
        }`
    },
    {
        id: 3,
        lang: "javascript",
        imgURL: js,
        buttonContent: "JacaScript",
        code: `console.log("Hello World !")`
    },
]

export const codeUpdater = createSlice({
    name: "coded-updater",
    initialState,
    reducers: {
        updateCode: (state, action) => {
            state.find(object => object.id === action.payload.id).code = action.payload.value
        }
    }
})

export const { updateCode } = codeUpdater.actions
export default codeUpdater.reducer