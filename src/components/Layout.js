import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='container mx-auto px-6 lg:max-w-5xl flex flex-col min-h-screen text-lg items-center'>
            <Header />
            
            <main className='flex-1 w-full lg:max-w-3xl'>   
                {children}
            </main>
            <Footer className='w-full'/>
        </div>
    )
}