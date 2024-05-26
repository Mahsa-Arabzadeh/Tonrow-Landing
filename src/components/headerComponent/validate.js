"use strict";

/**
 * Import header data arrays.
 */
import {
  safirHeaderData,
  adminHeaderData,
  userHeaderData,
  publicHeaderData,
} from "./data.js";
import { setPublicBtn } from "../heroBannerComponent/index.js";

/**
 * Function to validate user roles and return corresponding header data.
 * @param {string} userRole - The role of the user.
 * @returns {Array} - The header data corresponding to the user role.
 * @throws {Error} - Throws an error if the user role is not recognized.
 */
export function getHeaderDataByRole(userRole) {
  // Define default header data for public role
  let headerData = publicHeaderData;

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
      setPublicBtn(true);
      break;
    default:
      // Throw an error if the user role is not recognized
      throw new Error(`Unrecognized user role: ${userRole}`);
  }

  return headerData;
}
