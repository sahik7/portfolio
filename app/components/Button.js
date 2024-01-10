"use client"
import React from 'react'

export default function Button() {
    const downloadResume = () => {
        fetch("sahik_mueeb_ahsan.pdf").then((response) => {
            response.blob().then((blob) => {

                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "sahik_mueeb_ahsan.pdf";
                alink.click();
            });
        });
    };
    return (
        <button onClick={downloadResume} className="py-2 px-4 bg-[#f1491c] font-medium font-work_sans hover:py-3 hover:px-6">Download Resume</button>
    )
}
