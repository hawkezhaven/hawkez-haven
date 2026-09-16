const HORSE_DOBS: Record<string, string> = {
  diablo: "2022-10-02",
  ritz: "2016-10-30",
  electra: "2019-10-08",
  haven: "2012-08-28",
  kohan: "2018-11-29",
  rip: "2016-10-12",
  kahu: "2015-10-17",
  khan: "2015-10-27",
  pedro: "2014-09-15",
  joey: "2006-09-16",
};

/** Calculate a horse's current age from its recorded date of birth. */
export function getHorseAge(id: string): string {
  const dob = HORSE_DOBS[id];
  if (!dob) return "Age not recorded";

  const birthDate = new Date(`${dob}T00:00:00`);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const birthdayThisYear = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
  );

  if (today < birthdayThisYear) age -= 1;

  return `${age} ${age === 1 ? "year" : "years"}`;
}
