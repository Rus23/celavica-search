export const CyrillicToCelavicaHash: Record<string, string> = {
  ć: "c",
  č: "c",
  š: "s",
  ž: "z",
  đ: "d",
};

export function makeStringBald(str: string): string {
  return str
    .split("")
    .map((char) => CyrillicToCelavicaHash[char] || char)
    .join("");
}

export function includes(string: string, searchString: string): boolean {
  string = makeStringBald(string);
  searchString = makeStringBald(searchString);

  return string.includes(searchString);
}

export function indexOf(string: string, searchString: string): number {
  string = makeStringBald(string);
  searchString = makeStringBald(searchString);

  return string.indexOf(searchString);
}