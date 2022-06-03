import type { ReactNode } from 'react';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';

function SafeHydrate({ children }: any) {
	return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);

	return getLayout(
		<SafeHydrate>
			<Component {...pageProps} />
		</SafeHydrate>
	);
};

export default MyApp;
