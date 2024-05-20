import type { AppProps } from "next/app";

import "@/assets/styles/globals.scss";

import { QueryClient, QueryClientProvider } from "react-query";

export default function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	);
}
