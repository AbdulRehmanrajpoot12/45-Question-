function describe_city (city : string , country : string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Quetta");
describe_city("Karachi");
describe_city("WashingTon DC" , "America");