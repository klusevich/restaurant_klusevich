import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <p>
                &copy; {new Date().getFullYear()} RestaurantName - All Rights Reserved
            </p>
            <div className="contacts">
                Contacts:<br /> phone number<br /> @info.restaurantname.com
            </div>
        </div>
    );
}

export default Footer;