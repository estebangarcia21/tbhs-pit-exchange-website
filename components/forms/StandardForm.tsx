import { Children } from "utils/children"
import { FormEvent } from "react"
import { DeepMap, FieldError, ValidationRule } from "react-hook-form"

const focusable = (classValues: string) =>
    `${classValues} focus:outline-none transition focus:border-blue-500`

interface StandardFormProps {
    title: string
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const StandardForm = ({
    title,
    children,
    handleSubmit,
}: StandardFormProps & Children) => {
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col px-10 py-8 w-full min-w-375 rounded-md bg-white text-black"
        >
            <h1 className="text-4xl font-extrabold mb-2">{title}</h1>

            {children}
        </form>
    )
}

interface InputProps {
    htmlFor: string
    inRef: React.LegacyRef<HTMLInputElement>
    type?: "text" | "password"
}

StandardForm.Input = ({
    htmlFor,
    type = "text",
    children,
    inRef,
}: InputProps & Children) => {
    return (
        <label htmlFor={htmlFor}>
            <input
                ref={inRef}
                name={htmlFor}
                aria-label={htmlFor}
                className={focusable(
                    "border border-gray-300 rounded-sm my-2 py-2 px-3.5"
                )}
                placeholder={children.toString()}
                type={type}
            />
        </label>
    )
}

interface ButtonProps {
    type?: "button" | "submit" | "reset"
}

StandardForm.Button = ({
    type = "button",
    children,
}: ButtonProps & Children) => {
    return (
        <button
            type={type}
            className={focusable(
                "bg-black rounded-sm mt-4 px-4 py-2.5 text-white text-center cursor-pointer hover:bg-gray-900"
            )}
        >
            {children}
        </button>
    )
}

interface ErrorProps {
    error: FieldError
}

StandardForm.Error = ({ error }: ErrorProps) => {
    return error ? (
        <span className="text-xs text-red-500">* {error.message}</span>
    ) : null
}

export const noErrors = (errors: DeepMap<unknown, FieldError>) =>
    !Object.values(errors).some((k) => k !== null)

export const emailValidationRule: ValidationRule<RegExp> = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Please enter a valid e-mail address",
}

export const passwordValidation = {
    minLength: {
        value: 4,
        message: "Must atleast 4 characters long",
    },
    maxLength: {
        value: 32,
        message: "Must be less than 32 characters long",
    },
}

export const requiredFieldValidation = {
    required: {
        value: true,
        message: "Required field",
    },
}
