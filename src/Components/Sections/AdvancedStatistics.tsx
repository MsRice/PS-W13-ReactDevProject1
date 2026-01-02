
import icon_brand_recognition from '../../assets/images/svgs/icon-brand-recognition.svg'
import icon_detailed_records from '../../assets/images/svgs/icon-detailed-records.svg'
import icon_fully_customizable from '../../assets/images/svgs/icon-fully-customizable.svg'

const AdvancedStatistics = () => {
    return (
    <section className="container">
        <div className="statistics--wrapper" id="statistics">
            <div className="statistics__info--wrapper">
                <div className="statistics__info--title">Advanced Statistics</div>
                <div className="statistics__info--sub-title">Track how your links are performing across the web with our advanced statistics dashboard.</div>
            </div>
            <div className="statistics__cards--wrapper">
                <div className="statistics__card--wrapper">
                    <div className="card__head--wrapper">
                        <figure className="card__image--wrapper">
                            <img className="card__image--img" src={icon_brand_recognition} alt="" />
                        </figure>
                    </div>
                    <div className="card__info--wrapper">
                        <div className="card__info--title">Brand Recognition</div>
                        <div className="card__info--sub-title"> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</div>
                    </div>
                </div>
                <div className="statistics__card--wrapper">
                    <div className="card__head--wrapper">
                        <figure className="card__image--wrapper">
                            <img className="card__image--img" src={icon_detailed_records} alt="" />
                        </figure>
                    </div>
                    <div className="card__info--wrapper">
                        <div className="card__info--title">Detailed Reccords</div>
                        <div className="card__info--sub-title"> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</div>
                    </div>
                </div>
                <div className="statistics__card--wrapper">
                    <div className="card__head--wrapper">
                        <figure className="card__image--wrapper">
                            <img className="card__image--img" src={icon_fully_customizable} alt="" />
                        </figure>
                    </div>
                    <div className="card__info--wrapper">
                        <div className="card__info--title">Fully Customizable</div>
                        <div className="card__info--sub-title"> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );
}

export default AdvancedStatistics;
