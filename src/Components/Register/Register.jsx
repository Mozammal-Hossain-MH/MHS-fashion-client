import { useForm } from "react-hook-form";
import useAuthContext from "../../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
    const { createAccount } = useAuthContext();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, password } = data;
        createAccount(email, password)
            .then(result => {
                if (result.user) {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                        .then(() => {
                            if (result.user.displayName) {
                                const user = {
                                    name: result.user.displayName,
                                    email: result.user.email,
                                    photo: result.user.photoURL
                                }
                                axiosSecure.post('/users', user)
                                    .then(res => {
                                        if (res.data.insertedId) {
                                            Swal.fire({
                                                position: "center",
                                                icon: "success",
                                                title: "Account Created Successfully",
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                        }
                                    })
                                navigate('/');
                            }
                        })
                }

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f1e7e7] w-[320px] mx-auto px-6 py-3">
            <p className=" text-center">Register!</p>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Username <span className="text-red-500">*</span></span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-500 text-xs mt-2">Username is required</span>}
            </div>
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
            </div>
            <div className="form-control mt-6">
                <button className="bg-[#3586FF] text-white py-2 px-1 rounded transition-transform hover:scale-105 active:scale-95">Register</button>
            </div>
        </form>
    );
};

export default Register;