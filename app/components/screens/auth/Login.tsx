import { login, logout } from "@/services/auth.service";
import { IUser, UserModel } from "@/shared/transaction.types";
import { FC, useState } from "react";
import LoginForm from "./LoginForm";

const Login: FC = () => {
	const initialUserState: IUser = UserModel;

	const [user, setUser] = useState(initialUserState);

	const handleLogin = async () => {
		try {
			const data = await login(user);
			console.log("Login successful", data);
			setUser(initialUserState);
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-white p-8 shadow-md rounded-md w-96">
				<h1 className="text-2xl font-bold mb-4">Login</h1>
				<LoginForm user={user} setUser={setUser} handleLogin={handleLogin} handleLogout={handleLogout} />
			</div>
		</div>
	);
};

export default Login;
