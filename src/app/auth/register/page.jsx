"use client";
import React, { useState } from "react";
import Head from "next/head";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    buildingNumber: "",
    country: "",
    city: "",
    zipCode: "",
    email: "",
    dateOfBirth: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle form submission here
    console.log(formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      buildingNumber: "",
      country: "",
      city: "",
      zipCode: "",
      email: "",
      dateOfBirth: ""
    });
  };

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register for an account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="buildingNumber">Building Number:</label>
          <input
            type="text"
            id="buildingNumber"
            name="buildingNumber"
            value={formData.buildingNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            {/* Populate countries dropdown here */}
          </select>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            {/* Populate cities dropdown based on selected country */}
          </select>
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
