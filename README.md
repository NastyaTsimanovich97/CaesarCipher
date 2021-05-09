# CaesarCipher
Caesar cipher CLI tool.

This tool is designed to encode or decode strings with [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

To run the tool, you must run the command 

```bash
$ node my_caesar_cli
```
with additional 4 options (short alias and full name):
1.  **-s, --shift**: letter shift in cipher. It is required option! It is only INTEGER value (negative or positive). For example, -2,-1,1,10,15,36...
2.  **-i, --input**: an input file or path to file where encode/decode string is write.
3.  **-o, --output**: an output file or path to file where the encoded/decoded string will be written.
4.  **-a, --action**: an action only encode/decode. It is required option!

If you do not provide access to the input file, then enter the original line in the console after the message.
And also if there is no output file, the result will be presented in the console.

**Usage example:**  
1. _-a (--action)_ is **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Negative shift handling_

```bash
$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```
