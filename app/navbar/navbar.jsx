import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar(){
    return (
    <>
    <div className="pt-10 pb-10 flex flex-row items-center sticky top-0 left-0 justify-center md:justify-start /*After this goes classes for glassmorphism*/ light:bg-[rgba(255, 255, 255, 0.6)]" style={{backdropFilter:"blur( 10.5px )", opacity:""}}>
                                                                                                                                                                    {/* dark:bg-[rgba(0,0,0,0.35)] */}
        <div className="pl-0  md:pl-20  text-3xl md:w-1/2 block" style={{fontFamily:"logo-bold"}}>
            baltej.me
        </div>
        <div style={{fontFamily:"logo"}} className="text-xl pl-0 flex flex-row gap-x-15 items-center hidden md:block md:flex lg:block lg:flex">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="./aboutme">About Me</a>
            </div>
            <div>
                <a href="./github">Github</a>
            </div>
            <div>
                <a href="./blogs">More Blogs</a>
            </div>
            <div>
                <a href="https://github.com/baltej223#connect-with-me">
                    Contact Me
                </a>
            </div>
            <ThemeToggle/>
        </div>
    </div>
    </>
        );
}