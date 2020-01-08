//jasmine.github.io
//but for testing you need to use jasmin cdn

//jasmine installation there is a order

//example

//jasmin.js
//jasmin-html.js
//boot.js

//app2.js

const saludar = nomber => `Hola ${nomber}`;

//app2.spec.js

it('La función saluda', () => {
    expect(saludar('Platzi')).toBe('Hola Platzi');
})

//you can create an specRunner.html this can show you a webpage with a report about your unit test.

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <link rel="shortcut icon" type="image/png"
    href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine_favicon.png">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.css">

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.js"></script>
  <script src="./app2.js"></script>
  <script src="./app2.spec.js"></script>
</head>

<body>

</body>

</html>

