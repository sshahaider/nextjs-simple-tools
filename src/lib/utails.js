export const publisher = {
  "@type": "Organization",
  "name": "YFBTools",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yfbtools.com/logo.png"
  }
}

export const caseConvertersList = [
  {
    title: 'UpperCase',
    link: '/text/case-converter/uppercase',
    dec: 'CONVERT TEXT TO UPPER CASE ONLINE'
  },
  {
    title: 'LowerCase',
    link: '/text/case-converter/lowercase',
    dec: 'convert text to lower case online'
  },
  {
    title: 'Capitalized',
    link: '/text/case-converter/capitalizedcase',
    dec: 'Convert Text To Capitalized Case Online'
  },
  {
    title: 'Title Case',
    link: '/text/case-converter/titlecase',
    dec: 'Convert Text to Title Case Online'
  },
  {
    title: 'Start Case',
    link: '/text/case-converter/startcase',
    dec: 'Convert Text To Start Case Online'
  },
  {
    title: 'SentenceCase',
    link: '/text/case-converter/sentencecase',
    dec: 'Convert text to sentence case online'
  },
  {
    title: 'AlternatingCase',
    link: '/text/case-converter/alternatingcase',
    dec: 'CoNvErT TeXt tO AlTeRnAtInG CaSe oNlInE'
  },
  {
    title: 'CamelCase',
    link: '/text/case-converter/camelcase',
    dec: 'convertTextToCamelCaseOnline'
  },
  {
    title: 'PascalCase',
    link: '/text/case-converter/pascalcase',
    dec: 'ConvertTextToPascalCaseOnline'
  },
  {
    title: 'HyphenCase',
    link: '/text/case-converter/hyphencase',
    dec: 'convert-text-to-hyphen-case-online'
  },
  {
    title: 'SnakeCase',
    link: '/text/case-converter/snakecase',
    dec: 'convert_text_to_snake_case_online'
  },
  {
    title: 'Studly Caps Case',
    link: '/text/case-converter/studly-capscase',
    dec: 'CoNvErT TeXt tO StUdLy cApS CaSe oNlInE'
  },
  {
    title: 'Kebab Case',
    link: '/text/case-converter/kebabcase',
    dec: 'convert-text-to-kebab-case-online'
  },
  {
    title: 'Ada Case',
    link: '/text/case-converter/adacase',
    dec: 'CONVERT_TEXT_TO_ADA_CASE_ONLINE'
  },
  {
    title: 'Cobol Case',
    link: '/text/case-converter/cobolcase',
    dec: 'CONVERT-TEXT-TO-COBOL-CASE-ONLINE'
  },
  {
    title: 'Macro Case',
    link: '/text/case-converter/macrocase',
    dec: 'CONVERT_TEXT_TO_MACRO_CASE_ONLINE'
  },
  {
    title: 'Train Case',
    link: '/text/case-converter/traincase',
    dec: 'Convert-Text-To-Train-Case-Online'
  },
  {
    title: 'Path Case',
    link: '/text/case-converter/pathcase',
    dec: 'Convert/Text/To/Path/Case/Online'
  },
  {
    title: 'Screaming Snake Case',
    link: '/text/case-converter/screaming-snakecase',
    dec: 'CONVERT_TEXT_TO_SCREAMING_SNAKE_CASE_ONLINE'
  },
  {
    title: 'Dot Notation Case',
    link: '/text/case-converter/dot-notationcase',
    dec: 'convert.text.to.dot.notation.case.online'
  },
]

export const encodeDecodeList = [
  {
    title: 'UTF-8',
    link: '/text/encode-decode/utf-8',
    dec: 'CONVERT TEXT TO UPPER CASE ONLINE'
  },
  {
    title: 'UTF-16',
    link: '/text/encode-decode/utf-16',
    dec: 'CONVERT TEXT TO UPPER CASE ONLINE'
  },
]

export function colorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  let rgb = '#',
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};