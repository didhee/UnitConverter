const unitInput = document.getElementById("unit--input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

unitInput.addEventListener("input", () => {
    const units = {
        meters: "meters",
        feet: "feet",
        liters: "liters",
        gallons: "gallons",
        kilograms: "kilograms",
        pounds: "pounds"
    }

    if (unitInput == 0) {
        length.textContent = "";
        volume.textContent = "";
        mass.textContent = "";
    } else {

        length.textContent = `${unitInput.value} ${unitInput.value > 1 ? units.meters : "meter"} = ${Math.round(unitInput.value * 3.281 / 1000) / 1000} feet | ${unitInput.value} ${unitInput.value > 1 ? units.feet : "feet"} = ${Math.round(unitInput.value * 3.305 / 1000) / 1000} meters`;

        volume.textContent = `${unitInput.value} ${unitInput.value > 1 ? units.liters : "liters"} = ${Math.round(unitInput.value * 0.264 / 1000) / 1000} liters | ${unitInput.value} ${unitInput.value > 1 ? units.gallons : "gallons"} = ${Math.round(unitInput.value * 4.546 / 1000) / 1000} gallons`;

        mass.textContent = `${unitInput.value} ${unitInput.value > 1 ? units.pounds : "pounds"} = ${Math.round(unitInput.value * 2.205 / 1000) / 1000} pounds | ${unitInput.value} ${unitInput.value > 1 ? units.kilograms : "kilograms"} = ${Math.round(unitInput.value * 0.454 / 1000) / 1000} kilograms`;
    }
})