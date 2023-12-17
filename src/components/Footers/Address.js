import SmallHeading from "./SmallHeading";

const Address = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center md:flex-1">
      <div className="flex flex-col gap-1">
        <SmallHeading>FIND US</SmallHeading>
        <iframe
          title="Reach TEDxIPSA Indore at IPS Academy, Indore, Madhya Pradesh, India via Google Maps"
          src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.9389094412036!2d75.82401977530296!3d22.65606622943243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc0bf32599bf%3A0x1008b35026e513e3!2sInstitute%20of%20Engineering%20%26%20Science%2C%20IPS%20Academy!5e0!3m2!1sen!2sin!4v1702837932663!5m2!1sen!2sin"
          className="w-[250px] md:w-[300px]"
          width="300"
          height="100"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, borderRadius: "5px" }}
          allowFullScreen
        ></iframe>
        <p className="footer_text py-1">
          Institute Of Engineering & Science, IPS Academy
          <br />
          Indore, Madhya Pradesh,
          <br />
          India - 452012
        </p>
      </div>
    </div>
  );
};

export default Address;
