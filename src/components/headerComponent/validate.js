/**
 * Import header data arrays.
 */
import { safirHeaderData, adminHeaderData, userHeaderData, publicHeaderData } from "./data.js";

/**
 * Function to validate user roles and return corresponding header data.
 * @param {string} userRole - The role of the user.
 * @returns {Array} - The header data corresponding to the user role.
 */
export function getHeaderDataByRole(userRole) {
  // Define header data based on user role
  let headerData;

  switch (userRole) {
    case "safir":
      headerData = safirHeaderData;
      break;
    case "admin":
      headerData = adminHeaderData;
      break;
    case "user":
      headerData = userHeaderData;
      break;
    case "public":
      headerData = publicHeaderData;
      break;
    default:
      // If the user role is not recognized, return the header data for the public role
      headerData = publicHeaderData;
      break;
  }

  return headerData;
}
