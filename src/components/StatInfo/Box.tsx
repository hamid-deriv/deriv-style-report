import classNames from 'classnames';

type TProps = {
    title: string;
    value: string | number;
    className?: string;
    white?: boolean;
}

const Box = ({ title, value, className, white}: TProps) => {
    return (
        <div className={className}>
            <span className={classNames('block text-xs font-bold', { 'text-white': white })}>{title}</span>
            {Array.isArray(value) ? value.map((idx, val) => {
                return (
                    <span key={idx}>{val}</span>
                );
            }) : <span className={classNames('block text-3xl font-bold leading-snug', { 'text-white': white })}>{value}</span>
            }
        </div>
    );
};

export { Box };
