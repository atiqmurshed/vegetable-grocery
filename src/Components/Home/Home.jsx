import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Heading from "../Shared/SectionHeading/Heading";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heading heading={'Featured Categories'}></Heading>
            <Card></Card>
        </div>
    );
};

export default Home;