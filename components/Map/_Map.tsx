'use client'
import './Map.scss'
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'


const SignRegMap = ({ className }: { className: string }) => {
    const classes = className ? ('map ' + className) : 'map'

    return (
        <div className={classes}>
            <div className='map__content'>
                {/* <YMaps query={{ ns: "use-load-option", load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon" }}>
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9, controls: ["zoomControl", "fullscreenControl"], }}>
                        <Placemark defaultGeometry={[55.75, 37.57]} properties={{ balloonContentBody: "This is balloon loaded by the Yandex.Maps API module system", }} />
                    </Map>
                </YMaps> */}
            </div>
        </div>
    )
}

export default SignRegMap