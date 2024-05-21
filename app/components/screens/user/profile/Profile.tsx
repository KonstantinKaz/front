// profile/Profile.tsx
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
	return (
		<div>
			<h1>Profile</h1>
			<Link href="/profile/edit-profile">Редактировать профиль</Link>
		</div>
	);
};

export default Profile;
