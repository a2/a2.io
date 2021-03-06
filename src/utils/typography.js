import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

import 'typeface-montserrat'
import 'typeface-lato'

Wordpress2016.bodyFontFamily = ['Lato', 'Helvetica', 'sans-serif']
Wordpress2016.headerFontFamily = ['Lato', 'Helvetica', 'sans-serif']
Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: '#00a88f',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)
const { options, rhythm, scale } = typography
export { options, rhythm, scale, typography as default }
