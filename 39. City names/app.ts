function city_country (city : string , country: string) : string {
    return`${city},${country}`;
}

console.log(city_country("New York","America"));
console.log(city_country("Berlin","Germany"));
console.log(city_country("London","UK"));