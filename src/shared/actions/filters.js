import gql from 'graphql-tag';

const state = {
	start: null,
	end: null,
	startError: '',
	endError: '',
	name: '',
	message: '',
	buttonDisabled: true,
	__typename: 'Filters',
};


export const getFiltersData = gql`
	query getFiltersData {
		filters {
      start
			end,
			startError,
			endError,
			name,
			message,
			buttonDisabled
    }
	}
`;

export const changeFiltersData = gql`
mutation ($value: Object!, $label: String!) {
	changeFiltersData(value: $value, label: $label) @client {
		start
		end
	}
}
`;

const resolvers = {
	Mutation: {
		changeFiltersData: (_, variables, { cache }) => {
			const query = getFiltersData;
			const prevState = cache.readQuery({ query });

			const possibleErrors = {
				start: 'Start date cannot be greater than end date',
				end: 'End date cannot be less than start date',
			};

			let filters = { ...prevState.filters, ...{ [variables.label]: variables.value, [`${variables.label}Error`]: '', buttonDisabled: false } };

			const error = filters.end && filters.start && filters.end < filters.start;
			if (error) filters = { ...prevState.filters, ...{ [`${variables.label}Error`]: possibleErrors[variables.label] } };
			cache.writeQuery({ query, data: { filters } });
			return null;
		},
	},
};

const filters = {
	state,
	resolvers,
};

export default filters;

