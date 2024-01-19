import home1 from "@/assets/icons/home1.png";
import home2 from "@/assets/icons/home2.png";
import home3 from "@/assets/icons/home3.png";
import home4 from "@/assets/icons/home4.png";
import truck from "@/assets/icons/truck.png";
import smart from "@/assets/icons/smart.png";
import camera from "@/assets/icons/camera.png";
import phone from "@/assets/icons/phone.png";
import star from "@/assets/icons/Vector.svg";
import speaker from "@/assets/icons/speaker.png";
import computer from "@/assets/icons/computer.png";
import Category from "@/components/Category";
import Information from "@/components/Information";
import Button from "@/components/Button";
import Products from "@/components/Products";

const HomePage = () => {
  return (
    <div className="px-[135px]">
      <div className="flex items-center gap-3">
        <div className="w-[20px] h-[40px] bg-red-500"></div>
        <p className="text-[16px] font-semibold text-red-500">Today’s</p>
      </div>
      <p className="text-4xl font-semibold mt-5 mb-[60px]">Flash Sales</p>
      <div className="flex w-full justify-between">
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
      </div>
      <div className="w-full flex justify-center mt-[76px] mb-[140px]">
        <Button paint="red" size="lg">View All Products</Button>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[20px] h-[40px] bg-red-500"></div>
        <p className="text-[16px] font-semibold text-red-500">Categories</p>
      </div>
      <p className="text-4xl font-semibold mt-5 mb-[60px]">
        Browse By Category
      </p>

      <div className="flex justify-between">
        <Category image={phone} name="Phone" />
        <Category image={smart} name="smart" />
        <Category image={camera} name="smart" />
        <Category image={computer} name="laptop" />
      </div>
      <div className="flex items-center gap-3 mt-[140px]">
        <div className="w-[20px] h-[40px] bg-red-500"></div>
        <p className="text-[16px] font-semibold text-red-500">This Month</p>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-4xl font-semibold mt-5 mb-[60px]">
          Best Selling Products
        </p>
        <Button paint="red" size="lg">
          View All
        </Button>
      </div>
      <div className="flex w-full justify-between">
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
      </div>
      <div className="w-full bg-black flex mb-[71px] mt-[140px] pl-[56px] py-[69px] gap-[43px]">
        <div>
          <p className="text-[#00FF66] mb-8">Categories</p>
          <p className="text-[48px] font-semibold text-white mb-[134px]">
            Enhance Your Music Experience
          </p>
          <Button paint="green" size="lg">
            Buy Now!
          </Button>
        </div>
        <img src={speaker} alt="" />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[20px] h-[40px] bg-red-500"></div>
        <p className="text-[16px] font-semibold text-red-500">Our Products</p>
      </div>
      <p className="text-4xl font-semibold mt-5 mb-[60px]">
        Explore Our Products
      </p>
      <div className="flex w-full justify-between mb-[60px]">
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
      </div>
      <div className="flex w-full justify-between mb-">
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
        <Products
          text="IPS LCD Gaming Monitor"
          cost1="370"
          cost2="400"
          image1={star}
          // image2={pic7}
          // image3={monitor}
          number="99"
          ok={true}
          percent="-25%"
        />
      </div>
      <div className="flex justify-center mt-[60px] mb-[166px]">
        <Button paint="red" size="lg">
          View All Products
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[20px] h-[40px] bg-red-500"></div>
        <p className="text-[16px] font-semibold text-red-500">Featured</p>
      </div>
      <p className="text-4xl font-semibold mt-5 mb-[60px]">New Arrival</p>

      <div className="flex gap-[30px]">
        <img src={home1} alt="" />
        <div className="flex flex-col gap-8">
          <img src={home2} alt="" />
          <div className="flex gap-[30px]">
            <img src={home3} alt="" />
            <img src={home4} alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-[88px] w-full justify-center my-[140px]">
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

export default HomePage;
