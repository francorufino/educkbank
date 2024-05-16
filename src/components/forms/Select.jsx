import { classNames } from "@/lib";

export const InputSelect = ({
  register,
  errors,
  label,
  inputKey,
  errorMessage,
  placeholder,
  options,
  isRequired = true,
}) => {
  return (
    <>
      <label
        className="block tracking-wide text-mlilas text-sm font-bold mb-2"
        htmlFor={inputKey}
      >
        {label}
      </label>
      <select
        id={inputKey}
        placeholder={placeholder}
        className={classNames(
          Boolean(errors[inputKey]) ? "border-morange" : "",
          "appearance-none block w-full bg-white text-dgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-mlilas"
        )}
        {...register(inputKey, {
          required: isRequired ? errorMessage : false,
        })}
      >
        <option value="">Select Country</option>
        {options.map(optionValue => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>

      {errors[inputKey] && (
        <span className="text-red-500 mt-1">{errors[inputKey]?.message}</span>
      )}
    </>
  );
};
