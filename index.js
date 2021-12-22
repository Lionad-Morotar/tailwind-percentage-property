const plugin = require('tailwindcss/plugin')

const percentageProperty = plugin(({ e, addUtilities }) => {
  const lista = [...Array(101).keys()]

  const newUtilities = lista.map((x) => {
    return {
      [`.${e(`w-${x}%`)}`]: {
        width: `${x}%`,
      },
      [`.${e(`min-w-${x}%`)}`]: {
        'min-width': `${x}%`,
      },
      [`.${e(`max-w-${x}%`)}`]: {
        'max-width': `${x}%`,
      },
      [`.${e(`h-${x}%`)}`]: {
        height: `${x}%`,
      },
      [`.${e(`min-h-${x}%`)}`]: {
        'min-height': `${x}%`,
      },
      [`.${e(`max-h-${x}%`)}`]: {
        'max-height': `${x}%`,
      },
    }
  })

  addUtilities(newUtilities)
})

module.exports = percentageProperty
