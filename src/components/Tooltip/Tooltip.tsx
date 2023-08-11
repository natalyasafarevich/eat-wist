import React, { FC } from "react";
import "./Tooltip.scss";

type TooltipProps = {
		dataType: string;
		content: string;
		// Добавьте другие поля, если необходимо
};

const Tooltip: FC<TooltipProps> = ({ dataType,content }) => {
	return (
		<div className="tooltip">
			<div className="tooltip__wrap">
				<p className="tooltip__title">
					{dataType}
					<span className="tooltip__desc">{content}</span>
				</p>
			</div>
		</div>
	);
};

export default Tooltip;
