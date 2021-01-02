import React from 'react'
import './About.css'
import { useForm } from "react-hook-form";

const About = () => {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="form__about">
                <span className="form__input">
                <input name="email"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                    className="form__email"
                />
                <span>Email</span>
                {errors.email && errors.email.message}
                </span>

                <span className="form__input">
                <input 
                    name="Name"
                    ref={register}
                    className="form__name"
                />
                <span>Name</span>
                </span>

                <button className="form__submit" type="submit">
                    Submit
                </button>
            </form>
    )
}

export default About
