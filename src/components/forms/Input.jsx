import { classNames } from "@/lib";

export const InputText = ({
  register,
  errors,
  label,
  inputKey,
  errorMessage,
  placeholder,
  type = "text",
  watch,
  validateMessage,
  validateField,
  needValidate = false,
  isRequired = true,
}) => {
  return (
    <>
      <label
        className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
        htmlFor={inputKey}
      >
        {label}
      </label>
      <input
        id={inputKey}
        className={classNames(
          Boolean(errors[inputKey]) ? "border-red-500" : "",
          "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        )}
        type={type}
        placeholder={placeholder}
        {...register(inputKey, {
          required: isRequired ? errorMessage : false,
          validate: val => {
            if (needValidate) {
              if (watch(validateField) != val) {
                return validateMessage;
              }
            }
          },
        })}
      />
      {errors[inputKey] && (
        <span className="text-red-500 mt-1">{errors[inputKey]?.message}</span>
      )}
    </>
  );
};
