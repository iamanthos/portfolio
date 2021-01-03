import React, { useEffect, useState } from 'react'
import './Footer.css'
import { useForm } from "react-hook-form";

const Footer = () => {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div>
            <div id="About" className="footer">
                <div className="footer_heading">
                    <h1>Thanks for checking out!</h1>
                </div>
                <div className="footer__content">
                    <div className="footer__link">
                        <a href="https://tinyurl.com/yae42ses" target="_blank">Download Resume</a>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="form__about">
                        <div className="footer__form">
                            <span className="footer__input">
                                <input name="Name" ref={register}/>
                                <span>Name</span>
                            </span>
                            
                            <span className="footer__input">
                                <input
                                    name="email"
                                    ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })}/>
                                <span>Email</span>
                                {errors.email && errors.email.message}
                            </span>

                            <span className="footer__input">
                                <input name="Message" ref={register}/>
                                <span>Message</span>
                            </span>

                            <button type="submit">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
