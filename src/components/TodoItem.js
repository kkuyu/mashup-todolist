import { memo } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const CheckCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	width: 32px;
	height: 32px;
	font-size: 24px;
	border: 1px solid #ced4ad;
	border-radius: 50%;
	cursor: pointer;
	${(props) =>
		props.done &&
		css`
			color: #38d9d9;
			border: 1px solid #38d9d9;
		`}
`;
const Text = styled.div`
	flex: 1;
	font-size: 21px;
	color: #495057;
	${(props) =>
		props.done &&
		css`
			color: #ced4da;
		`}
	}}
`;
const Remove = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: #dee2e6;
	opacity: 0;
	cursor: pointer;
	&:hover {
		color: #ff6b6b;
	}
`;
const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 0;
	&:hover {
		${Remove} {
			opacity: 1;
		}
	}
`;

function TodoItem({ id, done, text }) {
	const dispatch = useTodoDispatch();
	const onToggle = () => dispatch({ type: "TOGGLE", id });
	const onRemove = () => dispatch({ type: "REMOVE", id });

	return (
		<TodoItemBlock>
			<CheckCircle done={done} onClick={onToggle}>
				{done && <MdDone />}
			</CheckCircle>
			<Text done={done}>{text}</Text>
			<Remove onClick={onRemove}>
				<MdDelete />
			</Remove>
		</TodoItemBlock>
	);
}

export default memo(TodoItem);
