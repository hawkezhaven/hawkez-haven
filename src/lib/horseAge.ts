export type HorseIdentity = {
  registeredName: string;
  dob: string;
  microchip: string;
};

/** Permanent identification records for Hawkez Haven horses. */
export const HORSE_IDENTITIES: Record<string, HorseIdentity> = {
  rip: {
    registeredName: "All Class AI (NZ)",
    dob: "2016-10-12",
    microchip: "985125000091723",
  },
  haven: {
    registeredName: "Xtrapenny (NZ)",
    dob: "2012-08-28",
    microchip: "985125000058840",
  },
  pedro: {
    registeredName: "Darhad (AUS)",
    dob: "2014-09-15",
    microchip: "985100012051656",
  },
  diablo: {
    registeredName: "Kermandie Star (AUS)",
    dob: "2022-10-02",
    microchip: "985125000132224",
  },
  ritz: {
    registeredName: "Point Break (NZ)",
    dob: "2016-10-30",
    microchip: "985125000092055",
  },
  electra: {
    registeredName: "Blacken (AUS)",
    dob: "2019-10-08",
    microchip: "985125000118328",
  },
  kohan: {
    registeredName: "Veneno (NZ)",
    dob: "2018-11-29",
    microchip: "985125000112397",
  },
  kahu: {
    registeredName: "Kahu Rock (NZ)",
    dob: "2015-10-17",
    microchip: "985125000093898",
  },
  khan: {
    registeredName: "Whiteout (NZ)",
    dob: "2015-10-27",
    microchip: "985125000076551",
  },
  joey: {
    registeredName: "Rampant (NZ)",
    dob: "2006-09-16",
    microchip: "985125000002695",
  },
};

/** Calculate a horse's current age from its recorded date of birth. */
export function getHorseAge(id: string): string {
  const identity = HORSE_IDENTITIES[id];
  if (!identity) return "Age not recorded";

  const [year, month, day] = identity.dob.split("-").map(Number);
  const today = new Date();
  let age = today.getFullYear() - year;

  const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
  if (today < birthdayThisYear) age -= 1;

  return `${age} ${age === 1 ? "year" : "years"}`;
}

export function getHorseIdentity(id: string): HorseIdentity | undefined {
  return HORSE_IDENTITIES[id];
}
