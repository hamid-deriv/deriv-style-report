import React from 'react';
import classNames from 'classnames';
import uniq from 'lodash.uniq';
import { percent, countRepeat } from '@/utils';

type TProps = {
    className?: string;
    prop: string[];
    title: string;
}

const Property = ({ className, prop, title }: TProps) => {
    const [is_open, setIsOpen] = React.useState(false);
    const total = prop.length;
    const unique = uniq(prop).length;

    const Comparator = (a: any, b: any) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    };

    if (title.startsWith('-') || total < 3 || unique < 3 || total === unique) {
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
                    <span className="bg-black rounded-md p-2 text-sm text-white ml-4">{percent(unique, total)}</span>
                </div>
            </div>
            {is_open && (
                <div className="flex flex-wrap border-l-2 border-r-2 border-b-2 p-2 pt-5 rounded-b-md">
                    {countRepeat(prop).sort(Comparator).reverse().map((k: any) => {
                        return (
                            <div key={k[0]} className={classNames('mr-2 mb-4 text-center')}>
                                <span className={classNames('border-r bg-gray-300 rounded-l-md text-sm py-2 px-3')}>{k[0]}</span>
                                <span className={classNames('text-sm bg-gray-200 rounded-r-md py-2 px-3')}>{k[1]}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export { Property };
