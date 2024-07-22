import services from "@/constants/services";
import React from "react";
import Items from "../services/Items";

const Services = () => {
    return (
        <div className="container mx-auto p-12" id="services">
            <h3 className="flex align-center font-semibold text-2xl">
                Services
                <span className="material-symbols-outlined rotate-90">
                    arrow_right_alt
                </span>
            </h3>
            <div className="flex justify-center my-20 gap-10 flex-wrap">
                {
                    services.map((service, index) => (
                        <Items key={index} image={service.image} title={service.title} />
                    ))
                }
            </div>
        </div>
    )
};

export default Services;