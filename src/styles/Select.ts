import React from 'react';
import styled from 'styled-components';
import ReactSelect, { StylesConfig } from 'react-select';

export const SelectContainer = styled.div`
	margin-block-end: 2rem;
	position: relative;
`;

export const CustomSelect = styled(ReactSelect)`
	&.select {
		display: inline-block;
		min-width: 13.5rem;

		@media (min-width: 1280px) {
			min-width: 12rem;
		}
	}

	.select {
		&__control {
			background-color: hsl(${({ theme }) => theme.colors.elements});
			border: none;
			border-radius: 0.5rem;
			box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
			color: ${({ theme }) => theme.colors.text};

			@media (min-width: 1280px) {
				font-size: 0.875rem;
			}
		}

		&__value-container {
			padding: 1rem 2rem;
		}

		&__single-value {
			color: ${({ theme }) => theme.colors.text};
		}

		&__indicator-separator {
			display: none;
		}

		&__menu {
			background-color: hsl(${({ theme }) => theme.colors.elements});
			border-radius: 0.5rem;
			color: hsl(${({ theme }) => theme.colors.text});
			margin-top: 4px;
			padding-block: 0.5rem;
		}

		&__option {
			background-color: hsl(${({ theme }) => theme.colors.elements});
			color: hsl(${({ theme }) => theme.colors.text});
			padding: 0.25rem 2rem;

			@media (min-width: 1280px) {
				font-size: 0.875rem;
			}

			&--is-selected {
				background-color: hsl(${({ theme }) => theme.colors.bg});
				font-weight: 600;
			}
		}

		&__indicator {
			color: hsl(${({ theme }) => theme.colors.text});

			&:hover {
				color: hsl(${({ theme }) => theme.colors.text} / 0.5);
			}
		}

		&__placeholder {
			color: hsl(${({ theme }) => theme.colors.text});
		}
	}

	/* &::after {
		content: '';
		width: 0.8em;
		height: 0.5em;
		background-color: hsl(${({ theme }) => theme.colors.text});
		clip-path: polygon(100% 0%, 0 0%, 50% 100%);
		margin-inline-end: 1rem;
	}

	&:focus-within {
		outline: 2px solid hsl(${({ theme }) => theme.colors.text});
	} */
`;

export const StandardSelect = styled.select`
	appearance: none;
	background-color: transparent;
	border: none;
	font-family: inherit;
	font-size: inherit;
	cursor: inherit;
	line-height: inherit;
	margin: 0;
	outline: none;
	padding: 1rem;

	&::-ms-expand {
		display: none;
	}

	&::placeholder {
		color: ${({ theme }) => theme.colors.text};
	}
`;

export const SelectLabel = styled.label`
	color: ${({ theme }) => theme.colors.text};
`;
