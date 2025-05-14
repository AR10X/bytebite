import Navbar from "./Navbar";

type Props = {
    children: React.ReactNode;
}

export default function Layout({children}: Props){
    return(
        <>
            <Navbar />
            <main className="p-4">{children}</main>
            <footer className="p-4 bg-gray-100 text-center">© ByteBite 2025</footer>
        </>
    );
}