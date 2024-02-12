const flex = () => `
    display: flex;
`

const inlineFlex = () => `
    display: inline-flex;
`

// Flex direction
const flexDirectionColumn = () => `
    flex-direction: column;
`

const flexDirectionRow = () => `
    flex-direction: row;
`

const flexDirectionColumnReverse = () => `
    flex-direction: column-reverse;
`

const flexDirectionRowReverse = () => `
    flex-direction: row-reverse;
`

// Flex wrap
const flexWrap = () => `
    flex-wrap: wrap;
`

const flexNoWrap = () => `
    flex-wrap: nowrap;
`

const flexWrapReverse = () => `
    flex-wrap: wrap-reverse;
`

// Justify content
const justifyContentStart = () => `
    justify-content: flex-start;
`

const justifyContentEnd = () => `
    justify-content: flex-end;
`

const justifyContentCenter = () => `
    justify-content: center;
`

const justifyContentSpaceBetween = () => `
    justify-content: space-between;
`

const justifyContentSpaceAround = () => `
    justify-content: space-around;
`

const justifyContentSpaceEvenly = () => `
    justify-content: space-evenly;
`

// Align items
const alignItemsStart = () => `
    align-items: flex-start;
`

const alignItemsEnd = () => `
    align-items: flex-end;
`

const alignItemsCenter = () => `
    align-items: center;
`

const alignItemsStretch = () => `
    align-items: stretch;
`

const alignItemsBaseline = () => `
    align-items: baseline;
`

// Align content (for multi-line flex containers)
const alignContentStart = () => `
    align-content: flex-start;
`

const alignContentEnd = () => `
    align-content: flex-end;
`

const alignContentCenter = () => `
    align-content: center;
`

const alignContentSpaceBetween = () => `
    align-content: space-between;
`

const alignContentSpaceAround = () => `
    align-content: space-around;
`

const alignContentStretch = () => `
    align-content: stretch;
`
const flex1 = () => `
    flex: 1;
`

const flexShrink0 = () => `
    flex-shrink: 0;
`

export {
  flex,
  inlineFlex,
  flexDirectionColumn,
  flexDirectionRow,
  flexDirectionColumnReverse,
  flexDirectionRowReverse,
  flexWrap,
  flexNoWrap,
  flexWrapReverse,
  justifyContentStart,
  justifyContentEnd,
  justifyContentCenter,
  justifyContentSpaceBetween,
  justifyContentSpaceAround,
  justifyContentSpaceEvenly,
  alignItemsStart,
  alignItemsEnd,
  alignItemsCenter,
  alignItemsStretch,
  alignItemsBaseline,
  alignContentStart,
  alignContentEnd,
  alignContentCenter,
  alignContentSpaceBetween,
  alignContentSpaceAround,
  alignContentStretch,
  flex1,
  flexShrink0
}
