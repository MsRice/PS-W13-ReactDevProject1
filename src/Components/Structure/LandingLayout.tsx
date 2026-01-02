import AdvancedStatistics from "../Sections/AdvancedStatistics";
import Booster from "../Sections/Booster";
import Landing from "../Sections/Landing";
import ShorteningBar from "../Sections/ShorteningBar";
import Footer from "../UI/Footer";

const LandingLayout = () => {
    return (
       <>
        <Landing />
        <ShorteningBar />
        <AdvancedStatistics />
        <Booster />
        <Footer />
       </>
    );
}

export default LandingLayout;
