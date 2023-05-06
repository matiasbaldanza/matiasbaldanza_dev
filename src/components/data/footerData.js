import Link from '../Link'

export const footerData = {
  title: '',
  content: [
    {
      description: (
        <>
          Si no te atiendo el teléfono, prueba con <Link href='https://twitter.com/matiasbaldanza'>Twitter</Link>
        </>
      )
    },
    {
      description: (
        <>
          De <time dateTime='2023-05-06T09:30:00-03:00/2023-05-06T13:30:00-03:00'>lunes a viernes de 9:30 a 13:30 🇦🇷 (GMT-3)</time> <time dateTime='2023-05-06T14:30:00+02:00/2023-05-06T18:30:00+02:00'>/ 14:30 a 18:30 🇪🇸</time> estoy <strong>Conquistando el Front-End</strong> en <Link href='https://twitch.tv/matiasbaldanza'>Twitch</Link> (mis sesiones de estudio y proyectos).
        </>
      )
    },
    {
      description: (
        <>
          Los <time dateTime='2023-05-06T09:30:00-03:00/2023-05-06T13:30:00-03:00'>miércoles de 19:00 a 20:00 🇦🇷 (GMT-3)</time> facilito con otros mods una sesión de conversación en el canal de voz #English <Link href='https://discord.goncy.dev'>en el Discord de @Goncy</Link>
        </>

      )
    }
  ]

}
