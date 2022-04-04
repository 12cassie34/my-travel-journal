import globalImg from './images/global.png'

function Header() {
    return (
        <div className="header">
            <img src={globalImg} alt="Global Logo" className="header__img" />
            <h1 className="header__title">my travel journal.</h1>
        </div>
    )
}

export default Header