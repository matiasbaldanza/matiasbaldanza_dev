import Link from '../Link'
import { nameData, socialsData } from './socialsData'

export const footerData = {
  en: {
    title: (
      <>Hey! 👋 <br />
        I'm {nameData.firstName}. <br />
      </>),
    content: [
      {
        description: (
          <>
            I'm <strong>Conquering Front-End Development</strong> (in Spanish) <time dateTime='2023-05-06T09:30:00-03:00/2023-05-06T13:30:00-03:00'>Monday to Friday from 9:30 to 13:30 🇦🇷 (GMT-3)</time> <time dateTime='2023-05-06T14:30:00+02:00/2023-05-06T18:30:00+02:00'>/ 14:30 to 18:30 🇪🇸</time> on <Link href={socialsData.twitch.url}>{socialsData.twitch.name}</Link> (my personal study and project sessions.)
          </>
        )
      },
      {
        description: (
          <>
            Every <time dateTime='2023-05-06T09:30:00-03:00/2023-05-06T13:30:00-03:00'>Wednesday, from 19:00 to 20:00 🇦🇷 (GMT-3)</time>, I facilitate with other moderators an English conversation session at the #English voice channel on <Link href={socialsData.discordGoncy.en.url}>en el {socialsData.discordGoncy.es.name}</Link>
          </>

        )
      },
      {
        description: (
          <>
            The easiest way to reach me is on <Link href={socialsData.twitter.url}>{socialsData.twitter.name}</Link>
          </>
        )
      },
      {
        description: (
          <>
            I'm looking for my first software development job. <br />
            Here's my <Link href={socialsData.linkedin.url}>{socialsData.linkedin.name}</Link>
          </>
        )
      }
    ]
  },
  es: {
    title: (
      <>¡Hola! 👋 <br />
        Soy {nameData.firstName}. <br />
      </>),
    content: [
      {
        description: (
          <>
            De <time dateTime='2023-05-06T09:30:00-03:00/2023-05-06T13:30:00-03:00'>lunes a viernes de 9:30 a 13:30 🇦🇷 (GMT-3)</time> <time dateTime='2023-05-06T14:30:00+02:00/2023-05-06T18:30:00+02:00'>/ 14:30 a 18:30 🇪🇸</time> estoy <strong>Conquistando el Front-End</strong> en <Link href={socialsData.twitch.url}>{socialsData.twitch.name}</Link> (mis sesiones de estudio y proyectos).
          </>
        )
      },
      {
        description: (
          <>
            Los <time dateTime='2023-05-06T09:30:00-03:00/2023-05-06T13:30:00-03:00'>miércoles de 19:00 a 20:00 🇦🇷 (GMT-3)</time> facilito con otros mods una sesión de conversación en el canal de voz #English <Link href={socialsData.discordGoncy.en.url}>en el {socialsData.discordGoncy.es.name}</Link>
          </>

        )
      },
      {
        description: (
          <>
            La forma más fácil de contactarme es por <Link href={socialsData.twitter.url}>{socialsData.twitter.name}</Link>
          </>
        )
      },
      {
        description: (
          <>
            Estoy buscando mi primer trabajo como desarrollador. <br />
            Aquí está mi <Link href={socialsData.linkedin.url}>{socialsData.linkedin.name}</Link>
          </>
        )
      }
    ]
  }
}
