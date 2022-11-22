import classNames from 'classnames';

type TProps = {
    name: string;
    value: string | number;
    total: string | number;
    className?: string;
    white?: boolean;
}

const ValueBox = ({ name, value, total, className, white}: TProps) => {
    const calculatePercentage = () => {
        const percent = ((Number(value) / Number(total)) * 100).toFixed(2);
        return {
            value    : `${percent}%`,
            raw      : percent,
            above_one: Number(percent) > 1
        };
    };

    return (
        <div className={classNames({ className }, 'flex flex-row items-center justify-start mb-2')}>
            <div className={classNames('flex basis-28 mr-2 text-center bg-gray-200 rounded-md')}>
                <span className={classNames('flex-1 border-r bg-gray-300 border-zinc-300 rounded-l-md text-sm p-1', { 'text-white': white })}>{name}</span>
                <span className={classNames('flex-1 text-sm p-1', { 'text-white': white })}>{value}</span>
            </div>
            <div className="bg-gray-200 flex flex-auto items-center justify-start self-stretch rounded-md">
                <span className={classNames('text-sm py-1 px-2 rounded-l-md w-20 text-center', { 'bg-black text-white': calculatePercentage().above_one, 'bg-zinc-500 text-gray-200': !calculatePercentage().above_one })}>
                    {calculatePercentage().value}
                </span>
                <div className="bg-zinc-400 h-full" style={{ width: calculatePercentage().value }}></div>
            </div>
        </div>
    );
};

export { ValueBox };
