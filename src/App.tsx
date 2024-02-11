import styled from 'styled-components'
import ButtonComponent from './components/button/Button'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TRootState, TAppDispatch } from './redux/store'
import { fetchTheme } from './redux/asyncActions/themeAsyncActions'
import { ButtomVariants } from './constants/domConstants'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './modules/Dashboard'
import { loginUser } from './redux/asyncActions/userAsyncActions'
import { AdminRoutes, PassengerRoutes } from './routes'

type AppProps = {
  children?: React.ReactNode
  className?: string
}

const AppComponent: React.FC<AppProps> = () => {
  const dispatch: TAppDispatch = useDispatch()

  const theme = useSelector((state: TRootState) => state.theme.currentTheme)
  const isFetching = useSelector((state: TRootState) => state.theme.isFetching)
  const user = useSelector((state: TRootState) => state.user.currentUser)
  const isFetchingUser = useSelector((state: TRootState) => state.user.isFetching)

  useEffect(() => {
    dispatch(fetchTheme())
  }, [dispatch])

  if (isFetching) {
    return <div>Fetching theme...</div>
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ButtonComponent variant={ButtomVariants.xl}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.l}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.m}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.s}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.xs}>click me</ButtonComponent>
        <button onClick={() => dispatch(fetchTheme())}>Refresh theme</button>
        <button onClick={() => dispatch(loginUser())}>Login User</button>
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard userName={isFetchingUser ? 'Logging In' : user}/>} >
          <Route path="passengers/*" element={<PassengerRoutes />} />
          <Route path="admin/*" element={<AdminRoutes />} />
        </Route>
      </Routes>
      <Link to="/dashboard">Go to Dashboard</Link>
    </ThemeProvider>
  )
}

const App = styled(AppComponent)``

export default App
