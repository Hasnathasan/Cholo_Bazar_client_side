import Slider from "react-slick";
import useFictionBooks from "../../../Hooks/useFictionBooks";
import FicNonFicCard from "../FicNonFicCard/FicNonFicCard";
import useNonFictionBooks from "../../../Hooks/useNonFictionBooks";
import useReligiousBooks from "../../../Hooks/useReligiousBooks";
import useAcademicBooks from "../../../Hooks/useAcademicBooks";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "./FictionNonFicBookContainer.css";
import arrowDown from '../../../../public/arrow-down.svg'
const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#1db7ff",
        padding: "10px",
        boxShadow: "-6px 0px 14px 1px #4fc7ffb9",
        borderRadius: "2px",
        width: "40px",
        height: "80px",
        zIndex: "10",
        display: "flex",
        alignItems: "center",
        color: "black",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#1db7ff",
        padding: "10px",
        boxShadow: "6px 0px 14px 1px #4fc7ffb9",
        borderRadius: "2px",
        width: "40px",
        height: "80px",
        zIndex: "10",
        display: "flex",
        alignItems: "center",
        color: "black",
      }}
      onClick={onClick}
    >
      H
    </div>
  );
};

const FictionNonFicBookContainer = () => {
  const [fictionBooks, isFictionBooksLoading] = useFictionBooks();
  const [nonFictionBooks, isNonFictionBooksLoading] = useNonFictionBooks();
  const [religiousBooks, isReligiousBooksLoading] = useReligiousBooks();
  const [academicBooks, isAcademicBooksLoading] = useAcademicBooks();
  const tagsOfFictionBooks = [
    "All in Fiction Books",
    "উপন্যাস",
    "গল্প, কবিতা ও ছড়া",
    "সায়েন্স ফিকশন",
    "রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার",
    "কমিক, রম্য ও শিশুকিশোর",
  ];
  const tagsOfNonFictionBooks = [
    "All in Non-fiction Books",
    "ব্যবসা, বিনিয়োগ ও অর্থনীতি",
    "বঙ্গবন্ধু, বাংলাদেশ ও মুক্তিযুদ্ধ",
    "রাজনীতি,ইতিহাস ও ঐতিহ্য",
    "জীবনী, স্মৃতিচারণ ও সাক্ষাৎকার",
    "বিজ্ঞান ও প্রযুক্তি",
    "আত্ম-উন্নয়ন ও মোটিভেশন",
    "বিবিধ",
  ];
  const tagsOfreligiousBooks = [
    "All in Religious Books",
    "কুরআন ও হাদীস",
    "জীবনী ও ইতিহাস-ঐতিহ্য",
    "ইসলামি সাহিত্য ও গবেষণা",
    "ইসলামী আদর্শ ও মতবাদ",
    "আমল ও বিধিবিধান",
  ];
  const tagsOfAcademicBooks = [
    "All in Career & Academic Books",
    "স্কুল,কলেজ, মাদ্রাসা ও বিশ্ববিদ্যালয়",
    "বিসিএস এবং নিয়োগ পরীক্ষা",
    "বিশ্ববিদ্যালয় ও কলেজ ভর্তি",
    "ইভাষা ও অভিধান",
  ];

  // if(isFictionBooksLoading || isNonFictionBooksLoading || isReligiousBooksLoading){
  //     return <h1>Loading</h1>
  // }
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 2.7,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto my-10">
      <h2 className="text-lg font-bold text-gray-700 mb-3">{""}</h2>
      <div className="hidden md:block">
        <Slider {...settings}>
          <FicNonFicCard
            header={"ফিকশন বই"}
            books={fictionBooks}
            tags={tagsOfFictionBooks}
            apiPath={"books"}
          ></FicNonFicCard>
          <FicNonFicCard
            header={"নন ফিকশন বই"}
            books={nonFictionBooks}
            tags={tagsOfNonFictionBooks}
            apiPath={"books"}
          ></FicNonFicCard>
          <FicNonFicCard
            header={"ধর্মীয় বই"}
            books={religiousBooks}
            tags={tagsOfreligiousBooks}
            apiPath={"books"}
          ></FicNonFicCard>
          <FicNonFicCard
            header={"ক্যারিয়ার ও একাডেমিক বই"}
            books={academicBooks}
            tags={tagsOfAcademicBooks}
            apiPath={"books"}
          ></FicNonFicCard>
        </Slider>
      </div>
      <div className="md:hidden space-y-6">
        <Accordion
          variant="splitted"
          defaultExpandedKeys={["1"]}
        >
          <AccordionItem
          className="accrodion-item-1"
            key="1"
            aria-label="Accordion 1"
            startContent={<p className="ps-4">ফিকশন বই</p>}
            indicator={<img className="w-6 h-6 rotate-90" src={arrowDown} />}
          >
            <FicNonFicCard
              books={fictionBooks}
              tags={tagsOfFictionBooks}
              apiPath={"books"}
            ></FicNonFicCard>
          </AccordionItem>
          <AccordionItem className="accrodion-item-2" key="2" aria-label="Accordion 2" startContent={<p className="ps-4">নন ফিকশন বই</p>}>
            <FicNonFicCard
              books={nonFictionBooks}
              tags={tagsOfNonFictionBooks}
              apiPath={"books"}
            ></FicNonFicCard>
          </AccordionItem>
          <AccordionItem className="accrodion-item-3" key="3" aria-label="Accordion 3" startContent={<p className="ps-4">ধর্মীয় বই</p>}>
            <FicNonFicCard
              books={religiousBooks}
              tags={tagsOfreligiousBooks}
              apiPath={"books"}
            ></FicNonFicCard>
          </AccordionItem>
          <AccordionItem className="accrodion-item-4" key="4" aria-label="Accordion 4" startContent={<p className="ps-4">ক্যারিয়ার ও একাডেমিক বই</p>}>
            <FicNonFicCard
              books={academicBooks}
              tags={tagsOfAcademicBooks}
              apiPath={"books"}
            ></FicNonFicCard>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FictionNonFicBookContainer;
