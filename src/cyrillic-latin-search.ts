import { dictCyrillicToCelavica } from "./dictCyrillicToCelavica";
import { dictLatinToCelavica } from "./dictLatinToCelavica";

export type Alphabet = "cyrillic" | "latin";

const alphabetList: Alphabet[] = ["cyrillic", "latin"];

let defaultAlphabet: Alphabet = "latin";

function checkAlphabet(alphabet: Alphabet, fnName: string = ""): void {
  if (alphabetList.includes(alphabet)) {
    return;
  }

  const start = fnName ? `Function: '${fnName}': ` : "";
  throw new Error(
    `${start}Argument: 'alphabet' must have values: 'cyrillic' or 'latin'.`
  );
}

function handleAlphabet(alphabet: Alphabet | null): Alphabet {
  return alphabet || defaultAlphabet;
}

export function getDefaultAlphabet(): Alphabet {
  return defaultAlphabet;
}

export function setDefaultAlphabet(alphabet: Alphabet): void {
  checkAlphabet(alphabet, "setDefaultAlphabet");

  defaultAlphabet = alphabet;
}

export function getDict(
  alphabet: Alphabet | null = defaultAlphabet
): Record<string, string> {
  alphabet = handleAlphabet(alphabet);

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
  alphabet: Alphabet | null = defaultAlphabet
): string {
  alphabet = handleAlphabet(alphabet);

  const dict = getDict(alphabet);

  return string
    .split("")
    .map((char) => dict[char] || char)
    .join("");
}

export function includes(
  string: string,
  searchString: string,
  alphabet: Alphabet | null = defaultAlphabet
): boolean {
  alphabet = handleAlphabet(alphabet);

  string = convertToCelavica(string, alphabet);
  searchString = convertToCelavica(searchString, alphabet);

  return string.includes(searchString);
}

export function indexOf(
  string: string,
  searchString: string,
  alphabet: Alphabet | null = defaultAlphabet,
  position: number = 0
): number {
  alphabet = handleAlphabet(alphabet);

  string = convertToCelavica(string, alphabet);
  searchString = convertToCelavica(searchString, alphabet);

  return string.indexOf(searchString, position);
}

export function allIndexOf(
  str: string,
  searchString: string,
  alphabet: Alphabet | null = defaultAlphabet,
  position: number = 0
): number[] {
  alphabet = handleAlphabet(alphabet);

  str = convertToCelavica(str, alphabet);
  searchString = convertToCelavica(searchString, alphabet);

  const indexes: number[] = [];
  let index = str.indexOf(searchString, position);

  while (index > -1) {
    indexes.push(index);
    position = index + 1;
    index = str.indexOf(searchString, position);
  }

  return indexes;
}
