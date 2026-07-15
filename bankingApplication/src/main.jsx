import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Routes } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={Routes} />
)
