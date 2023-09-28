import React, { FC } from "react";
import "./Tooltip.scss";

type TooltipProps = {
	content: string;
	// Добавьте другие поля, если необходимо
};

const Tooltip: FC<TooltipProps> = ({ content }) => {
	return (
		<div className="tooltip">
			<div className="tooltip__wrap">
				<p className="tooltip__title">
					<span className="tooltip__desc">{content}</span>
				</p>
			</div>
		</div>
	);
};

export default Tooltip;
