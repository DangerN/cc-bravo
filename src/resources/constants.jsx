import React from 'react'

export const THEME = {
  'dark': <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css" rel="stylesheet"/>,
  'light': <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" rel="stylesheet"/>
}

export const BUTTON = {
  CONTEXT: path => {
    return {
      '/': 'home',
      '/_': 'board',
      '/_/_': 'thread'
    }[path.replace(/\w+/, '_').replace(/\d+/, '_')]
  },
  STYLE: {
    'home': {
      position: "fixed",
      bottom: "5vh",
      right: "5vw",
      display: 'none'
    },
    'board': {
      position: "fixed",
      bottom: "5vh",
      right: "5vw",
    },
    'thread': {
      position: "fixed",
      bottom: "5vh",
      right: "5vw",
    }
  }
}
