import pin from "./images/pin.png"

function Card(props) {
    const {
        imageUrl,
        title,
        location,
        googleMapsUrl,
        startDate,
        endDate,
        description,
    } = props.item

    return (
        <div className="card">
            <div className="card__image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="card__content">
                <div className="card__content__location">
                    <div className="card__content__location__country">
                        <img src={pin} alt="Pin" />
                        <span className="card__content__location__country__text">
                            {location}
                        </span>
                    </div>
                    <div className="card__content__location__map">
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>
                <div className="card__content__title">{title}</div>
                <div className="card__content__date">
                    {startDate} - {endDate}
                </div>
                <div className="card__content__description">{description}</div>
            </div>
        </div>
    );
}

export default Card
