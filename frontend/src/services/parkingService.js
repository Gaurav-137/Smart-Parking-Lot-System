// frontend/src/services/parkingService.js

import axios from "axios";

const BASE_URL = "http://localhost:5000/api/parking";

// 🚘 Call backend to park vehicle
export const parkVehicle = async (vehicle) => {
  try {
    const response = await axios.post(`${BASE_URL}/entry`, vehicle);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Server error" };
  }
};

// 🚪 Call backend to exit vehicle
export const exitVehicle = async (ticketId) => {
  try {
    const response = await axios.post(`${BASE_URL}/exit`, { ticketId });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Server error" };
  }
};

// 📊 Get available spots
export const getAvailability = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/availability`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Server error" };
  }
};