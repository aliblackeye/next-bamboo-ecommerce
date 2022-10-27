import Button from "../../FormElements/Buttons/Button";

const FooterSubscribe = () => {
  return (
    <div className="sm:flex-col lg:flex-row flex flex-1 items-center py-5 md:py-0 justify-center gap-5">
      <span className="font-bold text-white">SUBSCRIBE TO OUR NEWSLETTER</span>
      <Button color="primary">Enter Your E-mail Address Here →</Button>
    </div>
  );
};

export default FooterSubscribe;
