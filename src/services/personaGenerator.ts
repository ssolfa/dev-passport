import { CountryInfo } from "../types";
import { COUNTRY_DATA } from "../utils/constants";

export class PersonaGenerator {
  generate(timezoneName: string): CountryInfo {
    return COUNTRY_DATA[timezoneName] || COUNTRY_DATA["Asia/Seoul"];
  }
}
