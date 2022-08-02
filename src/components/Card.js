const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card-container">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} alt="" />
            <div className="info">
                <img src="assets/star.svg" alt="" />
                <span>{props.rating}</span>
                <span>({props.reviews}) • </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <strong>From ${props.price}</strong> / person
            </p>
        </div>
    );
};

export default Card;
