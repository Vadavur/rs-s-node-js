1. Description

This is a command line application for the text encription and decription by Caesar cipher.
It changes only Latin letters. All other syllables would remain unchanged.

2. Installation

To install this application, you should perform next steps:
1. Download the application from this repository.
2. Run the command line in the application folder.
3. Enter the command "npm install" or "npm -i".
4. Wait until the installation is complete.

3. Manual

After installation you should type following command in the command line in the application folder:
"node cct-app [options]", where options are the parameters followed by values. These parameters are listed below (short alias and full name) with the description of their values after a colon:

-a, --action: "encode" or "decode" (without double quotes) - depends on what you want to do with the text
-s, --shift: an integer number (-2, 14, 1212 etc) - it would be like the key for the cipher 
-i, --input: an input file path (./input.txt, ../../somewhere/inputText.txt etc) - the file to put text from
-o, --output: an output file path (./output.txt, ../../somewhere/outputText.txt etc) - the file, where the output text would be storaged

If any of "shift" or "action" parameters or its values would be incorrect, you would be shown the error with explanation.
If the file path would be incorrect, you would be shown the error too.

If there would be no filepaths correctly passed to this application, if input file is not set it would ask you to type in console window the text you want to process, or it would show you the processed result in the console if no output file was passed (watch out for the people behind you!).


Usage example:

-a (--action) is encode

$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

  input.txt This is secret. Message about "_" symbol!
  output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt

  plain.txt This is secret. Message about "_" symbol!
  encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

-a (--action) is decode
Decoding encoded initial string with the same -s(--shift) number produces the initial string.

$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
  
  encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
  plain.txt This is secret. Message about "_" symbol!

Negative shift handling

$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
  
  plain.txt This is secret. Message about "_" symbol!
  encoded.txt Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!

