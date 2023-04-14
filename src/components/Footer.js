import Link from "next/link"

export default function Footer() {
    return (
        <footer className='py-6 flex flex-col gap-2'>
            <p>Si quieres saber en qué ando, siempre sale primero en <Link href='https://twitter.com/matiasbaldanza'>Twitter</Link>.</p>
            <p>De <time>lunes a viernes de 9:30 a 13:30 🇦🇷 (GMT-3) / 14:30 a 18:30 🇪🇸</time> estoy <strong>Conquistando el Front-End</strong> en <Link href='https://twitch.tv/matiasbaldanza'>Twitch</Link> (mis sesiones de estudio y proyectos). <br /><em>Ya somos 4600+!</em></p>
            <p>Los <time datetime='19:00-20:00-03:00'>miércoles de 19:00 a 20:00 🇦🇷 (GMT-3)</time> facilito con otros mods una sesión de conversación en el canal de voz #English <Link href='https://discord.goncy.dev'>en el Discord de @Goncy.</Link></p>
        </footer>
    )
}
