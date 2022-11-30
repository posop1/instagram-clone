import { Route, Routes } from 'react-router-dom'
import { HomePage, UserPage } from './pages/'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/:id"
          element={<UserPage />}
        />
      </Routes>
    </>
  )
}

export default App
