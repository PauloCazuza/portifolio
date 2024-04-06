'use-client';

interface ICardPercentage {
    title?: string;
    percentage?: number;
}

function CardPercentage({
    title,
    percentage = 20
}: ICardPercentage) {
    return (
        <div className="flex flex-col w-full px-10 py-5">
            <div className="flex justify-between">
                <p>{title}</p>
                <div>
                    {percentage}%
                </div>
            </div>
            <div className="w-full h-2 bg-gray-500 bg-opacity-50">
                <div
                    className="h-2 bg-blue-600"
                    style={{ width: percentage + '%' }}
                />
            </div>
        </div>
    );
}

export default CardPercentage;