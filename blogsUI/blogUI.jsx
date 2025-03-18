export function Content({children, className="", style}){
    return (
    <>
    <div className={"flex flex-wrap w-full justify-center md:justify-start items-center md:items-start md:pl-50 md:pr-20 pt-10 text-xl " + className } style={style}>
        {children}
    </div>
    </>
    );
}

// export function Text({ variations = [], children, styles, className}) {
//     const appliedClasses = [
//         variations.includes("bold") ? "font-bold" : "",
//         variations.includes("italic") ? "italic" : "",
//     ]
//         .filter(Boolean)
//         .join(" ");

//     return <p className={className+" "+appliedClasses} style={styles}>{children}</p>;
// }

export function Text({ size = "lg", variations = [], children, styles, className}) {
    const validSizes = ["xs", "sm", "md", "lg", "xl"];

    if (!validSizes.includes(size)) {
        return <p className="text-red-500">Size not correctly defined.</p>;
    }

    const sizeClasses = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",  // Default size
        lg: "text-lg",
        xl: "text-xl",
    };

    const appliedClasses = [
        sizeClasses[size],
        variations.includes("bold") ? "font-bold" : "",
        variations.includes("italic") ? "italic" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return <p className={className+" "+appliedClasses} style={styles}>{children}</p>;
}

export function Heading({ type, variations = [], children, style}) {
    const validTypes = [1, 2, 3, 4, 5, 6];

    if (!validTypes.includes(Number(type))) {
        return <p>Type not correctly defined.</p>;
    }

    const sizeClasses = {
        1: "text-4xl",  
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-base", 
    };

    const appliedClasses = [
        sizeClasses[type],
        variations.includes("bold") ? "font-bold" : "",
        variations.includes("italic") ? "italic" : "",
    ]
        .filter(Boolean)
        .join(" ");

    const Tag = `h${type}`;

    return <Tag className={appliedClasses} style={style}>{children}</Tag>;
}




export function BlogCard({src,alt, children, href, className}){
    return (
    <>
        <div className={`max-w-[450px] pb-5 md:pb-0 md:h-[450px] border border-zinc-300 pointer ${className}`} onClick={()=>{
            window.location.href = href;
        }}>
            <div className="image w-full h-2/">
                <img src={src} alt={alt}/>
            </div>
            <div className="flex flex-col gap-x-3">
                {children}
            </div>
        </div>
    </>
    );
}
export function BlogCardTitle({minsread, children}){
    return(
    <>
    <div className="pl-5 pt-3 flex gap-x-5 items-center justify-between">
        <Heading type="3" className="w-5/6">
            {children}
        </Heading>
        <span className="opacity-25 text-sm pr-5">
            {minsread} read
        </span>
    </div>
    </>
    );
}
export function BlogCardDesc({children}){
    return (
        <>
        <div className="pt-3 pl-7 text-base opacity-70">
            {children}
        </div>
        </>
    )
}

export function BlogAuthor({children}){
    return (
    <>
    <div className="flex justify-end text-sm opacity-70 pr-3">
        <Text variations={["italic"]}>- {children}</Text>
    </div>
    </>
    )
}

export function Section({ children, className="", style={}}) {
    return (
      <div className={`w-full mt-5 p-8 bg-[var(--background-muted)] border-l-4 border-blue-500 rounded-lg shadow-md text-lg text-[var(--foreground)] ${className}`} style={style}>
        {children}
      </div>
    );
  }
  

export function Image({ src, alt, href = undefined, width = "auto", height = "auto", className="", desc=""}) {
    return (
        <>
            {href ? (
                <a href={href}>
                    <img src={src} alt={alt} height={height} width={width} className={`${className}`}/>
                </a>
            ) : (
                <div className="flex flex-col">
                <img src={src} alt={alt} height={height} width={width} className={`${className}`}/>
                <Text size="xs" className="w-full item-end">{desc}</Text>
                </div>
            )}
        </>
    );
}
