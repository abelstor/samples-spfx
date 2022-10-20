import * as React from 'react';
import { AppComites } from '@/AppComites';
import { IComitesProps } from './IComitesProps';
import { SPComponentLoader } from '@microsoft/sp-loader';

SPComponentLoader.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');

const Comites: React.FC<IComitesProps> = (props) => {

  return (
    <AppComites {...props} />
  )
};

export default Comites;