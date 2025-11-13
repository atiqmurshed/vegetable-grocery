import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Menu from "../Menu";
import Heading from "../Shared/SectionHeading/Heading";
import ShopCard from "../ShopCard/ShopCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heading heading={'Featured Categories'}></Heading>
            <Card></Card>
            <ShopCard></ShopCard>
            <Menu></Menu>
        </div>
    );
};

export default Home;