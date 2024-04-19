// Import the header component function
import header from "./headerComponent"; // Corrected import path

// Function to handle errors related to header data
export default function handleHeaderError(headerData) {
  if (!headerData.length) {
    console.error("headerData array is empty");
  } else {
    // Render the header if data is available
    header(headerData);
  }
}