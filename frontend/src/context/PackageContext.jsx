import { createContext, useContext, useState } from "react";

const PackageContext = createContext();

export function PackageProvider({ children }) {
  const [packageData, setPackageData] = useState({
    fromName: "",
    toName: "",
    title: "",
    message: "",
    theme: "blush",
    contents: []
  });

  return (
    <PackageContext.Provider
      value={{
        packageData,
        setPackageData
      }}
    >
      {children}
    </PackageContext.Provider>
  );
}

export function usePackage() {
  return useContext(PackageContext);
}