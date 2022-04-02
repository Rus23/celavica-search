# cyrillic-latin-search 🔤

**Cyrillic Latin Search** is convenient for Cyrillic Latin search engines because you can write **"Celavica"** ("Bald letters") "c" for "č", "s" for "š", "и" for "й",...

[Supports ISO 9 standard](https://en.wikipedia.org/wiki/ISO_9)

## Examples

| Latin   | Celavica | includes |
| ------- | -------- | -------- |
| Niš     | Nis      | true     |
| Ćao     | Cao      | true     |
| Šišmiš  | Sismis   | true     |
| čeljavo | Celjavo  | false    |

<br>

| Cyrillic | Celavica | includes |
| -------- | -------- | -------- |
| Нӣш      | Ниш      | true     |
| үй       | үи       | true     |
| Хороший  | Хорошии  | true     |
| Добрий   | добрии   | false    |

<br>

The last ones are `false` because functions are Case Sensitive.

## Installation

```bash
npm install cyrillic-latin-search
# or
yarn add cyrillic-latin-search
```

## Usage

```ts
import { includes, indexOf, setDefaultAlphabet } from "cyrillic-latin-search";

// latin search
includes("Lep je grad, Niš", "Nis"); // => true
indexOf("Lep je grad, Niš", "Nis"); // => 13

// cyrillic search
includes("Привет мой друг", "мои", "cyrillic"); // => true
setDefaultAlphabet("cyrillic"); // you can set 'latin' or 'cyrillic'
indexOf("Привет мой друг", "мои"); // => 7
```

## Documentation

> **Default alphabet** is **latin**. But you can change that with function _setDefaultAlphabet_

### Types

```ts
type Alphabet = "cyrillic" | "latin";
```

### Functions

Returns `true` if `searchString` appears as a substring in string `str`.

```ts
includes(str: string, searchString: string, alphabet?: Alphabet): boolean
```

Returns the `position` of the first occurrence of a `searchString` or `-1` if `searchString` is not occurring in string `str`;

```ts
indexOf(
  str: string,
  searchString: string,
  alphabet?: Alphabet,
  position?: number // The index at which to begin searching the searchString. By default starts from beginning.
): number;
```

Finding all the occurrences of an `searchString` in `str` and returning array of `positions` or `empty array` if it is not present.

```ts
allIndexOf(
  str: string,
  searchString: string,
  alphabet?: Alphabet,
  position?: number // The index at which to begin searching the searchString. By default starts from beginning.
): number[]
```

Sets `defaultAlphabet` witch is used by other functions.
Valid values are: `"cyrillic"` or `"latin"`.

```ts
setDefaultAlphabet(alphabet: Alphabet): void
```

Gets `defaultAlphabet` witch is used by other functions.
By default this will return `"latin"`

```ts
getDefaultAlphabet(): string
```

Converts string `str` to Celavica depending on `defaultAlphabet` or passed argument `alphabet`. <br>
(eg.) <br>
// for alphabet = "latin" <br>
Niš -> Nis, <br>
// for alphabet = "cyrillic" <br>
Хороший -> Хорошии

```ts
convertToCelavica(str: string, alphabet?: Alphabet): string
```

Gets dictionary that is used for conversion from `Cyrillic/Latin` to `Celavica` based on `alphabet`.

```ts
getDict(alphabet?: Alphabet): Record<string, string>
```
