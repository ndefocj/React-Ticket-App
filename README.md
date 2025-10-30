# React: Ticket Management App

This is the React implementation of the Ticket App.

## Tech Stack

* **Framework:** React 18
* **Bundler:** Vite
* **Routing:** React Router v6
* **State Management:** React Context (`AuthContext.jsx`)
* **Notifications:** React Toastify
* **API Calls:** `fetch` API

## Project Structure

* `src/contexts/AuthContext.jsx`: Manages global auth state (token, login, logout) and persists the session to `localStorage`.
* `src/components/ProtectedRoute.jsx`: A wrapper component that checks for a valid token in `AuthContext` and redirects to `/auth` if not found.
* `src/pages/`: Contains all main page components (Landing, Auth, Dashboard, Tickets).
* `src/components/TicketFormModal.jsx`: The reusable modal component for both creating and editing tickets.

## Test User

* **Email:** `test@example.com`
* **Password:** `password123`