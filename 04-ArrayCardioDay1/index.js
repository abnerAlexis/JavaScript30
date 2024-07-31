const inventors = [
    { firstname: 'Alexis', lastname: 'Abner', year: 2000, passed: 2068 },
    { firstname: 'Albert', lastname: 'Einstein', year: 1879, passed: 1955 },
    { firstname: 'Isaac', lastname: 'Newton', year: 1643, passed: 1727 },
    { firstname: 'Galileo', lastname: 'Galilei', year: 1564, passed: 1642 },
    { firstname: 'Marie', lastname: 'Curie', year: 1867, passed: 1934 },
    { firstname: 'Johannes', lastname: 'Kepler', year: 1571, passed: 1630 },
    { firstname: 'Nicolaus', lastname: 'Copernicus', year: 1473, passed: 1543 },
    { firstname: 'Max', lastname: 'Planck', year: 1858, passed: 1947 },
    { firstname: 'Katherine', lastname: 'Blodgett', year: 1898, passed: 1979 },
    { firstname: 'Ada', lastname: 'Lovelace', year: 1815, passed: 1852 },
    { firstname: 'Sarah E.', lastname: 'Goode', year: 1855, passed: 1905 },
    { firstname: 'Lise', lastname: 'Meitner', year: 1878, passed: 1968 },
    { firstname: 'Hanna', lastname: 'Hammerström', year: 1829, passed: 1909 },
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

//Array.prototype.filter()
//1. Filter the list of inventors, were born in 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);

//1.a Filter the list of inventors, were born in 1850 after
const eightteen = inventors.filter(inventor => (inventor.year >= 1850));
console.table(eightteen);

//Array.prototype.map()
//2. Display the array of the inventor list with first and lastnames.

const fullnames = inventors.map(inventor => `${inventor.firstname} ${inventor.lastname}`);
console.log('Fullnames', fullnames);
console.table(fullnames);

//Array.prototype.sort()
//3. Sort inventors by birthday from oldest to youngest
const ordered = inventors.sort((current, next) => current.year > next.year ? 1 : -1);
console.log('Inventors from oldest to youngest:');
console.table(ordered);

//Array.reduce()
//4.How many yeard did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);// zero is the first value of total

console.log(`Total life time of all inventors: (reduce) ${totalYears}`);

const totalLifetime = inventors
    .map(inventor => inventor.passed - inventor.year)// Calculate each inventor's lifetime using map
    .reduce((sum, lifeTime) => sum + lifeTime, 0);// Sum all lifetimes

console.log(`Total life time of all inventors: (map and reduce) ${totalLifetime}`);

//5.Sort the inventors by the years lived
const oldest = inventors.sort(function (c, n) {
    const currentInventor = c.passed - c.year;
    const nextInventor = n.passed - n.year;
    return currentInventor > nextInventor ? -1 : 1;
});

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7.Sort the people array alphabetically by last name

const sorted = people.sort((current, next) => {
    const [currentLast, currentFirst] = current.split(' - ');
    const [nextLast, nextFirst] = next.split(' - ');
    return currentLast > nextLast ? 1 : -1;
})

console.log(`Sorted people array: ${sorted}`);

//8.Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 
            'walk', 'car', 'van', 'bike', 'walk', 'car', 
            'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {}); //the empty curly braces are for start object/empty

console.log(transportation)
