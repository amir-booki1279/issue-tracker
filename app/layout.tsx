

import "./globals.css";
import NavBar from "./NavBar";




export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <main>
          <NavBar/>
        {children}

        </main>

      </body>
    </html>
  );
}
