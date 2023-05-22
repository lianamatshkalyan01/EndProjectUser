import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import {store} from "./app/store"
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<BrowserRouter>
<Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
)
