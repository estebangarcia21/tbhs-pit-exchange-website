import {
    passwordValidation,
    requiredFieldValidation,
    StandardForm,
} from "@App/components/forms/StandardForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface FormInputs {
    password: string;
    confirmPassword: string;
}

const Reset = () => {
    const { handleSubmit, register, errors } = useForm<FormInputs>();

    const router = useRouter();
    const { token } = router.query;

    const onSubmit = ({ password, confirmPassword }: FormInputs) => {};

    return (
        <div>
            <Head>
                <title>Reset Password</title>
            </Head>

            <main>
                <div className="mx-auto max-w-xl">
                    <StandardForm
                        title="Reset Password"
                        handleSubmit={handleSubmit(onSubmit)}
                    >
                        <StandardForm.Input
                            htmlFor="password"
                            type="password"
                            inRef={register({
                                ...requiredFieldValidation,
                                ...passwordValidation,
                            })}
                        >
                            New Password
                        </StandardForm.Input>

                        {errors.password && (
                            <span className="text-xs text-red-500">
                                * {errors.password.message}
                            </span>
                        )}

                        <StandardForm.Input
                            htmlFor="confirmPassword"
                            type="password"
                            inRef={register({
                                ...requiredFieldValidation,
                                ...passwordValidation,
                            })}
                        >
                            Confirm Password
                        </StandardForm.Input>

                        {errors.confirmPassword && (
                            <span className="text-xs text-red-500">
                                * {errors.confirmPassword.message}
                            </span>
                        )}

                        <StandardForm.Button type="submit">
                            Reset Password
                        </StandardForm.Button>
                    </StandardForm>
                </div>
            </main>
        </div>
    );
};

export default Reset;
