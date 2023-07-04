import React, { useState, useEffect, useRef } from "react";
import "./scroll-comp.scss";
import Image from "../Image/Image";

const ScrollComp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (pageNumber) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`
      );
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isLoading
    ) {
      fetchData(pageNumber);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, pageNumber]);

  return (
    <div className="scroll-comp">
      {data.map((item) => (
        <div key={item.id} className="scoll-item">
          {/* Render your data */}
          <p>{item.id}</p>
          <p>{item.title}</p>
          <Image src={item.thumbnailUrl} />
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default ScrollComp;
