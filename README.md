# cyrillic-latin-search

Cyrillic Latin Search is convenient for Cyrillic Latin search engines because you can write "Celavica" ("Bald letters") "c" for "č", "s" for "š", "и" for "й",...

### Supports ISO 9 standard

## Examples

| Latin   | Celavica | includes |
| ------- | -------- | -------- |
| Niš     | Nis      | true     |
| Ćao     | Cao      | true     |
| Šišmiš  | Sismis   | true     |
| čeljavo | Celjavo  | false    |

Last one is `false` because functions are Case Sensitive.
<br>

| Cyrillic | Celavica | includes |
| -------- | -------- | -------- |
| Нӣш      | Ниш      | true     |
| үй       | үи       | true     |
| Хороший  | Хорошии  | true     |
| Добрий   | добрии   | false    |

## Installation

`npm i cyrillic-latin-search`

## Usage

```
import { includes, indexOf, setDefaultAlphabet } from "./cyrillic-latin-search";

// latin search
includes("Lep je grad, Niš", "Nis") // => true
indexOf("Lep je grad, Niš", "Nis") // => 13

// cyrillic search
includes("Привет мой друг", "мои", "cyrillic"); // => true
setDefaultAlphabet("cyrillic"); // you can set 'latin' or 'cyrillic'
indexOf("Привет мой друг", "мои"); // => 7
```

## Documentation

Returns `true` if `searchString` appears as a substring in `string`.

> includes(string: string, searchString: string, alphabet: "cyrillic" | "latin"): boolean

Returns the `position` of the first occurrence of a `searchString` or `-1` if `searchString` is not occurring in `string`;

> indexOf(string: string, searchString: string, alphabet: "cyrillic" | "latin"): number

Sets `defaultAlphabet` witch is used by other functions.
Valid values are: `"cyrillic"` or `"latin"`.

> setDefaultAlphabet(alphabet: "cyrillic" | "latin"): void

Gets `defaultAlphabet` witch is used by other functions.

> getDefaultAlphabet(): string

Converts `string` to Celavica depending on `defaultAlphabet` or passed argument. <br>
(eg.) <br>
// for alphabet = "latin" <br>
Niš -> Nis, <br>
// for alphabet = "cyrillic" <br>
Хороший -> Хорошии

> convertToCelavica(string: string, alphabet: "cyrillic" | "latin"): string

Gets dictionary that is used for conversion from `Cyrillic/Latin` to `Celavica` based on `alphabet`.

> getDict(alphabet: "cyrillic" | "latin"): Record<string, string>
