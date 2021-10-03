import { dictCyrillicToCelavica } from "./dictCyrillicToCelavica";
import { dictLatinToCelavica } from "./dictLatinToCelavica";

type Alphabet = "cyrillic" | "latin";

let defaultAlphabet: Alphabet = "latin";

export function getDefaultAlphabet(): Alphabet {
  return defaultAlphabet;
}

export function setDefaultAlphabet(alphabet: Alphabet = defaultAlphabet): void {
  defaultAlphabet = alphabet;
}

export function getDict(
  alphabet: Alphabet = defaultAlphabet
): Record<string, string> {
  switch (alphabet) {
    case "latin": {
      return dictLatinToCelavica;
    }
    case "cyrillic": {
      return dictCyrillicToCelavica;
    }

    default: {
      return dictLatinToCelavica;
    }
  }
}

export function convertToCelavica(
  string: string,
  alphabet: Alphabet = defaultAlphabet
): string {
  const dict = getDict(alphabet);

  return string
    .split("")
    .map((char) => dict[char] || char)
    .join("");
}

export function includes(
  string: string,
  searchString: string,
  alphabet: Alphabet = defaultAlphabet
): boolean {
  string = convertToCelavica(string, alphabet);
  searchString = convertToCelavica(searchString, alphabet);

  return string.includes(searchString);
}

export function indexOf(
  string: string,
  searchString: string,
  alphabet: Alphabet = defaultAlphabet
): number {
  string = convertToCelavica(string, alphabet);
  searchString = convertToCelavica(searchString, alphabet);

  return string.indexOf(searchString);
}
