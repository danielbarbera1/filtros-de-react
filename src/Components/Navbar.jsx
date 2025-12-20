
const Navbar = ({ }) => {
    return (
        <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/*-- Logo --*/}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-gray-800">daisyUI</span>
                        </div>
                    </div>

                    {/*-- Search Bar --*/}
                    <div className="hidden md:flex items-center w-96">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <i className="fas fa-search text-gray-400"></i>
                            </div>
                            <input type="text" className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-lg" placeholder="Search"/>
                        </div>
                    </div>

                    {/*-- Right Menu --*/}
                    <div className="flex items-center space-x-4">
                        <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i className="fas fa-search text-lg"></i>
                        </button>

                        <button className="relative flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 group">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400">
                                <span className="text-white font-medium text-sm">JD</span>
                            </div>
                            <span className="hidden md:inline text-gray-700 font-medium">John Doe</span>
                            <i className="fas fa-chevron-down text-gray-500 text-xs hidden md:inline"></i>

                            {/*-- Dropdown Menu --*/}
                            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                {/*--Contenido del menú --*/}
                            </div>
                        </button>

                        <button className="hidden md:flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                            <i className="fas fa-cog text-lg"></i>
                            <span className="font-medium">Settings</span>
                        </button>

                        <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i className="fas fa-sign-out-alt text-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar