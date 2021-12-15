import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { fetchAuthentication } from "../sagas/authenticationSaga";
import { Context } from "../state";

const Login = (props) => {
  const [ state, dispatch ] = useContext(Context);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetchAuthentication(data, state.baseUrl, dispatch)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
      />
      <input
        {...register("password", { required: true })}
      />
      {(errors.email || errors.password) && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

export default Login;