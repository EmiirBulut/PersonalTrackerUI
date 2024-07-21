import ItemCard from "../../components/Card/card";
import ContentArea from "../../components/ContentArea/content-area";
import Header from "../../components/Header/header";
import Slider from "../../components/Slider/slider";
import ContentAreaHeader from "../../components/ContentArea/ContentAreaHeader/content-area-header";

const BooksPage = () => {
  return (
    <>
      <Header />
      <ContentArea>
        <Slider />
        <ContentAreaHeader />
        <ItemCard />

      </ContentArea>
    </>
  );
};

export default BooksPage;
