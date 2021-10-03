# cyrillic-latin-search

Cyrillic-Latin Search is convenient for Cyrillic-Latin search engines because you can write "Celavica" ("Bald letters") "c" for "č", "s" for "š", "и" for "й",...

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
| Добрий   | добрий   | false    |


#### P.S. Note that this is the initial version and its goal is to work. <br> The plan for the future is to make it faster, better and more powerful.

## Installation

npm i cyrillic-latin-search

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
