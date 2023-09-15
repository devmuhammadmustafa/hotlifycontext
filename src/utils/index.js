export function convertTemperature(temp, type) {
  return type
    ? parseFloat(((temp - 273) * 9) / 5 + 32).toFixed(2)
    : parseFloat(temp - 273).toFixed();
}

export function addItemToSearchedData(arr, newItem) {
  // Check if newItem already exists in myArray based on the "name" property
  const exists = arr.some((item) => item.city === newItem.city);
  if (!exists) {
    // Remove the first element if the array length is already 5
    if (arr.length === 5) arr.shift(); // Remove the first element

    arr.push(newItem);
  }
  localStorage.setItem("regions", JSON.stringify(arr));
  return arr;
}

export function setSearchedDataAsType(arr, type) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].temp = convertTemperature(arr[i].kelvin, type);
  }

  return arr;
}
