// utils/fetchPhotos.js
import axios from "axios";

const PAGE_SIZE = 10;

const fetchPhotos = async (page) => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/photos", {
		params: {
			_page: page,
			_limit: PAGE_SIZE,
		},
	});
	return res.data;
};

export default fetchPhotos;
