"use client";
import { useRef, useEffect } from "react";
import "highlight.js/styles/night-owl.css";
import hljs from "highlight.js";
import { Copy, Check } from "lucide-react";

export function Content({ children, className = "", style }) {
  return (
    <>
      <div
        className={
          "mer content flex flex-wrap w-full lg:justify-start  lg:pl-65 lg:pr-65  text-xl " +
          className
        }
        style={style}
      >
        {children}
      </div>
    </>
  );
} // export function Text({ variations = [], children, styles, className}) { const appliedClasses = [ variations.includes("bold") ? "font-bold" : "", variations.includes("italic") ? "italic" : "", ] .filter(Boolean) .join(" ");
//     return <p className={className+" "+appliedClasses} style={styles}>{children}</p>;
// }

export function Text({
  size = "md",
  variations = [],
  children,
  styles,
  className,
}) {
  const validSizes = ["xs", "sm", "md", "lg", "xl"];

  if (!validSizes.includes(size)) {
    return <p className="text-red-500">Size not correctly defined.</p>;
  }

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base", // Default size
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

  return (
    <p className={className + " " + appliedClasses + " mer wrap-break-word"} style={styles}>
      {children}
    </p>
  );
}

export function Heading({ type, variations = [], children, style, className }) {
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

  return (
    <Tag className={appliedClasses + " " + className + " mer"} style={style}>
      {children}
    </Tag>
  );
}

export function BlogCard({ src, alt, children, href, className }) {
  return (
    <>
      <div
        className={`max-w-[450px] pb-5 md:pb-0 md:h-[450px] border border-zinc-300 pointer ${className}`}
        onClick={() => {
          window.location.href = href;
        }}
      >
        <div className="image w-full flex justify-center">
          <img src={src} alt={alt} />
        </div>
        <div className="flex flex-col gap-x-3">{children}</div>
      </div>
    </>
  );
}
export function BlogCardTitle({ minsread, children }) {
  return (
    <>
      <div className="pl-5 pt-3 flex gap-x-5 items-center justify-between">
        <Heading type="3" className="w-5/6">
          {children}
        </Heading>
        <span className="opacity-25 text-sm pr-5">{minsread} read</span>
      </div>
    </>
  );
}
export function BlogCardDesc({ children }) {
  return (
    <>
      <div className="pt-3 pl-7 text-base opacity-70">{children}</div>
    </>
  );
}

export function BlogAuthor({ children }) {
  return (
    <>
      <div className="flex justify-end text-sm opacity-70 pr-3">
        <Text variations={["italic"]}>- {children}</Text>
      </div>
    </>
  );
}

export function Section({ children, className = "", style = {} }) {
  return (
    <div
      className={`w-full mt-5 p-8 bg-[var(--background-muted)] border-l-4 border-blue-500 rounded-lg shadow-md text-lg text-[var(--foreground)] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function Image({
  src,
  alt,
  href = undefined,
  width = "auto",
  height = "auto",
  className = "",
  desc = "",
}) {
  return (
    <>
      {href ? (
        <a href={href}>
          <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={`${className}`}
          />
        </a>
      ) : (
        <div className="flex flex-col">
          <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={`${className}`}
          />
          <div style={{ width: width }}>
            <Text size="xs" className="w-full item-end">
              {desc}
            </Text>
          </div>
        </div>
      )}
    </>
  );
}
export function Code({
  className,
  style,
  children,
  lang = "Javascript",
  whitespace = "                ",
}) {
  // It should also detect the mode [statistical] of the whitepaces
  let code = children.split("\n");

  if (whitespace == undefined) {
    let numberOfWhiteSpaces = [];
    code.forEach((line, index) => {
      numberOfWhiteSpaces[index] = line.search(/\S/);
    });
    function mode(arr) {
      const freq = arr.reduce(
        (acc, num) => ((acc[num] = (acc[num] || 0) + 1), acc),
        {},
      );
      const maxFreq = Math.max(...Object.values(freq));
      return Object.keys(freq)
        .filter((key) => freq[key] === maxFreq)
        .map(Number);
    }

    let mode_of_whiteSpaces = mode(numberOfWhiteSpaces);
    //genrating mode_of_whitespaces Number whitespaces
    whitespace = " ".repeat(mode_of_whiteSpaces);
    console.log(
      "for children %s, whitespace is %s",
      children,
      whitespace.length,
    );
  }

  const HighlightCode = ({ line, lang = "javascript" }) => {
    const codeRef = useRef(null);

    useEffect(() => {
      if (codeRef.current) {
        hljs.highlightElement(codeRef.current);
      }
    }, [line, lang]);

    return (
      <pre className="overflow-x-auto w-full">
        <code ref={codeRef} className="whitespace-pre">
          {whitespace ? line.replace(whitespace, "") : line}
        </code>
      </pre>
    );
  };
  let copyRef = useRef();
  let checkRef = useRef();
  return (
    <div
      className={`flex flex-col w-[90%] md:w-[70%] scrollable pt-5 pb-3 ${className ? className : ""}`}
      style={style ? style : {}}
    >
      <div className="bg-[#011627] w-full opacity-75 border border-gray-600 rounded">
        <div className="flex flex-row pl-10 pt-3 pb-3 pr-10 bg-[#424242] opacity-70">
          <Text className="text-white monospace opacity-[2] w-[99%] select-none">
            {lang}
          </Text>
          <div className="flex items-center justify-center border-1 border-gray-300 w-6 h-6 rounded">
            <Copy
              ref={copyRef}
              color="white"
              className="w-4 h-4"
              onClick={() => {
                navigator.clipboard
                  .writeText(children)
                  .then(() => {
                    copyRef.current.setAttribute("class", "w-4 h-4 hidden");
                    checkRef.current.setAttribute("class", "w-4 h-4 block");
                    setTimeout(() => {
                      copyRef.current.setAttribute("class", "w-4 h-4 block");
                      checkRef.current.setAttribute("class", "w-4 h-4 hidden");
                    }, 1000);
                  })
                  .catch((err) => {
                    console.error("Failed to copy text to clipboard:", err);
                  });
              }}
            />
            <Check className="w-4 h-4 hidden" color="white" ref={checkRef} />
          </div>
        </div>
        <hr className="text-zinc-800" />

        {/* Scrollable Code Block */}
        <div className="pt-5 pb-5 pl-5 overflow-x-auto w-full">
          <div className="monospace flex flex-col text-sm w-full">
            {code.map((line, index) => (
              <div className="flex flex-row" key={index}>
                {/* Line Number */}
                <div className="pr-5 text-white monospace select-none">
                  {index + 1}
                </div>
                {/* Code Line */}
                <div className="monospace pl-0 pr-5 flex flex-col gap-y-5">
                  <HighlightCode line={line} lang={lang} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function _Date({ date }) {
  if (!date) {
    let today = new Date();
    return today.getUTCDate();
  } else {
    return (
      <>
        <Text size="md" className="opacity-0.7">
          {date}
        </Text>
      </>
    );
  }
}
