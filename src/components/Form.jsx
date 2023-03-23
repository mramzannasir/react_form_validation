/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";

import { useForm } from "react-hook-form";

const index = () => {
	const [show, setShow] = useState(false);
	const hanldeOnChnage = () => {
		setShow(true);
	};
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// const onSubmit = (values) => router.push("/nextreg");
	const onSubmit = (values) => alert("Done");
	return (
		<>
			<div className="wrapper">
				<div className="contain justify-center items-center">
					<div className="w-full lg:w-[48%]">
						<div>
							<h1 className="title font-bold">Personal Details</h1>
						</div>
						<div className="mt-2 h-[1px] w-full bg-[#CBD4E1]"></div>
						<div className="w-full">
							<form
								action=""
								onSubmit={handleSubmit(onSubmit)}
								className="flex w-full flex-col gap-4 mt-5">
								<div>
									<div className=" h-[3rem]">
										<input
											{...register("firstName", {
												required: true,
												maxLength: 20,
												pattern: /^[A-Za-z]+$/i,
											})}
											type="text"
											id=""
											className={`h-full ${errors?.firstName && "border-red-700 border-[2px]" } border-[2px]  rounded w-full transition-all duration-300  pl-3 outline-none placeholder:font-semibold placeholder:text-black`}
											placeholder="First Name*"
										/>
									</div>
									{errors?.firstName?.type === "required" && (
										<h6 className="text-rose-600 pl-2 text-sm font-bold">
											Please Enter Name
										</h6>
									)}
									{errors?.firstName?.type === "maxLength" && (
										<h6 className="text-rose-600 pl-2  text-sm font-bold">
											First name cannot exceed 20 characters
										</h6>
									)}
									{errors?.firstName?.type === "pattern" && (
										<h6 className="text-rose-600 pl-2  text-sm font-bold">
											Alphabetical characters only
										</h6>
									)}
									{errors?.firstName?.watch === "pattern" && (
										<h6 className="text-rose-600  pl-2 text-sm font-bold">
											Ohh
										</h6>
									)}
								</div>
								{/* Email Field */}
								<div>
									<div className=" border-[1px] border-blue h-[3rem]">
										<input
											{...register("email", {
												required: true,
												pattern:
													/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g,
											})}
											type="email"
											id=""
											className="h-full w-full border-none pl-3 outline-none placeholder:font-semibold placeholder:text-black"
											placeholder="Email*"
										/>
									</div>
									{errors?.email?.type === "required" && (
										<h6 className="text-rose-600 pl-2 text-sm font-bold">
											Enter Email
										</h6>
									)}
									{errors?.email?.type === "pattern" && (
										<h6 className="text-rose-600 pl-2  text-sm font-bold">
											Enter Valid Email Address
										</h6>
									)}
									{errors?.email?.watch === "pattern" && (
										<h6 className="text-rose-600  pl-2 text-sm font-bold">
											Ohh
										</h6>
									)}
								</div>
								{/* PhoneNumber */}
								<div>
									<div className=" border-[1px] border-blue h-[3rem]">
										<input
											{...register("phone", {
												required: true,
												pattern: /^[0-9]+$/,
											})}
											type="text"
											id=""
											className="h-full w-full border-none pl-3 outline-none placeholder:font-semibold placeholder:text-black"
											placeholder="Phone Number"
										/>
									</div>
									{errors?.phone?.type === "required" && (
										<h6 className="text-rose-600 pl-2 text-sm font-bold">
											Enter Your Phone Number
										</h6>
									)}
									{errors?.phone?.type === "pattern" && (
										<h6 className="text-rose-600 pl-2  text-sm font-bold">
											Enter Valid Phone Number
										</h6>
									)}
									{errors?.phone?.watch === "pattern" && (
										<h6 className="text-rose-600  pl-2 text-sm font-bold">
											Ohh
										</h6>
									)}
								</div>
								{/* Password */}
								<div>
									<div className="border-[1px] border-blue h-[3rem]">
										<input
											{...register("password", {
												required: true,
												minLength: 6,
											})}
											type="password"
											id=""
											className="h-full w-full border-none pl-3 outline-none placeholder:font-semibold placeholder:text-black"
											placeholder="CREATE PASSWORD"
										/>
									</div>
									{errors?.password?.type === "required" && (
										<h6 className="text-rose-600 pl-2 text-sm font-bold">
											Please Enter Your Password
										</h6>
									)}
									{errors?.password?.type === "minLength" && (
										<h6 className="text-rose-600 pl-2  text-sm font-bold">
											Please Password Strong
										</h6>
									)}
								</div>
								<button
									className="w-full rounded bg-blue py-2 text-center text-sm font-bold uppercase text-white lg:text-base"
									type="submit">
									Continue
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
