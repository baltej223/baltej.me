# ON 18-May-25
```JSX
diff --git a/blogsUI/blogUI.jsx b/blogsUI/blogUI.jsx
index 62d47d6..16a3f44 100644
--- a/blogsUI/blogUI.jsx
+++ b/blogsUI/blogUI.jsx
@@ -52,7 +52,7 @@ export function Text({
     .join(" ");
 
   return (
-    <p className={className + " " + appliedClasses + " mer"} style={styles}>
+    <p className={className + " " + appliedClasses + " mer wrap-break-word"} style={styles}>
       {children}
     </p>
   );
```
- Added wrap-break-word, class to the React Functional component, Text, which will break the words to fit them in the designated content-width.

# ON 16-May-25
- Added a new blog, named utilizing-june-and-july at /blog/utilizing-june-and-july/

# ON 10-May-25

```JSX
diff --git a/app/aboutme/page.jsx b/app/aboutme/page.jsx
index 49f94e4..f7b8290 100644
--- a/app/aboutme/page.jsx
+++ b/app/aboutme/page.jsx
@@ -9,8 +9,8 @@ export default function Home(){
         <>
         <Navbar/>
         <Content className="flex-col gap-y-10">
-            <div className="flex md:flex-row flex-col-reverse flex-col width:[40%]">
-                <div className="flex flex-col gap-y-10 md:w-2/3 w-[3/4] pl-[10%] pr-[10%] md:p-0 pt-10 md:pt-0">
+            <div className="flex lg:flex-row flex-col-reverse flex-col width:[40%]">
+                <div className="flex flex-col gap-y-10 lg:w-2/3 w-[3/4] pl-[10%] pr-[10%] lg:p-0 pt-10 lg:pt-0">
                     <Heading type="1">
                         Hi, I am Baltej Singh.
                     </Heading>
diff --git a/app/blog/navbar/navbar.jsx b/app/blog/navbar/navbar.jsx
index 1fa203b..354a072 100644
--- a/app/blog/navbar/navbar.jsx
+++ b/app/blog/navbar/navbar.jsx
@@ -3,12 +3,11 @@ import ThemeToggle from "../ThemeToggle/ThemeToggle";
 export default function Navbar(){
     return (
     <>
-    <div className="z-[100] pt-10 pb-10 flex flex-row items-center sticky top-0 left-0 justify-center md:justify-start /*After this goes classes for glassmorphism*/ light:bg-[rgba(255, 255, 255, 0.6)]" style={{backdropFilter:"blur( 10.5px )", opacity:""}}>
-                                                                                                                                                                    {/* dark:bg-[rgba(0,0,0,0.35)] */}
-        <div className="pl-0  md:pl-20  text-3xl md:w-1/2 block" style={{fontFamily:"logo-bold"}}>
+    <div className="z-[100] pt-10 pb-10 flex flex-row items-center sticky top-0 left-0 justify-center md:justify-between /*After this goes classes for glassmorphism*/ light:bg-[rgba(255, 255, 255, 0.6)]" style={{backdropFilter:"blur( 10.5px )", opacity:""}}>                                                                                                                                          {/* dark:bg-[rgba(0,0,0,0.35)] */}
+        <div className="pl-0  md:pl-20 text-3xl /*md:w-1/2*/ block" style={{fontFamily:"logo-bold"}}>
             baltej.me
         </div>
-        <div style={{fontFamily:"logo"}} className="text-xl pl-0 flex flex-row gap-x-15 items-center hidden md:block md:flex lg:block lg:flex">
+        <div style={{fontFamily:"logo"}} className="text-xl pl-0 flex flex-row gap-x-15 items-center hidden md:block md:flex lg:block lg:flex /*md:w-1/2*/ md:pr-20">
             <div>
                 <a href="/">Home</a>
             </div>
diff --git a/blogsUI/blogUI.jsx b/blogsUI/blogUI.jsx
index de432fb..e5de031 100644
--- a/blogsUI/blogUI.jsx
+++ b/blogsUI/blogUI.jsx
@@ -9,7 +9,7 @@ export function Content({ children, className = "", style }) {
     <>
       <div
         className={
-          "mer flex flex-wrap w-full  md:justify-start  md:pl-65 md:pr-65  text-xl " +
+          "mer flex flex-wrap w-full lg:justify-start  lg:pl-65 lg:pr-65  text-xl " +
           className
         }
         style={style}
END
```

- Fixed Navbar, now fixed to the right of the navarea. Added right padding of it.
- The previous breakpoint was set as md in React function compontent, "Content", Now changed to lg.
- Wrote post-build.js for creating html changelog, which can be accessed at ./changelog and changed package.json according to it.

# ON 06-May-25

Changed right padding of React functional component "Content" from 40 and 65.


# ON 03-04-25

Changed left and right padding of React functional component "Content" from 50 and 20 to 65 and 40.

