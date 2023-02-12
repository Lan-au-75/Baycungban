import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout1 from './layouts/layout1/Layout1'
import Layout2 from './layouts/layout2/LayOut2'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout1 />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/promotion',
                element: <Layout1 />,
            },

            {
                path: '/Flight Schedule',
                element: <Layout1 />,
            },
            {
                path: '/About us',
                element: <Layout1 />,
            },
            {
                path: '/Payment Guide',
                element: <Layout1 />,
            },
        ],
    },
    {
        path: '/list',
        element: <Layout2 />,
    },
])

export default function App() {
    return <RouterProvider router={router} />
}
