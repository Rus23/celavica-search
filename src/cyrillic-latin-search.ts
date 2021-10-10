import { dictCyrillicToCelavica } from "./dictCyrillicToCelavica";
import { dictLatinToCelavica } from "./dictLatinToCelavica";

export type Alphabet = "cyrillic" | "latin";

const alphabetList: Alphabet[] = ["cyrillic", "latin"];

let defaultAlphabet: Alphabet = "latin";

/**
 * If argument `alphabet` is not type of `Alphabet` it will throw an `Error`
 *
 * @param {Alphabet} alphabet
 * @param {string} fnName
 */
function checkAlphabet(alphabet: Alphabet, fnName: string = ""): void {
  if (alphabetList.includes(alphabet)) {
    return;
  }

  const start = fnName ? `Function: '${fnName}': ` : "";
  throw new Error(
    `${start}Argument: 'alphabet' must have values: 'cyrillic' or 'latin'.`
  );
}

/**
 * If `alphabet` is nullish it will return `defaultAlphabet`;
 *
 * @param {Alphabet} alphabet
 *
 * @returns {Alphabet} `alphabet`
 */
function handleAlphabet(alphabet: Alphabet | null): Alphabet {
  return alphabet || defaultAlphabet;
}

/**
 * Gets `defaultAlphabet` witch is used by other functions.
 * By default this will return `"latin"`
 *
 * @returns {Alphabet} `defaultAlphabet`
 */
export function getDefaultAlphabet(): Alphabet {
  return defaultAlphabet;
}

/**
 * Sets `defaultAlphabet` witch is used by other functions.
 * Valid values are: `"cyrillic"` or `"latin"`.
 *
 * @param {Alphabet} alphabet
 */
export function setDefaultAlphabet(alphabet: Alphabet): void {
  checkAlphabet(alphabet, "setDefaultAlphabet");

  defaultAlphabet = alphabet;
}

/**
 * Gets dictionary that is used for conversion from `Cyrillic/Latin` to `Celavica` based on `alphabet`.
 *
 * @param {Alphabet} alphabet
 *
 * @returns {Record<string, string>} `dictionary` - `key`: `cyrillic/latin` letter, `value`: `celavica` letter
 */
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

/**
 * Converts string `str` to Celavica depending on `defaultAlphabet` or passed argument `alphabet`. <br>
 *
 * (eg.) <br>
 * // for alphabet = "latin" <br>
 * Niš -> Nis, <br>
 * // for alphabet = "cyrillic" <br>
 * Хороший -> Хорошии
 *
 * @param {string} string
 * @param {Alphabet} alphabet
 *
 * @returns {string} `celavica`
 */
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

/**
 *
 * Returns `true` if `searchString` appears as a substring in string `str`.
 *
 * @param {string} string
 * @param {string} searchString
 * @param {Alphabet} alphabet
 *
 * @returns {boolean} `boolean`
 */
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

/**
 *Returns the `position` of the first occurrence of a `searchString` or `-1` if `searchString` is not occurring in string `str`;
 *
 * @param {string} string
 * @param {string} searchString
 * @param {Alphabet} alphabet
 * @param {number} position
 *
 * @returns {number} `position`
 */
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

/**
 * Finding all the occurrences of an `searchString` in `str` and returning array of `positions` or `empty array` if it is not present.
 *
 * @param {string} str
 * @param {string} searchString
 * @param {Alphabet} alphabet
 * @param {number} position
 *
 * @returns {number[]} `positions`
 */
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
