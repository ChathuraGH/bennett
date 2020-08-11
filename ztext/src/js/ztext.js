zDefaults = {
	depth: "1rem",
	direction: "both",
	fade: false,
	layers: 10,
	perspective: "1000px",
	transform: "",
	event: "gyro",
	eventRotation: "45deg",
};

// Get all elements with the data-z attribute
var zs = document.querySelectorAll("[data-z]");
zs.forEach((z) => {
	draw(z);
});

// Apply the effect
function draw(z) {
	// Grab or compute all the parameters
	var depth = z.dataset.zDepth || zDefaults.depth;
	var depth_unit = depth.match(/[a-z]+/)[0];
	var depth_numeral = parseFloat(depth.replace(depth_unit, ""));
	var direction = z.dataset.zDirection || zDefaults.direction;
	var direction_adjustment = "";
	var fade = z.dataset.zFade || zDefaults.fade;
	var layers = parseFloat(z.dataset.zLayers) || zDefaults.layers;
	var perspective = z.dataset.zPerspective || zDefaults.perspective;
	var transform = z.dataset.zTransform || zDefaults.transform;
	var event = z.dataset.zEvent || zDefaults.event;

	var event_rotation = z.dataset.zEventRotation || zDefaults.eventRotation;
	var event_rotation_unit = event_rotation.match(/[a-z]+/)[0];
	var event_rotation_numeral = parseFloat(
		event_rotation.replace(event_rotation_unit, "")
	);

	// Grab the text and replace it with a new structure
	var text = z.innerText;
	z.innerHTML = "";
	z.style.display = "inline-block";
	z.style.position = "relative";
	z.style.transformStyle = "preserve-3d";
	z.style.perspective = perspective;

	// Create a wrapper span that will hold all the layers
	var zText = document.createElement("span");
	zText.setAttribute("class", "z-text");
	zText.style.display = "inline-block";
	zText.style.transformStyle = "preserve-3d";

	// Create a layer for transforms from JS to be applied
	// CSS is stupid that transforms cannot be applied individually
	var zLayers = document.createElement("span");
	zLayers.setAttribute("class", "z-layers");
	zLayers.style.display = "inline-block";
	zLayers.style.transformStyle = "preserve-3d";

	zText.append(zLayers);

	// Create layers
	for (i = 0; i < layers; i++) {
		let pct = i / layers;

		var zLayer = document.createElement("span");
		zLayer.setAttribute("class", "z-layer");
		zLayer.textContent = text;
		zLayer.style.display = "inline-block";

		// Shift the layer on the z axis
		if (direction === "backwards") {
			var zTranslation = -pct * depth_numeral;
		}
		if (direction === "both") {
			var zTranslation = -(pct * depth_numeral) + depth_numeral / 2;
		}
		if (direction === "forwards") {
			var zTranslation = -(pct * depth_numeral) + depth_numeral;
		}
		zLayer.style.transform = "translateZ(" + zTranslation + depth_unit + ")";

		// Manipulate duplicate layers
		if (i >= 1) {
			// Overlay duplicate layers on top of eachother
			zLayer.style.position = "absolute";
			zLayer.style.top = 0;
			zLayer.style.left = 0;
			// Prevent duplicate layers from being selected
			zLayer.setAttribute("aria-hidden", "true");
			zLayer.style.pointerEvents = "none";
			zLayer.style.userSelect = "none";

			// Incrementally fade layers if option is enabled
			if (fade === true || fade === "true") {
				zLayer.style.opacity = 0.5 - pct / 2;
			}
		}

		// Add layer to wrapper span
		zLayers.append(zLayer);
	}

	// Finish adding everything to the original element
	z.append(zText);

	// Rotate .z-text as a function of x and y coordinates
	function tilt(x_pct, y_pct) {
		var x_tilt = x_pct * event_rotation_numeral;
		var y_tilt = -y_pct * event_rotation_numeral;

		zLayers.style.transform =
			"rotateX(" +
			y_tilt +
			event_rotation_unit +
			") rotateY(" +
			x_tilt +
			event_rotation_unit +
			")";

		document.querySelector(".x_tilt_debug").innerHTML =
			x_tilt + event_rotation_unit;
		document.querySelector(".y_tilt_debug").innerHTML =
			y_tilt + event_rotation_unit;
	}

	// Capture mouse move events and tilt .z-layers
	if (event === "mouse") {
		window.addEventListener("mousemove", (e) => {
			var x_pct = e.clientX / window.innerWidth - 0.5;
			var y_pct = e.clientY / window.innerHeight - 0.5;

			tilt(x_pct, y_pct);
		});
	}

	// Capture device gyroscope readings and tilt zLayers
	if (event === "gyro") {
		if (window.DeviceOrientationEvent) {
			i = 0;
			x_sum = 0;
			y_sum = 0;

			window.addEventListener("deviceorientation", function (e) {
				var x = e.gamma;
				var y = e.beta;

				if (x !== 0 && y !== 0) {
					// Get baseline values
					if (i < 100) {
						i++;
						x_sum += x;
						y_sum += y;
					}

					var x_avg = x_sum / i;
					var y_avg = y_sum / i;

					var x_pct = (x_avg - x) / 45;

					if (x_pct < -1) {
						var x_pct = -1;
					}
					if (x_pct > 1) {
						var x_pct = 1;
					}

					var y_pct = (y_avg - y) / 45;

					if (y_pct < -1) {
						var y_pct = -1;
					}
					if (y_pct > 1) {
						var y_pct = 1;
					}

					tilt(x_pct / 2, y_pct / 2);

					document.querySelector(".x_debug").innerHTML = "x: " + x;
					document.querySelector(".y_debug").innerHTML = "y: " + y;

					document.querySelector(".i_debug").innerHTML = "i: " + i;
					document.querySelector(".x_avg_debug").innerHTML = "x_avg: " + x_avg;
					document.querySelector(".y_avg_debug").innerHTML = "y_avg: " + y_avg;

					document.querySelector(".x_pct_debug").innerHTML =
						"x_pct: " + x_pct / 2;
					document.querySelector(".y_pct_debug").innerHTML =
						"y_pct: " + y_pct / 2;
				}
			});
		}
	}
}
