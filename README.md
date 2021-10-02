# cyrillic-search

Cyrillic Search is convenient for Cyrillic Latin search engines because you can write "Celavica" (Ćelavica - Bald Cyrillic) for words with ć, č, ž, đ, š.  
eg.

| Celavica | Cyrillic Latin | includes |
| -------- | -------------- | -------- |
| Nis      | Niš            | true     |
| Cao      | Ćao            | true     |
| Sismis   | Šišmiš         | true     |
| Celjavo  | čeljavo        | false    |

Last one is `false` because `includes` is Case Sensitive.

#### P.S. Note that this is the initial version and its goal is to work. <br> The plan for the future is to make it faster and more powerful.
