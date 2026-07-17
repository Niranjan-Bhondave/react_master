import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Routes } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import TransactionContext from './context/TransactionContext.jsx'
import customerInformation from './Data/CustomerInformation.js'

createRoot(document.getElementById('root')).render(
    <TransactionContext value={customerInformation}>
    <RouterProvider router={Routes} />
    </TransactionContext>
)
