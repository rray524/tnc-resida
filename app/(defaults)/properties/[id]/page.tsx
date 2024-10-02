import React, { Suspense, use } from "react";
import { fetchSingleProperty } from "./action";
import ImageCard from "./components/image-card";
import PropertyDetailsSection from "./components/additional-details";
import ContactForm from "./components/contact-form";
import PropertyHeader from "./components/property-header";
import PropertyContactInfo from "./components/property-contact";
import PropertyNotFoundFallback from "./components/property-error-handler-fallback";
import LoadingFallback from "./components/loading-fallback";
import PropertyType from "./components/property-type-component";
import { generateAdditionalDetails } from "./utils";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const property = await fetchSingleProperty(params.id);

  return {
    title: property?.exterior.property_type || "Property Details",
    description:
      property?.property_description || "Detailed view of the property",
  };
}

const PropertyDetails = ({ params }: PageProps) => {
  const property = use(fetchSingleProperty(params.id));
  const apiKey = process.env.NEXT_PUBLIC_SITE_KEY!;
  if (!property) {
    return <PropertyNotFoundFallback />;
  }
  const additionalDetails = generateAdditionalDetails(property);

  const images = property.image_urls.map((url: string) => ({
    src: `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${url}`,
    alt: `property image`,
  }));

  return (
    <>
      <div className="mb-5">
        <div className="flex flex-row justify-center bg-blue-300 dark:bg-gulf-blue">
          <ImageCard images={images} initialIndex={0} />
        </div>
        <PropertyType
          category={property.category}
          status={property.available_for}
        />
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-5 px-5 sm:px-12 gap-5">
          <PropertyHeader
            price={property.general_details.price}
            city={property.city}
            squareFeet="960"
            beds="3"
            baths="3"
          />
          <PropertyContactInfo
            address={property.general_details.address}
            contactNumbers={["(603) 555-0123", "(209) 555-0104"]}
          />
        </div>
        <hr className="h-[2px] my-5" />
        <div className="max-w-[1320px] mx-auto relative">
          <div className="">
            <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 md:text-right md:justify-items-right  lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
              <div className="md:col-span-2 text-left flex flex-col overflow-auto  ">
                <div className="my-10">
                  <h1 className="text-[18px] font-semibold text-left sm:text-center lg:text-left opacity-85 dark:text-white">
                    Property Description
                  </h1>

                  <hr className="h-[2px] bg-green-500 border-0 w-[200px] my-4" />
                  <p className="text-[17px] tracking-wide text-gray-500 text-left my-3 lg:text-left">
                    {property.property_description}
                  </p>
                </div>

                <PropertyDetailsSection
                  title="ADDITIONAL DETAILS"
                  details={additionalDetails}
                />
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gulf-blue mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-5 px-5 sm:px-12 gap-5">
          <div className="secondary-container middle-allign">
            <h2 className="font-bold text-[40px] dark:text-white text-center">
              Property Location: Your Gateway to Desirable Living
            </h2>

            <div className="full-width-block">
              <div className="map w-embed w-iframe my-10">
                <iframe
                  width="100%"
                  height="520"
                  src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${property.latitude},${property.longitude}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PropertyDetailsPage = (props: PageProps) => (
  <Suspense fallback={<LoadingFallback />}>
    <PropertyDetails {...props} />
  </Suspense>
);

export default PropertyDetailsPage;
