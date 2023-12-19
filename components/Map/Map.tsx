import './Map.scss'

const Map = ({ className }: { className: string }) => {
    const classes = className ? ('map ' + className) : 'map';
    const src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ae04db76534860063d708141119297b67b89e3586155556fcee97adc6eb02e84b&amp;source=constructor';
    return (
        <div className={classes}>
            <div className="map__content">
                <iframe src={src} allowFullScreen={true} frameBorder={0} width="100%" height="100%"></iframe>
            </div>
        </div>
    )
}

export default Map