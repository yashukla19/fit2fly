import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TRootState, TAppDispatch } from './redux/store'
import { fetchTheme } from './redux/asyncActions/themeAsyncActions'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './modules/Dashboard/Dashboard'
import { AdminRoutes, PassengerRoutes } from './routes'
import { createGlobalStyle } from 'styled-components';

type AppProps = {
  children?: React.ReactNode
  className?: string
}

const GlobalStyle = createGlobalStyle`
/* Basic CSS Reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

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
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="passengers/*" element={<PassengerRoutes />} />
            <Route path="admin/*" element={<AdminRoutes />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

const App = styled(AppComponent)`
`

export default App
