import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='container flex flex-col items-center min-h-screen px-6 mx-auto text-lg lg:max-w-5xl'>
            <Header />
            
            <main className='flex flex-col flex-1 w-full lg:max-w-3xl'>   
                {children}
            </main>
            <Footer />
        </div>
    )
}