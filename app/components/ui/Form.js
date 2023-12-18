"use client"
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        window.location.reload();
        console.log('Email sent successfully');
        
      } else {
        
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" text-base grid grid-cols-2 max-sm:grid-cols-1 gap-6">
        
          <input
            {...register("name", { required: "This field is required" })}
            type="text"
            placeholder="Your Name"
            className=" py-6 border-b-2 border-blue-300 opacity-80 text-black  outline-0"
            />
          {errors.name && <span>{errors.name.message}</span>}
        
        
          <input
            {...register("email", { required: "This field is required" })}
            type="email"
            placeholder="Your Email"
            className="py-6 border-b-2 border-blue-300 opacity-80 text-black  outline-0"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            {...register("phone", { required: "This field is required" })}
            type="text"
            placeholder="Your Phone Number"
            className="py-6 border-b-2 border-blue-300 opacity-80 text-black outline-0"
          />
          {errors.email && <span>{errors.phone.message}</span>}

          <input
            {...register("subject", { required: "This field is required" })}
            type="text"
            placeholder="Subject"
            className="py-6 border-b-2 border-blue-300 opacity-80 text-black  outline-0"
          />
          {errors.email && <span>{errors.email.message}</span>}
        
      </div>
      <div className="mt-10">
        <div>
          <textarea
            {...register("message", { required: "This field is required" })}
            placeholder="Tell us about the project"
            className="w-full h-1/2 py-6 border-b-2 border-blue-300 opacity-80 text-black  outline-0"
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
      </div>
      <button type="submit" className="text-[#fff] bg-light-blue w-full py-4 mt-6 uppercase font-semibold ">send message</button>
    </form>
  );
};

Form.displayName = "Form";

export default Form;



