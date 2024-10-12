import React from "react";

// Définir l'interface des props
interface GreetingProps {
  name: string; // Le nom doit être une chaîne de caractères
}

// Convertir la fonction en composant fonctionnel typé
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
