import { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 50%);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	font-size: 60px;
	color: #fff;
	background-color: #38d9a9;
	transition: 0.125s all ease-in;
	border: none;
	outline: none;
	border-radius: 40px;
	z-index: 5;
	cursor: pointer;
	&:hover {
		background-color: #63e6be;
	}
	&:active {
		background-color: #20c997;
	}
	${(props) =>
		props.open &&
		css`
			transform: translate(-50%, 50%) rotate(45deg);
			background: #ff6b6b;
			&:hover {
				background-color: #ff8787;
			}
			&:active {
				background-color: #fa5252;
			}
		`}
`;
const InsertFromPositioner = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
`;
const InsertFrom = styled.div`
	padding: 32px 32px 72px;
	background-color: #f8f9fa;
	border-top: 1px solid #e9ecef;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
`;
const Input = styled.input`
	width: 100%;
	padding: 12px;
	font-size: 18px;
	border: 1px solid #dee2e6;
	border-radius: 4px;
	outline: none;
	box-sizing: border-box;
`;

function TodoCreate() {
	const [open, setOpen] = useState(false);
	const onToggle = () => setOpen(!open);

	return (
		<>
			{open && (
				<InsertFromPositioner>
					<InsertFrom>
						<Input
							placeholder="할 일을 입력 후, Enter 를 누르세요"
							autoFocus
						/>
					</InsertFrom>
				</InsertFromPositioner>
			)}
			<CircleButton onClick={onToggle} open={open}>
				<MdAdd />
			</CircleButton>
		</>
	);
}

export default TodoCreate;
