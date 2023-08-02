import React from "react";


const ContactUs = () => {

    return (
        <div className=" h-[37rem] flex items-center justify-center  ">
            <div className="w-7/12 h-60 flex flex-col gap-10 justify-center items-center bg-gray-300 rounded-xl " >
                <p className="text-3xl font-semibold">Contact Us</p>
                <div className=" text-xl" >
                    <div className="flex gap-2">
                        <p>My Phone : </p>
                        <p><a href="tel:+91 9444 745 639">+91 9444 745 639</a></p>
                    </div>
                    <div className="flex gap-2">
                        <p>My Email : </p>
                        <p><a href="mailto:senthamizharasu3mdk@gmail.com">senthamizharasu3mdk@gmail.com</a></p>
                    </div>
                    <div className="flex gap-2">
                        <p>My Location : </p>
                        <p>
                            <a href="https://www.google.co.in/maps/place/10%C2%B054'40.7%22N+76%C2%B058'05.9%22E/@10.911468,76.9681047,20.79z/data=!4m4!3m3!8m2!3d10.911317!4d76.9683?authuser=1&entry=ttu">
                                39, Bharathi colony, Eachanari pirivu, Madukkarai market,Coimbatore - 641105
                            </a>
                        </p>
                    </div>
                    {/* <div className="flex gap-2">

                </div> */}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;