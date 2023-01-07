import React, { useState } from 'react';
import { Input } from '../../shared/UI/Input/Input';

export const SortingPanel = () => {
    const [queryStr, setQueryStr] = useState('sadfasdf');

    return (
        <div>
            <Input
                value={queryStr}
                onChange={setQueryStr}
            />
        </div>
    );
};
