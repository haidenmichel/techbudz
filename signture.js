<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>
    <title>digitalSign</title>

    <style>
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        body {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin: 0;
            padding: 0px 0px;
            background: ()
            repeat scroll center center #b3b3b3;
            font-family: Helvetica, Sans-Serif;
        }

        .signature-pad {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            font-size: 10px;
            width: 100%;
            height: 100%;
            max-width: 600px;
            max-height: 200px;
            border: 0px solid #e8e8e8;
            background-color: #323232;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset;
            border-radius: 4px;
            padding: 2px;
        }

        .signature-pad::before,
        .signature-pad::after {
            position: absolute;
            z-index: -1;
            content: "";
            width: 40%;
            height: 10px;
            bottom: 10px;
            background: transparent;
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
        }

        .signature-pad::before {
            left: 20px;
            -webkit-transform: skew(-3deg) rotate(-3deg);
            transform: skew(-3deg) rotate(-3deg);
        }

        .signature-pad::after {
            right: 20px;
            -webkit-transform: skew(3deg) rotate(3deg);
            transform: skew(3deg) rotate(3deg);
        }

        .signature-pad--body {
            position: relative;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            border: 1px solid #f4f4f4;
        }

        .signature-pad--footer {
            color: #C3C3C3;
            text-align: center;
            font-size: 1.2em;
            margin-top: 25px;
        }

        .signature-pad--actions {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-top: 8px;
        }

        .text {
            font-style: bold;
   font-size: 22px;
            font-family: "Montserrat", "Montserrat", sans-serif;
            color: #ffffff;
        }

        .button {
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
            background-color: #164EDB;
            color: white;
   width: 204px;
            height: 40px;
            border: 0px solid #164EDB;
            border-radius: 38px;
   align-items: center;
            padding: 0px;
   font-style: bold;
   font-size: 15px;
            font-family: "Montserrat", "Montserrat", sans-serif;
            color: #ffffff;
        }

  .button2 {
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
            background-color: #EBEDEE;
            color: black;
   width: 204px;
            height: 40px;
            border: 0px solid #EBEDEE;
            border-radius: 38px;
   align-items: center;
            padding: 0px;
   font-style: bold;
   font-size: 15px;
            font-family: "Montserrat", "Montserrat", sans-serif;
            color: #000000;
        }

        .button:hover {
            background-color: #000000;
            color: white;
        }

    </style>
</head>

<body>
    <div>
        <canvas id="signature-pad" class="signature-pad" width=750 height=200></canvas>     
        <div class="signature-pad--footer">
                <div class="signature-pad--actions">
                    <div>
                        <button type="button" id="save-png" class="button" data-action="save-png">Submit</button>
                    </div>
     <div>
                        <button type="button" id="clear" class="button2" data-action="clear">Clear Signature</button>
                    </div>
                </div>
            </div>               
        </div>
    </div>
<script>


var canvas = document.getElementById('signature-pad');

function resizeCanvas() {
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);

    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgb(255, 255, 255)'
});


function signStamp(data) {
    var data = signaturePad.toDataURL('image/png');
    window.parent.postMessage(data, "*");
 signaturePad.clear();
}

document.getElementById('save-png').addEventListener('click', function () {
    if (signaturePad.isEmpty()) {
        return alert("Signature pad is empty.")
    }
    else {
    signStamp();
    }
});

document.getElementById('clear').addEventListener('click', function () {
    signaturePad.clear();
});
</script>
</body>
</html>
