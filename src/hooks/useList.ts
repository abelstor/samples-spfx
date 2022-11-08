import { useEffect, useState } from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { getSP } from '@/utils';

export const useList = (listName: string, context: WebPartContext): [any[], boolean] => {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getItems = async (): Promise<any> => {
            const sp = getSP(context);
            const list = sp.web.lists.getByTitle(listName).items();
            setItems(await list);
            setTimeout(() => setLoading(false), 1000);
        };

        getItems() as any;
    }, []);

    return [items, loading];
};