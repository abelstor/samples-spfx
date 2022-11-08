import * as React from 'react';
import { Accordion } from '@pnp/spfx-controls-react';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { useList } from '@/hooks';
import { IEmployees } from '@/interfaces';
import swal from 'sweetalert';

export interface MatrizInterface {
	context: WebPartContext;
}

const Matriz: React.FC<MatrizInterface> = (props) => {

	const [items, loading] = useList('Employees', props.context);

	const confirm = (): void => {
		swal({
			title: "Are you sure?",
			text: "Are you sure that you want to leave this page?",
			icon: "warning",
			buttons: ["Cancel", "Yes, I am sure!"],
			// dangerMode: true,
		}).then(willDelete => {
			if (willDelete) {
				swal("Deleted!", "Your imaginary file has been deleted!", "success").catch(console.log);
			} else {
				swal("Your imaginary file is safe!").catch(console.log);
			}
		}).catch(console.log);
	}

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
							<div className={"itemContent row"}>
								<div className="col">
									<div className={"itemResponse"}>{o.Category}</div>
									<div className={"itemResponse"}>{o.Company}</div>
									<div className={"itemIndex"}>{o.LevelOfHappiness}</div>
								</div>
								<button
									onClick={confirm}
									className="btn btn-primary col">
									confirm
								</button>
							</div>
						</Accordion>
					))
			}
		</>
	);
};

export default Matriz;
