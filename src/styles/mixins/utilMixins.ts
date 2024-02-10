const position = (
  type: 'absolute' | 'relative' | 'fixed' | 'sticky',
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  left?: number | string,
  zIndex?: number
) => `
      position: ${type};
      ${top !== undefined ? `top: ${typeof top === 'number' ? `${top}px` : top};` : ''}
      ${right !== undefined ? `right: ${typeof right === 'number' ? `${right}px` : right};` : ''}
      ${bottom !== undefined ? `bottom: ${typeof bottom === 'number' ? `${bottom}px` : bottom};` : ''}
      ${left !== undefined ? `left: ${typeof left === 'number' ? `${left}px` : left};` : ''}
      ${zIndex !== undefined ? `z-index: ${zIndex};` : ''}
  `

export { position }
