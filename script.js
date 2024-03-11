function volume_sphere() {
    //Write your code here
	const value = document.getElementById("radius").value;
	const ans = document.getElementById("volume");
	if (isNaN(value) || value<0) {
		ans.value = NaN;
	}
	const v = (4/3)*3.014*value*value*value;
	ans.value = v.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
