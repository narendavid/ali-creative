import social from "@/constants/social";
import React from "react";

const Footer = () => {
    return (
        <div className="container mx-auto p-12" id="footer">
            <h3 className="flex align-center font-semibold text-2xl">
                Say hello Ali
            </h3>
            <div className="flex justify-center gap-9">
                {
                    social.map((item, index) => (
                        <img key={index} src={item.image} alt={item.name} />
                    ))
                }
            </div>
        </div>
    )
};

export default Footer;