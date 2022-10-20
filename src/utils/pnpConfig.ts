import { WebPartContext } from '@microsoft/sp-webpart-base';
import { LogLevel, PnPLogging } from '@pnp/logging';
import { SPFI, spfi, SPFx } from '@pnp/sp';

import '@pnp/sp/batching';
import '@pnp/sp/items';
import '@pnp/sp/lists';
import '@pnp/sp/webs';

let _sp: SPFI = null;

export const getSP = (context?: WebPartContext): SPFI => {
    if (_sp === null && context !== null) {
        _sp = spfi().using(SPFx(context)).using(PnPLogging(LogLevel.Warning));
    }
    return _sp;
};