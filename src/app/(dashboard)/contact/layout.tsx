import React, { Children } from "react";

export default function Layout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <h1 className="text-lg font-bold">Hola desde Layout 2
            {children}
        </h1>
      </div>    
  );
}