const fs = require("fs");











fs.writeFileSync('./dist/index.html', `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<body>
    <div class="container">
        <div class="row">
           

`)
fs.appendFileSync('./dist/index.html', ` <div class="'card">
<div class="card-header">
    <h3>

    </h3>
    <h4>

    </h4>
</div>
<div class="card-body">
    <p></p>
    <p></p>
    <p></p>
</div>
</div>`)
fs.appendFileSync('./dist/index.html', `
</div>
</div>
</body>

</html>`)