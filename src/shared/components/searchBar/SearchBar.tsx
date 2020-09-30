import React, { FC, useEffect, useRef, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Nav, Logo, SearchIcon, CloseIcon, Wrapper } from "../navBar/navBar.styles";
import { Form, SearchInput } from "./searchBar.styles";

type Props = {
	onClose: () => void;
};

const SearchBar: FC<RouteComponentProps<any> & Props> = ({ onClose, history }) => {
	const [query, setQuery] = useState<string>("");
	const searchInput = useRef<HTMLInputElement>(null);

	const search = (e) => {
		e.preventDefault();
		onClose();
		history.push({
			pathname: "/search",
			search: query,
		});
	};

	useEffect(() => {
		searchInput.current.focus();
	}, []);

	return (
		<Wrapper>
			<Nav>
				<Logo onClick={() => history.push("/")}>Moviar</Logo>
				<Form onSubmit={(e) => search(e)}>
					<SearchIcon onClick={(e) => search(e)} />
					<SearchInput
						ref={searchInput}
						type="text"
						placeholder={"Search for a movie..."}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<CloseIcon onClick={onClose} />
				</Form>
			</Nav>
		</Wrapper>
	);
};

export default withRouter(SearchBar);
