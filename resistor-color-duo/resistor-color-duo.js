const colorCode = (color) => COLORS.indexOf(color)
export const value = (colors) => Number(colors.map(colorCode).join(''))
export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];