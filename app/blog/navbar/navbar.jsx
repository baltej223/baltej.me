import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar({title="baltej.me"}){
    return (
    <>
    <div className="z-[100] pt-10 pb-10 flex flex-row items-center sticky top-0 left-0 justify-center md:justify-between /*After this goes classes for glassmorphism*/ light:bg-[rgba(255, 255, 255, 0.6)]" style={{backdropFilter:"blur( 10.5px )", opacity:""}}>                                                                                                                                          {/* dark:bg-[rgba(0,0,0,0.35)] */}
        <div className="pl-0  md:pl-20 text-3xl /*md:w-1/2*/ block" style={{fontFamily:"logo-bold"}}>
            {title}
        </div>
        <div style={{fontFamily:"logo"}} className="text-xl pl-0 flex flex-row gap-x-15 items-center hidden md:block md:flex lg:block lg:flex /*md:w-1/2*/ md:pr-20">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/aboutme">About Me</a>
            </div>
            <div>
                <a href="/github">Github</a>
            </div>
            <div>
                <a href="/blog">Blogs</a>
            </div>
            <div>
                <a href="https://github.com/baltej223#connect-with-me">
                    Contact Me
                </a>
            </div>
            <div>
                <a href="https://posts.baltej.me/">Posts</a>
            </div>
            <ThemeToggle/>
        </div>
    </div>
    </>
        );
}
