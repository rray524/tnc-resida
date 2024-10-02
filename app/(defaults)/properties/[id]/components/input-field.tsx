import React from "react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  rows?: number;
  className?: string;
  validation?: object;
  maxLength?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  type = "text",
  rows,
  className = "h-[45px] w-[280px] my-3 p-5 bg-gray-200 mx-auto block",
  validation,
  maxLength,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          {...register(name, validation)}
          rows={rows}
          className={className}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
          maxLength={maxLength}
          pattern={name === "contact" ? "\\d*" : undefined}
          className={className}
        />
      )}
      {errors[name] && (
        <p className="text-red-500 text-left mb-3 pl-3">
          {(errors[name] as any).message}
        </p>
      )}
    </div>
  );
};

export default InputField;
