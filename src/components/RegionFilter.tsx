import { useCountryContext } from '../context/CountryContext';
import { SelectContainer, CustomSelect } from '../styles/Select';

interface SelectProps {
	label: string;
}

const RegionFilter = ({ label }: SelectProps) => {
	const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	const regionsOptions = regions.map((region: string) => ({ value: region, label: region }));
	const { getRegionCountries } = useCountryContext();

	const handleChange = (option: { value: string }) => {
		getRegionCountries(option.value);
	};

	return (
		<SelectContainer>
			<CustomSelect
				className="select"
				classNamePrefix="select"
				placeholder={label}
				options={regionsOptions}
				isClearable={false}
				isSearchable={false}
				onChange={(country: any) => handleChange(country)}
			/>
		</SelectContainer>
	);
};

export default RegionFilter;
