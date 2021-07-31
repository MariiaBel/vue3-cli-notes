export const process = {
  prod: true,
}

export const site = {
  home: process.env.NODE_ENV === 'production' ? '/vue-cli-notes/public/' : '/'
}

export const links= [
  {
    title: 'home',
    alias: 'home',
  },
  {
    title: 'about',
    alias: 'about',
  }
]
