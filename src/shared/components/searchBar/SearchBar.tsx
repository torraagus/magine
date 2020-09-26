import React, { FC, useEffect, useRef, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Nav, Logo, SearchIcon, CloseIcon } from "../navBar/navBar.styles";

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
		<Nav>
			<div style={{ width: "70%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<Logo onClick={() => history.push("/")}>Moviar</Logo>
				<form style={{ display: "flex" }} onSubmit={(e) => search(e)}>
					<SearchIcon onClick={(e) => search(e)} />
					<input
						ref={searchInput}
						style={{ height: 40, width: 200, textIndent: ".5rem" }}
						type="text"
						placeholder={"Search for a movie..."}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<CloseIcon onClick={onClose} />
				</form>
			</div>
		</Nav>
	);
};

export default withRouter(SearchBar);
