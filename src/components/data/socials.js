export const icons = {
  twitter: 'twitter',
  github: 'github',
  linkedin: 'linkedin',
  twitch: 'twitch',
  discord: 'discord'
}

export const name = {
  en: {
    first: 'Matías',
    last: 'Baldanza',
    full: `${this.first} ${this.last}`
  },
  es: {
    first: 'Matías',
    last: 'Baldanza',
    full: `${this.first} ${this.last}`
  }
}

export const socialsData = {
  en: {
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
      name: '@Goncy\'s Discord',
      url: 'https://discord.goncy.dev',
      icon: icons.discord
    }
  },
  es: {
    twitter: {
      name: this.en.twitter.name,
      url: this.en.twitter.url,
      icon: icons.twitter
    },
    github: {
      name: this.en.github.name,
      url: this.en.github.url,
      icon: icons.github
    },
    linkedin: {
      name: this.en.linkedin.name,
      url: this.en.linkedin.url,
      icon: icons.linkedin
    },
    twitch: {
      name: this.en.twitch.name,
      url: this.en.twitch.url,
      icon: icons.twitch
    },
    discord: {
      name: this.en.discord.name,
      url: this.en.discord.url,
      icon: icons.discord
    },
    discordGoncy: {
      name: 'Discord de @Goncy',
      url: this.en.discordGoncy.url,
      icon: icons.discord
    }
  }
}
