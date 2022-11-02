import * as React from 'react';
import { Accordion } from '@pnp/spfx-controls-react';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { useList } from '@/hooks';
import { IEmployees } from '@/interfaces';

export interface MatrizInterface {
	context: WebPartContext;
}

const Matriz : React.FC<MatrizInterface> = (props) => {

	const [items, loading] = useList('Employees', props.context);

	return (
		<>
			{
				loading ? <h5 className="alert alert-primary" style={{ 'textAlign': 'center' }}>Loading...</h5>
					:
					items.map((o: IEmployees, idx: number) => (

						<Accordion
							key={idx}
							title={o.Title}
							defaultCollapsed={true}
							collapsedIcon={"ChevronDown"}
							expandedIcon={"ChevronUp"}
							className={"itemCell"}>
							<div className={"itemContent"}>
								<div className={"itemResponse"}>{o.Category}</div>
								<div className={"itemResponse"}>{o.Company}</div>
								<div className={"itemIndex"}>{o.LevelOfHappiness}</div>
							</div>
						</Accordion>
					))
			}
		</>
	);
};

export default Matriz;
