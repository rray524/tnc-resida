"use client";
import SectionTitle from "@/components/title-component/section-title";
import React, { useEffect, useState } from "react";
import { PropertyDetails } from "@/types/types";
import { Pagination } from "@/components/pagination";
import PropertyPreloader from "@/components/property-preloader";
import PropertyCard from "@/components/property-card";
import { fetchProperties } from "../../action";

function RecentListing() {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties("new");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const currentItems = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div className="my-10">
        <SectionTitle
          subtitle="RECENT LISTING"
          title="Explore Your Ideal Home - Browse TNC HomeLand Latest Property"
          titleColor="text-black"
          className="text-center w-[80%] mx-auto dark:text-white"
        />
      </div>
      <div className="mb-4">
        {loadingData ? (
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 my-10">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className={`w-full xl:w-1/3 lg:w-1/3 md:w-1/2 px-4 mb-8`}
                  key={index}
                >
                  <div key={index} className="border border-gray-200 p-4">
                    <PropertyPreloader />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentItems.length !== 0 ? (
          <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] sm:text-center sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
            {currentItems.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        ) : (
          <div className=" max-h-14 w-full mx-auto">
            <h4 className="text-gray-600 dark:text-gray-100 text-center font-bold">
              No property listed yet!
            </h4>
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
}

export default RecentListing;
