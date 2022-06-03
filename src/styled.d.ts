// import original module declarations
import 'styled-components';
import { ThemeType } from './styles/DefaultTheme';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {
		name: string;
		colors: {
			bg: string;
			text: string;
			elements: string;
		};
	}
}
