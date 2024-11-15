import Button from "@/components/Button";
import Products from "@/components/Products";
import game from "@/assets/icons/g92-2-500x500 1.svg";
import star from "@/assets/icons/Vector.svg";
import { getStorage, ref, getMetadata } from "firebase/storage";
import { useEffect, useState } from "react";

const WishList = () => {
  const [WishList, setWishList] = useState([]);

  useEffect(() => {
    // Create a reference to the file whose metadata we want to retrieve
    const storage = getStorage();
    const forestRef = ref(storage, "Products");

    // Get metadata properties
    getMetadata(forestRef)
      .then((metadata) => {
        console.log(metadata);
        // Metadata now contains the metadata for 'images/forest.jpg'
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, []);

  return (
    <div className="px-5 pt-20 pb-[140px] ">
      <div className="flex justify-between w-full items-center mb-[60px]">
        <p className="text-[20px]">Wishlist(4)</p>
        <Button size="lg">Move All To Bag</Button>
      </div>
      <div className="flex justify-between sm:max-lg:flex-wrap sm:max-lg:justify-center sm:max-lg:gap-12 w-full">
        {/* {WishList.map((item) => {
          return (
            <div>
              <img src={item} alt="" />
            </div>
          );
        })} */}
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-3 mt-[80px] mb-[60px]">
          <div className="w-[20px] h-[40px] bg-red-500"></div>
          <p className="text-[16px] font-semibold ">Just For You</p>
        </div>
        <Button size="lg">See All</Button>
      </div>
      <div className="flex justify-between sm:max-lg:flex-wrap sm:max-lg:justify-center sm:max-lg:gap-12 w-full">
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
        <div>
          <Products
            image3={game}
            image1={star}
            number="80"
            cost1="120"
            cost2="160"
            text="HAVIT HV-G92 Gamepad"
            ok={true}
            percent="-25%"
          />
        </div>
      </div>
    </div>
  );
};

export default WishList;
