import { createAsyncThunk } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components'

function getRandomColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256) // Random integer between 0 and 255
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  // Construct the color string in hexadecimal format (#RRGGBB)
  const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`

  return color
}

const fetchTheme = createAsyncThunk<DefaultTheme>(
  'theme/fetchTheme',
  async () => {
    const apiPromise = new Promise((res) => {
      const data: DefaultTheme = {
        colors: {
          bodyBackground: `${getRandomColor()}`,
          bodyText: `${getRandomColor()}`,
          borderColorStandard: `${getRandomColor()}`,
          headerBackground: `${getRandomColor()}`,
          leftNavBackground: `${getRandomColor()}`,
        },
      }

      setTimeout(() => res(data), 2000)
    })

    const data = await apiPromise
    return data
  }
)

export { fetchTheme }
