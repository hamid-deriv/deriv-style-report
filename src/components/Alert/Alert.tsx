import React from 'react';
import classNames from 'classnames';

type TProps = {
    children?: React.ReactNode;
    title?: string;
    text?: string
    className?: string;
    is_warning?: boolean;
}

const Alert = ({ className, title, text, children, is_warning }: TProps) => {
    return (
        <div className={classNames('bg-gray-200 rounded-md mb-4 text-justify', className, { 'bg-orange-200': is_warning })}>
            {title && <h3 className={classNames('text-l font-bold p-4 bg-gray-300 rounded-t-md', { 'bg-orange-300': is_warning })}>{title}</h3>}
            {text ? text : children}
        </div>
    );
};

export default Alert;
