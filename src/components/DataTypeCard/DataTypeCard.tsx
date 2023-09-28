import React, { FC, useState } from "react";
import dataType from "../../moduls/dafaultValue";
import { Link } from "react-router-dom";
import "./DataTypeCard.scss";

const DataTypeCard: FC = () => {
	const [isMove, setIsMove] = useState<boolean>(false);

	return (
		<div className="data-card">
			<div className="data-card__wrap">
				{dataType.map((type, i) => {
					return (
						<div key={type.name} className={`data-card__box data-card__box_${i}`}>
							<div className="data-card__content">
								<div className="data-card__info">
									<p className="data-card__title">{type.name}</p>
									<Link
										className="data-card__link button-green"
										to={`/datatype/${type.name}`}>
										see more
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DataTypeCard;
