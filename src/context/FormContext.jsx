import React, { createContext, useState, useEffect } from "react";

// Erstellen Sie den Kontext
const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Laden Sie die Daten aus dem localStorage, wenn der Context initialisiert wird
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    // Speichern Sie die Daten im localStorage, wenn sich die Daten ändern
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
