import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const Login = () => {

    const { login } = useContext(UserContext);

    const [input, setInput] = useState({ email: "", Password: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = login(input.email, input.Password);

        if (res.success) {
            Swal.fire({
                title: "Login Successful!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
            <Navigate to="/" replace/>
        } else {
            setError(res.message);
            toast.error(res.message);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:border-green-500"
                            value={input.email}
                            onChange={(e) =>
                                setInput({ ...input, email: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:border-green-500"
                            value={input.Password}
                            onChange={(e) =>
                                setInput({ ...input, Password: e.target.value })
                            }
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg mt-2 hover:bg-green-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;