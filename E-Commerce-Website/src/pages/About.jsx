import about from "@/assets/icons/about.png";
import Information from "@/components/Information";
import RoutePage from "@/components/PageRoutes/RoutePage";
import se1 from "@/assets/icons/Services.png";
import se2 from "@/assets/icons/Services2.png";
import se3 from "@/assets/icons/Services3.png";
import se4 from "@/assets/icons/Services4.png";
import Guys from "@/components/Guys";
import guy1 from "@/assets/icons/guy1.png";
import guy2 from "@/assets/icons/guy2.png";
import guy3 from "@/assets/icons/guy3.png";
import truck from "@/assets/icons/truck.png";

const About = () => {
  return (
    <div className="px-[135px] pt-20 pb-[140px] flex flex-col gap-10">
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
        <Information
          image={se1}
          text="Sallers active our site"
          number="10.5"
          font="32px"
        />
        <Information
          image={se2}
          color="red"
          text="Mopnthly Produduct Sale"
          number="33k"
          font="32px"
        />
        <Information
          image={se3}
          text="Customer active in our site"
          number="45.5k"
          font="32px"
        />
        <Information
          image={se4}
          text="Anual gross sale in our site"
          number="25k"
          font="32px"
        />
      </div>
      <div className="flex gap-[30px]">
        <Guys image={guy3} name="Tom Cruise" work="Founder & Chairman" />
        <Guys image={guy2} name="Emma Watson" work="Managing Director" />
        <Guys image={guy1} name="Will Smith" work="Product Designer" />
      </div>
      <div className="flex gap-[88px] w-full justify-center">
        <Information
          image={truck}
          number="FREE AND FAST DELIVERY"
          font="20px"
          text="Free delivery for all orders over $140"
        />
        <Information
          image={truck}
          number="24/7 CUSTOMER SERVICE"
          font="20px"
          text="Friendly 24/7 customer support"
        />
        <Information
          image={truck}
          number="MONEY BACK GUARANTEE"
          font="20px"
          text="We reurn money within 30 days"
        />
      </div>
    </div>
  );
};

export default About;
