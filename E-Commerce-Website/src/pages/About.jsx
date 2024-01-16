import about from "@/assets/icons/about.png";
import Information from "@/components/Information";
import RoutePage from "@/components/PageRoutes/RoutePage";
import se1 from "@/assets/icons/Services.png";
import se2 from "@/assets/icons/Services2.png";
import se3 from "@/assets/icons/Services3.png";
import se4 from "@/assets/icons/Services4.png";
import Guys from "@/components/Guys";
import guy1 from "@/assets/icons/Frame 874.svg";
import guy2 from "@/assets/icons/image 51.svg";
import guy3 from "@/assets/icons/image 47.svg";


const About = () => {
  return (
    <div className="px-32 pt-20 flex flex-col gap-10">
      <RoutePage>About</RoutePage>
      <div className="flex items-center gap-[75px] mt-[42px]">
        <div className="w-[525px]">
          <h1 className="font-semibold text-[54px] mb-10">Our Story</h1>
          <p className="mb-6 text-justify	">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-justify	">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={about} alt="" className="w-[600px] h-[500px]" />
      </div>
      <div className="flex gap-[30px]">
        <Information image={se1} text="Sallers active our site" number="10.5" />
        <Information
          image={se2}
          color="red"
          text="Mopnthly Produduct Sale"
          number="33"
        />
        <Information
          image={se3}
          text="Customer active in our site"
          number="45.5"
        />
        <Information
          image={se4}
          text="Anual gross sale in our site"
          number="25"
        />
      </div>
      <div className="flex gap-[30px]">
        <Guys image={guy1} name="Tom Cruise" work="Founder & Chairman" />
        <Guys image={guy2} name="Emma Watson" work="Managing Director" />
        <Guys image={guy3} name="Will Smith" work="Product Designer" />
      </div>
    </div>
  );
};

export default About;
