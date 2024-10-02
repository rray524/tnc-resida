import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.846489941163!2d90.41251851482223!3d23.750728794546966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8934d8a0e53%3A0xd798084dd885e67d!2sZeroGround!5e0!3m2!1sen!2sbd!4v1678762542221!5m2!1sen!2sbd"
        width="100%"
        height="700px"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
