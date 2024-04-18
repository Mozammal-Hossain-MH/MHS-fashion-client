import { useForm } from "react-hook-form";
import useAuthContext from "../../Hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        const { email, password } = data;
        login(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state.from.pathname : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f1e7e7] w-[320px] mx-auto px-6 py-3">
            <p className=" text-center">Login!</p>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email <span className="text-red-500">*</span></span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-500 text-xs mt-2">Email is required</span>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password <span className="text-red-500">*</span></span>
                </label>
                <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                {errors.password && <span className="text-red-500 text-xs mt-2">Password is required</span>}
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="bg-[#3586FF] text-white py-2 px-1 rounded transition-transform hover:scale-105 active:scale-95">Login</button>
            </div>
        </form>
    );
};

export default Login;