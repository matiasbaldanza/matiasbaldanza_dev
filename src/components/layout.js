import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='container mx-auto px-6 lg:max-w-5xl flex flex-col min-h-screen'>
            <Header />
            
            <main className='flex-1'>   
                {children}
            </main>
            <Footer />
        </div>
    )
}