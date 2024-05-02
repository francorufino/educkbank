import React, { useState } from "react";
import Button from "../button/Button";
import { useAuthContext } from "../../app/context/AuthContext";
import { useForm } from "react-hook-form";
import { cities, countries } from "@/data/countriesAndCities";
import { InputText } from "@/components/forms/Input";
import { InputSelect } from "@/components/forms/Select";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { createUser } = useAuthContext();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const country = watch("country");

  const onSubmit = async values => {
    setLoading(true);
    try {
      await createUser(values);
      reset();
      push("/auth/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center rounded-xl p-8 bg-[#6b7280] mt-4">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputText
                register={register}
                errors={errors}
                inputKey={"first_name"}
                placeholder={"John"}
                label={"First name"}
                errorMessage={"First name is required"}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputText
                register={register}
                errors={errors}
                inputKey={"last_name"}
                placeholder={"Doe"}
                label={"Last name"}
                errorMessage={"Last name is required"}
              />
            </div>
          </div>
          {/* Date of Birth */}
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <InputText
                register={register}
                errors={errors}
                inputKey={"date_of_birth"}
                type={"date"}
                placeholder={"YYYY-MM-DD"}
                label={"Date of Birth"}
                errorMessage={"Date of Birth is required"}
              />
            </div>
          </div>
          {/* Email and Confirm Email */}
          <div className="flex flex-wrap  mb-6">
            <div className="w-full px-3">
              <InputText
                register={register}
                errors={errors}
                inputKey={"email"}
                type={"email"}
                placeholder={"john@email.com"}
                label={"Email"}
                errorMessage={"Email is required"}
              />
              <InputText
                register={register}
                errors={errors}
                inputKey={"confirm_email"}
                type={"email"}
                placeholder={"john@email.com"}
                label={"Confirm Email"}
                errorMessage={"Confirm Email is required"}
                validateMessage={"Email do not match"}
                validateField="email"
                watch={watch}
                needValidate
              />
            </div>
          </div>
          {/* Password and Confirm Password */}
          <div className="flex flex-wrap  mb-6">
            <div className="w-full px-3">
              <InputText
                register={register}
                errors={errors}
                inputKey={"password"}
                type={"password"}
                placeholder={"Type your password"}
                label={"Password"}
                errorMessage={"Password is required"}
              />
              <InputText
                register={register}
                errors={errors}
                inputKey={"confirm_password"}
                type={"password"}
                placeholder={"Confirm your password"}
                label={"Confirm Password"}
                errorMessage={"Confirm Password is required"}
                validateMessage={"Password do not match"}
                validateField="password"
                watch={watch}
                needValidate
              />
            </div>
          </div>
          <div className="flex flex-wrap  mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputText
                register={register}
                errors={errors}
                inputKey={"address"}
                placeholder={"Type your address"}
                label={"Address"}
                errorMessage={"Address is required"}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputText
                register={register}
                errors={errors}
                type="number"
                inputKey={"zip_code"}
                placeholder={"Type your Zip code"}
                label={"Zip code"}
                errorMessage={"Zip code is required"}
              />
            </div>
          </div>
          {/* Country and City */}
          <div className="flex flex-wrap  mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputSelect
                register={register}
                errors={errors}
                inputKey={"country"}
                placeholder={"Select your country"}
                label={"Country"}
                errorMessage={"Country is required"}
                options={countries}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <select
                id="city"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register("city", {
                  required: "City is required",
                })}
              >
                <option value="">Select City</option>
                {cities[country] &&
                  cities[country].map(cityName => (
                    <option key={cityName} value={cityName}>
                      {cityName}
                    </option>
                  ))}
              </select>
              {errors.city && (
                <span className="text-red-500 mt-1">{errors.city.message}</span>
              )}
            </div>
          </div>
          {/* Submit button */}
          <div className="flex flex-wrap mt-8 mb-6 justify-center">
            <Button
              type="submit"
              disabled={loading || Object.keys(errors).length > 0}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
