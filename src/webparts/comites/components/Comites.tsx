import * as React from 'react';
import { SPComponentLoader } from '@microsoft/sp-loader';

import { IComitesProps } from './IComitesProps';
import { AppRouter } from '@/router';

SPComponentLoader.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');

const Comites: React.FC<IComitesProps> = (props) => {

  return (
    <div className="comites" id="workbenchPageContent">
      <AppRouter {...props} />
    </div>
  )
};

export default Comites;