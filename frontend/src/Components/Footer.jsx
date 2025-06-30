import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* footer for desktop */}
      <footer className="lg:container mx-auto h-100 hidden lg:block xl:block">
        <div className="footer-header container flex gap-10 ">
          <div className="footer-top-left sm:-w-[30%] w-[35%] mb-5 font-semibold text-[22px]">
            <h3>Useful Links</h3>
          </div>
          <div className="footer-top-right flex gap-5 w-[65%] ">
            <h3 className="mb-5 font-semibold text-[22px]">Categories</h3>
            <Link className="mt-1.5 text-green-600 text-[17px] font-semibold">
              See All
            </Link>
          </div>
        </div>
        <div className="footer-bottom container flex justify-between gap-10">
          <div className="footer-left-part flex gap-22 w-[35%]">
            <div className="footer-left-1 flex flex-col gap-2 text-neutral-600 text-[17px]">
              <Link>Blog</Link>
              <Link>Privacy</Link>
              <Link>Terms</Link>
              <Link>FAQs</Link>
              <Link>Security</Link>
              <Link>Contract</Link>
            </div>
            <div className="footer-left-2 flex flex-col gap-2 text-neutral-600 text-[17px]">
              <Link>Partner</Link>
              <Link>Franchise</Link>
              <Link>Seller</Link>
              <Link>Warehouse</Link>
              <Link>Deliver</Link>
              <Link>Resources</Link>
            </div>
            <div className="footer-left-3 flex flex-col gap-2 text-neutral-600 text-[17px]">
              <Link>Recipes</Link>
              <Link>Bistro</Link>
            </div>
          </div>
          <div className="footer-right-part flex gap-22 w-[65%]">
            <div className="footer-right-1 flex flex-col gap-2 text-neutral-600 text-[17px]">
              <Link>Vegetables & Fruits</Link>
              <Link>Cold Drinks & Juices</Link>
              <Link>Bakery & Biscuits</Link>
              <Link>Dry Fruits, Masala & Oil</Link>
              <Link>Paan Corner</Link>
              <Link>Pharma & Wellness</Link>
              <Link>Pharma & Wellness</Link>
            </div>
            <div className="footer-right-2 flex flex-col gap-2 text-neutral-600 text-[17px]">
              <Link>Dairy & Breakfast</Link>
              <Link>Instant & Frozen Food</Link>
              <Link>Sweet Tooth</Link>
              <Link>Sauces & Spreads</Link>
              <Link>Organic & Premium</Link>
              <Link>Cleaning Essentials</Link>
              <Link>Personal Care</Link>
            </div>
            <div className="footer-right-3 flex flex-col gap-2 text-neutral-600 text-[17px]">
              <Link>Munchies</Link>
              <Link>Tea,Coffee & Health Drinks</Link>
              <Link>Sweet Tooth</Link>
              <Link>Sauces & Spreads</Link>
              <Link>Organic & Premium</Link>
              <Link>Books</Link>
              <Link>E-Gift Cards</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* footer for mobile */}
      <footer className="mx-auto h-100 lg:hidden">
        <div className="mobile-footer flex flex-col gap-10">
          <div className="mobile-footer-top flex flex-col w-[90%] mx-auto">
            <div className="mobile-footer-top-title  mb-5 font-semibold text-[22px]">
              <h3>Useful Links</h3>
            </div>
            <div className="mobile-footer-top-link flex gap-16 sm:gap-24 md:gap-36">
              <div className="mobile-footer-top-1 flex flex-col gap-3 text-neutral-600 sm:text-[16px] md:text-[18px] text-[13px]">
                <Link>Blog</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
                <Link>FAQs</Link>
                <Link>Security</Link>
                <Link>Contract</Link>
              </div>
              <div className="mobile-footer-top-2 flex flex-col gap-3 text-neutral-600 sm:text-[16px] md:text-[18px] text-[13px]">
                <Link>Partner</Link>
                <Link>Franchise</Link>
                <Link>Seller</Link>
                <Link>Warehouse</Link>
                <Link>Deliver</Link>
                <Link>Resources</Link>
              </div>
              <div className="mobile-footer-top-3 flex flex-col gap-3 text-neutral-600 sm:text-[16px] md:text-[18px] text-[13px]">
                <Link>Recipes</Link>
                <Link>Bistro</Link>
              </div>
            </div>
          </div>
          <div className="mobile-footer-bottom flex flex-col w-[90%] mx-auto">
            <div className="mobile-footer-bottom-title flex gap-5">
              <h3 className="mb-5 font-semibold text-[22px]">Categories</h3>
              <Link className="mt-1.5 text-green-600 text-[17px] font-semibold">
                See All
              </Link>
            </div>
            <div className="mobile-footer-botom-link flex gap-12 sm:gap-24 md:gap-36">
              <div className="mobile-footer-bottom-1 flex flex-col gap-3 text-neutral-600 sm:text-[16px] md:text-[18px] text-[13px]">
                <Link>Vegetables & Fruits</Link>
                <Link>Cold Drinks & Juices</Link>
                <Link>Bakery & Biscuits</Link>
                <Link>Dry Fruits, Masala & Oil</Link>
                <Link>Paan Corner</Link>
                <Link>Pharma & Wellness</Link>
                <Link>Pharma & Wellness</Link>
              </div>
              <div className="mobile-footer-bottom-2 flex flex-col gap-3 text-neutral-600 sm:text-[16px] md:text-[18px] text-[13px]">
                <Link>Dairy & Breakfast</Link>
                <Link>Instant & Frozen Food</Link>
                <Link>Sweet Tooth</Link>
                <Link>Sauces & Spreads</Link>
                <Link>Organic & Premium</Link>
                <Link>Cleaning Essentials</Link>
                <Link>Personal Care</Link>
              </div>
              <div className="mobile-footer-bottom-3 flex flex-col gap-3 text-neutral-600 sm:text-[16px] md:text-[18px] text-[13px]">
                <Link>Munchies</Link>
                <Link>Tea,Coffee & Health Drinks</Link>
                <Link>Sweet Tooth</Link>
                <Link>Sauces & Spreads</Link>
                <Link>Organic & Premium</Link>
                <Link>Books</Link>
                <Link>E-Gift Cards</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
