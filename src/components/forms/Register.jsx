import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import { useAuthContext } from "../../app/context/AuthContext";

const Register = () => {
  const { createUser } = useAuthContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const countries = [
    "Argentina",
    "Brazil",
    "Finland",
    "Denmark",
    "Norway",
    "Portugal",
    "United Kingdom",
    "United States",
  ];

  const cities = {
    Argentina: [
      "Buenos Aires",
      "Córdoba",
      "Rosario",
      "Mendoza",
      "San Miguel de Tucumán",
      "La Plata",
      "Mar del Plata",
      "Salta",
      "Santa Fe",
      "San Juan",
      "Resistencia",
      "Santiago del Estero",
      "Corrientes",
      "Posadas",
      "San Salvador de Jujuy",
      "Neuquén",
      "Formosa",
      "San Fernando del Valle de Catamarca",
      "San Luis",
      "La Rioja",
      "Rio Gallegos",
      "Santa Rosa",
      "Ushuaia",
    ],
    Brazil: [
      "São Paulo",
      "Rio de Janeiro",
      "Brasília",
      "Salvador",
      "Fortaleza",
      "Belo Horizonte",
      "Manaus",
      "Curitiba",
      "Recife",
      "Porto Alegre",
      "Belém",
      "Goiânia",
      "Guarulhos",
      "Campinas",
      "São Luís",
      "São Gonçalo",
      "Maceió",
      "Duque de Caxias",
      "Teresina",
      "Natal",
      "Nova Iguaçu",
      "Campo Grande",
      "Santo André",
      "João Pessoa",
    ],
    Finland: [
      "Helsinki",
      "Espoo",
      "Tampere",
      "Vantaa",
      "Oulu",
      "Turku",
      "Jyväskylä",
      "Lahti",
      "Kuopio",
      "Pori",
      "Kouvola",
      "Joensuu",
      "Lappeenranta",
      "Hämeenlinna",
      "Vaasa",
      "Seinäjoki",
      "Rovaniemi",
      "Mikkeli",
      "Kokkola",
      "Porvoo",
    ],
    Denmark: [
      "Copenhagen",
      "Aarhus",
      "Odense",
      "Aalborg",
      "Esbjerg",
      "Randers",
      "Kolding",
      "Horsens",
      "Vejle",
      "Roskilde",
      "Herning",
      "Silkeborg",
      "Næstved",
      "Greve",
      "Tårnby",
      "Frederiksberg",
      "Ballerup",
      "Rødovre",
      "Viborg",
      "Køge",
    ],
    Norway: [
      "Oslo",
      "Bergen",
      "Trondheim",
      "Stavanger",
      "Drammen",
      "Fredrikstad",
      "Kristiansand",
      "Sandnes",
      "Tromsø",
      "Sarpsborg",
      "Skien",
      "Ålesund",
      "Sandefjord",
      "Haugesund",
      "Tønsberg",
      "Moss",
      "Porsgrunn",
      "Bodø",
      "Arendal",
      "Hamar",
    ],
    Portugal: [
      "Lisbon",
      "Porto",
      "Vila Nova de Gaia",
      "Amadora",
      "Braga",
      "Setúbal",
      "Coimbra",
      "Funchal",
      "Almada",
      "Aveiro",
      "Viseu",
      "Rio Tinto",
      "Leiria",
      "Odivelas",
      "Evora",
      "Queluz",
      "Aveiro",
      "Faro",
      "Barreiro",
      "Viana do Castelo",
    ],
    "United Kingdom": [
      "London",
      "Manchester",
      "Birmingham",
      "Glasgow",
      "Liverpool",
      "Edinburgh",
      "Bristol",
      "Sheffield",
      "Leeds",
      "Newcastle upon Tyne",
      "Leicester",
      "Nottingham",
      "Southampton",
      "Cardiff",
      "Belfast",
      "Brighton",
      "Stoke-on-Trent",
      "Coventry",
      "Derby",
      "Reading",
    ],
    "United States": [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
      "Austin",
      "Jacksonville",
      "San Francisco",
      "Indianapolis",
      "Columbus",
      "Fort Worth",
      "Charlotte",
      "Seattle",
      "Denver",
      "El Paso",
    ],
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Here you can handle form submission, validation, etc.

    const userData = {
      firstName,
      lastName,
      dateOfBirth,
      country,
      city,
      email,
      password,
    };

    await createUser(email, password, userData);
  };

  return (
    <div>
      <div className="flex justify-center rounded-xl p-8 bg-[#6b7280] mt-4">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="John"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          {/* Date of Birth */}
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-date-of-birth"
              >
                Date of Birth
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-date-of-birth"
                type="date"
                placeholder="YYYY-MM-DD"
                value={dateOfBirth}
                onChange={e => setDateOfBirth(e.target.value)}
              />
            </div>
          </div>
          {/* Email and Confirm Email */}
          <div className="flex flex-wrap  mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="john@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-confirm-email"
              >
                Confirm Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-confirm-email"
                type="email"
                placeholder="john@email.com"
                value={confirmEmail}
                onChange={e => setConfirmEmail(e.target.value)}
              />
            </div>
          </div>
          {/* Password and Confirm Password */}
          <div className="flex flex-wrap  mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="Type your password (minimum of 6 characters)"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-confirm-password"
                type="password"
                placeholder="Retype your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap  mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-building-number"
              >
                Building Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-building-number"
                type="password"
                placeholder="25B"
                value={buildingNumber}
                onChange={e => setBuildingNumber(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-building-number"
              >
                Zip Code
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip-code"
                type="password"
                placeholder="123123-23"
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
              />
            </div>
          </div>
          {/* Country and City */}
          <div className="flex flex-wrap  mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-country"
              >
                Country
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-country"
                value={country}
                onChange={e => setCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                {countries.map(countryName => (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                value={city}
                onChange={e => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                {cities[country] &&
                  cities[country].map(cityName => (
                    <option key={cityName} value={cityName}>
                      {cityName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          {/* Submit button */}
          <div className="flex flex-wrap mt-8 mb-6 justify-center">
            {" "}
            <Button type="submit">Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
