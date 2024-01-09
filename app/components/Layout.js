import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <div className="relative">
                <div
                    className="absolute inset-0 bg-cover bg-top z-0 bg-[url('https://i.ibb.co/wMdHB7n/portfolio-bg.png')]"
                />
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
