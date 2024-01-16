/* Store */
import { store } from './store/store'
import { Provider } from 'react-redux'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { JournalApp } from './JournalApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <JournalApp/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
