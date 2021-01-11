import {
    emailValidationRule,
    noErrors,
    passwordValidation,
    requiredFieldValidation,
    StandardForm,
} from "@App/components/forms/StandardForm";
import {
    LoginDocument,
    LoginMutation,
    LoginMutationVariables,
} from "@App/generated/graphql-types";
import { serverClient } from "@App/utils/server-client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormInputs {
    email: string;
    password: string;
}

const Login = () => {
    const router = useRouter();

    const { register, handleSubmit, errors } = useForm<FormInputs>();
    const [loginResponse, setLoginResponse] = useState<LoginMutation>();

    const onSubmit = async ({ email, password }: FormInputs) => {
        const data = await serverClient.request<
            LoginMutation,
            LoginMutationVariables
        >(LoginDocument, {
            email,
            password,
        });

        console.log(data.login.successful);

        if (data.login.successful) {
            router.push("/dashboard");
        } else {
            setLoginResponse(data);
        }
    };

    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>

            <main>
                <div className="mx-auto max-w-xl">
                    <StandardForm
                        title="Login"
                        handleSubmit={handleSubmit(onSubmit)}
                    >
                        <StandardForm.Input
                            htmlFor="email"
                            inRef={register({
                                ...requiredFieldValidation,
                                pattern: emailValidationRule,
                            })}
                        >
                            Email
                        </StandardForm.Input>

                        {loginResponse?.login.error.object === "email" &&
                            noErrors(errors) && (
                                <span className="text-xs text-red-500">
                                    * {loginResponse?.login.error.message}
                                </span>
                            )}

                        <StandardForm.Error error={errors.email} />

                        <StandardForm.Input
                            htmlFor="password"
                            type="password"
                            inRef={register({
                                ...requiredFieldValidation,
                                ...passwordValidation,
                            })}
                        >
                            Password
                        </StandardForm.Input>

                        {loginResponse?.login.error.object === "password" &&
                            noErrors(errors) && (
                                <span className="text-xs text-red-500">
                                    * {loginResponse?.login.error.message}
                                </span>
                            )}

                        {errors.password ? (
                            <span className="text-xs text-red-500">
                                * {errors.password.message}
                            </span>
                        ) : (
                            !loginResponse && (
                                <span className="text-xs text-gray-600">
                                    Must be between 4 and 32 characters long.
                                </span>
                            )
                        )}

                        <StandardForm.Button type="submit">
                            Login
                        </StandardForm.Button>
                    </StandardForm>

                    <div className="flex flex-row justify-center">
                        <Link href="/login/reset-password">
                            <a className="text-gray-500 transition hover:text-gray-600">
                                Forgot Password?
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
