import styled from "styled-components";
import { PrimaryBtnSC } from "../../styled-components/components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: ${props => props.upper ? '1rem' : '3rem'};
	padding-bottom: 2rem;
`;

export const Next = styled(PrimaryBtnSC)`
	width: 125px;
	margin: 0 0 0 0.25rem;
`;
export const Prev = styled(PrimaryBtnSC)`
	width: 125px;
	margin: 0 0.25rem 0 0;
`;
