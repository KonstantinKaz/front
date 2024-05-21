// profile/ProfileForm.tsx
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import EditProfile from "./EditProfile";

interface FormValues {
	name: string;
	picture: FileList | null;
}

const ProfileForm: FC = () => {
	const [formData, setFormData] = useState<FormValues | null>(null);

	const { register, handleSubmit } = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		setFormData(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					name="name"
					type="text"
					className="border border-gray-300 p-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
					{...register("name", { required: true })}
					style={{
						padding: "10px",
						marginBottom: "10px",
						width: "100%",
						boxSizing: "border-box",
					}}
					placeholder="Name"
				/>

				<label htmlFor="picture">Picture:</label>
				<input
					id="picture"
					name="picture"
					type="file"
					accept="image/*"
					{...register("picture", { required: true })}
					style={{ marginBottom: "10px" }}
				/>
				<button
					type="submit"
					style={{
						padding: "10px",
						width: "100%",
						boxSizing: "border-box",
						cursor: "pointer",
						backgroundColor: "#007bff",
						color: "#fff",
						border: "none",
						borderRadius: "5px",
					}}
				>
					Submit
				</button>
			</form>
			{formData && formData.picture && formData.picture[0] && (
				<PDFDownloadLink
					document={<EditProfile name={formData.name} picture={URL.createObjectURL(formData.picture[0])} />}
					fileName="file.pdf"
				>
					{({ loading }) => (loading ? "Loading document..." : "Download PDF")}
				</PDFDownloadLink>
			)}
		</div>
	);
};

export default ProfileForm;
