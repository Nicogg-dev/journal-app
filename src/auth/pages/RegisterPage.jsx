import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";


const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length > 5, 'La contraseña debe de ser mayor a 5 caracteres'],
  displayName: [(value) => value.trim().length > 2, 'El nombre debe de ser mayor a 2 caracteres'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === 'checking'
    , [status])

  const {
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid
  } = useForm(formData, formValidations);


  const isAuthenticating = useMemo(
    () => status === 'checking', [status]
  );


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState))

  }

  return (
    <AuthLayout title="Register">

      <form
        className="grid grid-flow-row grid-cols-12 mt-4 animate__animated animate__fadeIn animate__faster"
        onSubmit={onSubmit}>

        <label className={`col-span-12 text-start ${!displayNameValid || !formSubmitted ? 'text-black' : 'text-red-700'}`}>
          Nombre Completo
          {
            !!displayNameValid && formSubmitted &&
            <span className="text-red-700"> - {formValidations.displayName[1]}</span>
          }
        </label>
        <input
          className="col-span-12 border border-gray-300 rounded-md p-2 mb-4"
          type="text"
          placeholder="Nicolas Giraldo"
          name="displayName"
          autoComplete="username"
          onChange={onInputChange} />

        <label className={`col-span-12 text-start ${!emailValid || !formSubmitted ? 'text-black' : 'text-red-700'}`}>
          Correo
          {
            !!emailValid && formSubmitted &&
            <span className="text-red-700"> - {formValidations.email[1]}</span>
          }
        </label>
        <input
          className="col-span-12 border border-gray-300 rounded-md p-2 mb-4"
          type="email"
          placeholder="email@google.com"
          name="email"
          autoComplete="email"
          onChange={onInputChange} />

        <label className={`col-span-12 text-start ${!passwordValid || !formSubmitted ? 'text-black' : 'text-red-700'}`}>
          Contraseña
          {
            !!passwordValid && formSubmitted &&
            <span className="text-red-700"> - {formValidations.password[1]}</span>
          }
        </label>
        <input
          className="col-span-12 border border-gray-300 rounded-md p-2 mb-4"
          type="password"
          placeholder="Contraseña"
          name="password"
          autoComplete="current-password"
          onChange={onInputChange} />

        <div
          className={`col-span-12 p-4 mb-4 w-full text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-400 ${!errorMessage ? 'hidden' : ''}`}
          role="alert">
          <span className="font-medium">{errorMessage}</span>
        </div>

        <button
          disabled={isCheckingAuthentication}
          className="col-span-12 bg-indigo-900 text-white rounded-md p-2 mt-2"
          type="submit">
          Crear cuenta
        </button>

      </form>

      <div className="grid grid-flow-col justify-end mt-2">
        <h5 className="mr-2">¿Ya tienes cuenta?</h5>
        <Link color="inherit" to="/auth/login" className="underline">
          Ingresar
        </Link>
      </div>

    </AuthLayout>
  );
};

