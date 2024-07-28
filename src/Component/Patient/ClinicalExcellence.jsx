import React, { useEffect, useState } from "react";

export default function ClinicalExcellence() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    // Fetch departments from the backend
    async function fetchDepartments() {
      try {
        const response = await fetch("/api/dr/departments");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    }

    fetchDepartments();
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl px-auto py-13 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 mx-20 sm:mx-40">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-blue-800 mb-5 sm:mb-10">
            Explore our Centres of Clinical Excellence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="h-full">
              <img
                src="src\assets\20220910104338.jpeg"
                alt="Explore our Centres of Clinical Excellence"
                className="h-full"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {departments.map((dept, index) => (
                  <div key={index} value={dept} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={`src/assets/${dept}.svg`}
                        alt={dept}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{dept}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
