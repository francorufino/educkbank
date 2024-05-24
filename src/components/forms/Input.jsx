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
        className="block tracking-wide text-black text-sm font-bold mb-2"
        htmlFor={inputKey}
      >
        {label}
      </label>
      <input
        id={inputKey}
        className={classNames(
          Boolean(errors[inputKey]) ? "border-morange" : "",
          "appearance-none block w-full text-dgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-dgray",
          "bg-white",
          "focus:bg-white",
          "autofill:bg-white"
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
        <span className="text-morange mt-1">{errors[inputKey]?.message}</span>
      )}
    </>
  );
};
