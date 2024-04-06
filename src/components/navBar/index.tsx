function NavBar() {
    return (
        <div
            className="fixed z-50 w-full flex p-4 justify-center"
        >
            <div>
                PR
            </div>
            <div className="flex">
                <div className="px-5 text-white">
                    Home
                </div>
                <div className="px-5 text-white">
                    Sobre
                </div>
                <div className="px-5 text-white">
                    Portifolio
                </div>
                <div className="px-5 text-white">
                    Contato
                </div>
            </div>

        </div>
    );
}

export default NavBar;