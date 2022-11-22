import React from 'react';
import classNames from 'classnames';

type TProps = {
    children: React.ReactNode;
    title?: any;
    has_section?: boolean
    className?: string;
}

const Container = ({ children, className, title, has_section }: TProps) => {
    return (
        <div className={classNames('mb-24', className)}>
            <h2 className={classNames('text-3xl font-bold mb-4', { 'mb-12': has_section })}>{title}</h2>
            {children}
        </div>
    );
};

export default Container;
