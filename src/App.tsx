import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "0 auto" }}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    style={{ display: "block", width: "100%", marginBottom: "8px" }}
                />
                {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Invalid email address",
                        },
                    })}
                    style={{ display: "block", width: "100%", marginBottom: "8px" }}
                />
                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    style={{ display: "block", width: "100%", marginBottom: "8px" }}
                />
                {errors.message && <span style={{ color: "red" }}>{errors.message.message}</span>}
            </div>

            <button type="submit" style={{ display: "block", width: "100%", padding: "8px" }}>
                Submit
            </button>
        </form>
    );
}

export default App;
