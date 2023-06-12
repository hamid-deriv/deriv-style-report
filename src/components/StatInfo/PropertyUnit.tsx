import React from 'react';
import classNames from 'classnames';
import { percent, sortValues } from '@/utils';

type TProps = {
    className?: string;
    prop: any;
    title: string;
}

const PropertyUnit = ({ className, prop, title }: TProps) => {
    const [is_open, setIsOpen] = React.useState(false);
    const total = prop.total;
    const unique = prop.totalUnique;
    const ratio = percent(unique, total);

    if (title.startsWith('-') || unique === 1) {
        return null;
    }

    return (
        <div className={classNames(className, 'mb-6')}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
                className={classNames('flex items-center justify-start bg-gray-300 border-2 border-gray-300 p-2 rounded-t-md cursor-pointer', { 'rounded-b-md': !is_open })}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <h3 className="basis-1/4 text-l font-semibold">{title}</h3>
                <div className="basis-3/4 flex items-center justify-end">
                    <span className="text-sm">
                        {`${total} / ${unique}`}
                    </span>
                    <span className="bg-black rounded-md p-2 text-sm text-white ml-4">{ratio}</span>
                </div>
            </div>
            <div className="flex flex-auto items-center justify-start self-stretch rounded-b-md py-4 border-l-2 border-r-2 border-b-2">
                {sortValues(prop.unique).map((k: any) => {
                    return <div key={k[0]} className="bg-slate-300 px-2 py-1 mx-2 h-full text-center text-sm rounded-md" style={{ width: percent(k[1], total), minWidth: '80px' }}>
                        {`${k[0]}: ${k[1]}`}
                    </div>;
                })}
            </div>
        </div>
    );
};

export { PropertyUnit };
