import styled from 'styled-components'
import ButtonComponent from './components/button/Button'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TRootState, TAppDispatch } from './redux/store'
import { fetchTheme } from './redux/asyncActions/themeAsyncActions'
import { ButtomVariants } from './constants/domConstants'

type AppProps = {
  children?: React.ReactNode
  className?: string
}

const defaultTheme: DefaultTheme = {
  colors: {
    bodyBackground: '#333',
    bodyText: '#fff',
    borderColorStandard: 'black'
  },
}

const AppComponent: React.FC<AppProps> = () => {
  const dispatch: TAppDispatch = useDispatch()

  const theme = useSelector((state: TRootState) => state.theme.currentTheme)
  const isFetching = useSelector((state: TRootState) => state.theme.isFetching)

  useEffect(() => {
    dispatch(fetchTheme())
  }, [dispatch])

  if (isFetching) {
    return <div>Fetching theme...</div>
  }

  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <div>
        <ButtonComponent variant={ButtomVariants.xl}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.l}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.m}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.s}>click me</ButtonComponent>
        <ButtonComponent variant={ButtomVariants.xs}>click me</ButtonComponent>
        <button onClick={() => dispatch(fetchTheme())}>Refresh theme</button>
      </div>
    </ThemeProvider>
  )
}

const App = styled(AppComponent)``

export default App
