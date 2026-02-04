import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch, useAppSelector } from '../app/store';
import { registerUser } from '../features/auth/authThunks';

const RegisterPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isRegisterSuccess } = useAppSelector((state: RootState) => state.auth);
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerUser(form))

    }
    useEffect(() => {
        if (isRegisterSuccess) {
            navigate("/login")
        }
    }, [isRegisterSuccess])
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-[450px] bg-emerald-600 p-5 rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-center text-white">Register</h2>
                <div className="space-y-8 mt-6">
                    <input
                        placeholder="Email"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-0 text-white placeholder:text-white/70"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-0 text-white placeholder:text-white/70"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </div>
                <div className="mt-5 flex justify-end">
                    <button className="bg-white px-5 py-2 rounded-lg text-emerald-600 text-center font-medium cursor-pointer" type="submit">Register</button>
                </div>
                <p className="text-end text-white mt-2">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterPage
