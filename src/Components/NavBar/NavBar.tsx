

const NavBar = () => {
    return (
        <div className="w-full flex items-center justify-between px-10 border py-2">
            <div className="">
                <h1 className="text-2xl font-bold">Think<span className="text-green-600">Tank</span></h1>
                <small>Get Ready To Thinking And Be Amazed!</small>
            </div>
            <div className="">
            <button className="bg-green-600 p-8 py-1 rounded-md text-white">
                Blog
            </button>
            </div>
        </div>
    );
};

export default NavBar;