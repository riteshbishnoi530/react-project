import React, { useState } from "react";
import Swal from "sweetalert2";
function FormValidation() {
    const initialFormData = {
        name: "",
        email: "",
        password: "",
        conformPassword: "",
        select: "1",
        checkBox: false,
      };
    
      const [value, setValue] = useState(initialFormData);
      const [error, setError] = useState(false);
    
      const submitHandle = (e) => {
        e.preventDefault();
        setError(true);
    
        // Validation check
        if (
          value.name !== "" &&
          value.email !== "" &&
          value.password !== "" &&
          value.conformPassword !== "" &&
          value.select !== "" &&
          value.checkBox
        ) {
    
          // On successful validation
          setValue(initialFormData);
          setError(false);
          Swal.fire({
            title: "Success!",
            text: "Form submitted successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          console.log(value);
        }
      };
    
      return (
        <>
          <div className="max-w-[425px] mx-auto h-screen py-20">
            <form onSubmit={submitHandle}>
              {/* Name */}
              <div>
                <input
                 className="py-2 px-3 border border-solid border-[#00000070] rounded-2xl w-full max-w-[600px] outline-none"
                  value={value.name}
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                  type="text"
                  placeholder="Name"
                />
                <p className="text-red-500 text-base font-normal">
                  {error && !value.name && "Name is required"}
                </p>
              </div>
    
              {/* Email */}
              <div className="mt-3">
                <input
                  className="py-2 px-3 border border-solid border-[#00000070] rounded-2xl w-full max-w-[600px] outline-none"
                  type="email"
                  placeholder="Email"
                  value={value.email}
                  onChange={(e) => setValue({ ...value, email: e.target.value })}
                />
                <p className="text-red-500 text-base font-normal">
                  {error && !value.email && "Email is required"}
                </p>
              </div>
    
              {/* Password */}
              <div className="mt-3">
                <input
                  className="py-2 px-3 border border-solid border-[#00000070] rounded-2xl w-full max-w-[600px] outline-none"
                  type="password"
                  placeholder="Password"
                  value={value.password}
                  onChange={(e) =>
                    setValue({ ...value, password: e.target.value })
                  }
                />
                <p className="text-red-500 text-base font-normal">
                  {error && !value.password && "Password is required"}
                </p>
              </div>
    
              {/* Confirm Password */}
              <div className="mt-3">
                <input
                  className="py-2 px-3 border border-solid border-[#00000070] rounded-2xl w-full max-w-[600px] outline-none"
                  type="password"
                  placeholder="Confirm Password"
                  value={value.conformPassword}
                  onChange={(e) =>
                    setValue({ ...value, conformPassword: e.target.value })
                  }
                />
                <p className="text-red-500 text-base font-normal">
                  {error && !value.conformPassword && "Confirm Password is required"}
                </p>
              </div>
    
              {/* select */}
              <div className="flex flex-col w-full mt-3">
                <select
                  value={value.select}
                  onChange={(e) => setValue({ ...value, select: e.target.value })}
                  className="py-2 px-3 bg-blue-500 text-white w-full rounded-xl"
                >
                  <option className="max-w-[20px]" value="Featured">Featured</option>
                  <option className="max-w-[20px]" value="New">New</option>
                  <option className="max-w-[20px]" value="Rating">Rating</option>
                </select>
              </div>
    
              {/* Checkbox */}
              <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  checked={value.checkBox}
                  onChange={(e) =>
                    setValue({ ...value, checkBox: e.target.checked })
                  }
                />
                <p className="ml-2 text-blue">I accept</p>
              </div>
              <p className="text-red-500 text-base font-normal">
                {error && !value.checkBox && "You must accept the terms"}
              </p>
    
              {/* Submit Button */}
              <button
                className="mt-3 border border-solid border-blue-600 py-3 px-10 w-full max-w-[200px] rounded-2xl text-black transition-all ease-linear duration-200 hover:bg-blue-700 hover:text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      );
}

export default FormValidation
