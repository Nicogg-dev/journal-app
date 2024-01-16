import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";

const formData = {
    email: '',
    password: ''
};

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm(formData);

    const isAuthenticating = useMemo(
        () => status === 'checking', [status]
    );

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginWithEmailPassword({ email, password }));
    }

    const onGoogleSignIn = () => {
        console.log('OnGoogleSignIn');
        dispatch(startGoogleSignIn())
    }


    return (

        <AuthLayout title="Login">

            <form
                className="grid grid-flow-row grid-cols-12 mt-4 animate__animated animate__fadeIn animate__faster"
                onSubmit={onSubmit}>

                <label htmlFor="Email" className="col-span-12 text-start">Email</label>
                <input
                    className="col-span-12 border border-gray-300 rounded-md p-2 mb-4"
                    type="text"
                    id="Email"
                    placeholder="Email"
                    autoComplete="email"
                    name="email"
                    onChange={onInputChange}
                    required />

                <label htmlFor="Password" className="col-span-12 text-start">Password</label>
                <input
                    className="col-span-12 border border-gray-300 rounded-md p-2 mb-4"
                    type="password"
                    id="Password"
                    placeholder="Password"
                    autoComplete="current-password"
                    name="password"
                    onChange={onInputChange}
                    required />

                <div
                    className={`col-span-12 p-4 mb-4 w-full text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-400 ${!errorMessage ? 'hidden' : ''}`}
                    role="alert">
                    <span className="font-medium">{errorMessage}</span>
                </div>

                <button
                    disabled={isAuthenticating}
                    className="col-span-12 bg-indigo-900 text-white rounded-md p-2"
                    type="submit">
                    Login
                </button>
            </form>

            <div className="flex justify-center gap-8 items-center">

                <button
                    disabled={isAuthenticating}
                    className="flex justify-center w-40 bg-indigo-900 text-white rounded-md py-2 mt-2"
                    onClick={onGoogleSignIn}>

                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                    </svg>
                    Google
                </button>

                <div className="grid grid-flow-row justify-end mt-2 underline">
                    <Link color="inherit" to="/auth/register">
                        Register
                    </Link>
                </div>
            </div>

        </AuthLayout>

    );
};
