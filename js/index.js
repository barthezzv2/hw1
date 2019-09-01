var openFile = function(event) {
var input = event.target;
var reader = new FileReader();
reader.onload = function(){
  var dataURL = reader.result;
  var output = document.getElementById('output');
  output.src = dataURL;
};
reader.readAsDataURL(input.files[0]);
};


async function app(event) {
	document.getElementById('pred').innerText = 'Identifying object, please hold...'
	document.getElementById('pred').style.color = 'red';

	// Load the model.
	net = await mobilenet.load();
	// Make a prediction through the model on our image.
	const imgEl = document.getElementById('output');
	const result = await net.classify(imgEl);
	console.log(result);

	document.getElementById('pred').innerText = ('The object has been identified as... ' + result[0].className)
	document.getElementById('pred').style.color = '#39FF14';
}