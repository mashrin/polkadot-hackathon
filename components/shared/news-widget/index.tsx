import moment from 'moment';

export interface INewsItem {
    image: string;
    title: string;
    date: string | Date;
}

const NewsItem: React.FC<INewsItem> = ({ image, title, date }) => {
    return <div className="px-4 py-3 anim hover:bg-dark-hover cursor-pointer border-b border-gray-100 border-opacity-15">
        <div className="flex">
            <div className="flex-grow  items-center">
                <span className="block text-gray-600 text-xs">
                    {moment(date).fromNow()}
                </span>
                <span className="text-white text-md font-bold">{title}</span>
            </div>
            <div>
                <img src={image} className="w-12 h-12 rounded-lg" />
            </div>
        </div>
    </div>
}

const NewsWidget: React.FC = () => {
    return <div className="widget">
        <div className="px-4 border-b border-gray-100 border-opacity-15 py-2">
            <span className="text-xl font-bold text-white">
                What's happening
            </span>
        </div>
        <NewsItem image="/images/polka.jpg" title="Polkadot Hackathon deadline extended by a day" date={new Date('2022-7-12 20:40')} />
        <NewsItem image="/images/sub.jpg" title="Subsocial's website has been completely redone" date={new Date('2022-7-12 20:40')} />
        <NewsItem image="/images/sos.png" title="SOS App for COVID helped 3 Million people" date={new Date('2022-7-12 20:40')} />
        <NewsItem image="/images/personal.jpg" title="Thank you for your vote" date={new Date('2022-7-12 20:40')} />

        <div className="px-4 py-3">
            <span className="text-primary hover:text-primary-hover cursor-pointer hover:underline">
                Show more
        </span>
        </div>
    </div>
}

export default NewsWidget;