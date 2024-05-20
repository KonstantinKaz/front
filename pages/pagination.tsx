import Layout from "@/components/layout/Layout";
import PhotoGallery from "@/components/screens/Pagination/PhotoGallery";
import fetchPhotos from "@/utils/fetchPhotos";

import { FC } from "react";

export async function getServerSideProps() {
	const initialPhotos = await fetchPhotos(1);

	return {
		props: {
			initialPhotos,
		},
	};
}

const PaginationPage: FC = ({ initialPhotos }) => {
	return (
		<Layout>
			{/* <Pagination /> */}
			<PhotoGallery initialPhotos={initialPhotos} />
		</Layout>
	);
};

export default PaginationPage;
