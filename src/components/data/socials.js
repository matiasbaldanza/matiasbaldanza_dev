export const icons = {
  twitter: 'twitter',
  github: 'github',
  linkedin: 'linkedin',
  twitch: 'twitch',
  discord: 'discord'
}

export const nameData = {
  first: 'Matías',
  last: 'Baldanza',
  full: `${this.first} ${this.last}`
}

export const socialsData = {
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/matiasbaldanza',
    icon: icons.twitter
  },
  github: {
    name: 'GitHub',
    url: 'https://github.com/matiasbaldanza',
    icon: icons.github
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matiasbaldanza/',
    icon: icons.linkedin
  },
  twitch: {
    name: 'Twitch',
    url: 'https://twitch.tv/matiasbaldanza',
    icon: icons.twitch
  },
  discord: {
    name: 'Discord',
    url: 'https://discord.matiasbaldanza.dev',
    icon: icons.discord
  },
  discordGoncy: {
    en: {
      name: '@Goncy\'s Discord',
      url: 'https://discord.goncy.dev',
      icon: icons.discord
    },
    es: {
      name: 'Discord de @Goncy',
      url: this.en.discordGoncy.url,
      icon: icons.discord
    }
  }
}
