import React, { useState, useEffect } from "react";
import axios from "axios";

function ScrollComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(0);
  console.log("pagenumber", pageNumber);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (pageNumber) => {
    try {
      setIsLoading(true);
      console.log("page", pageNumber);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`
      );
      const newData = await response.json();
      console.log(newData);
      setData((prevData) => [...prevData, ...newData]);
      setCount((prevCount) => prevCount + 1);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    // const footerHeight = document.querySelector(".footer").offsetHeight;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData(pageNumber);
      console.log("count", count);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div class="scroll-comp">
        {data.map((item) => (
          <div>
            <p class={item.id}>{item.id}</p>
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  );
}
export default ScrollComponent;
