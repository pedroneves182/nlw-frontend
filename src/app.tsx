import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip"
import TripDetailsPage from "./pages/trip-details"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trips/trip123",
    element: <TripDetailsPage />
  },
])

export default function App() {
  return <RouterProvider router={router} />
}