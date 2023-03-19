// loops

const products = [
    {
        ID: 1,
        title: 'Car 1',
        price: 20,
        exists: true
    },
    {
        ID: 2,
        title: 'Car 2',
        price: 90,
        exists: false
    }
]

// soulution 1
console.log('Soulution 1')
for(let item=0;
    item< products.length;
    item++){
    const {title} = products[item]    
    console.log(`#${item} title is ${title}`);
}

// soulution 2
console.log('Soulution 2')
for(let item=0;
    item< products.length;
    item++){
    // the below is wrong cuz, I used array index format
    // for an object indexing
    // const title = products[item][title]    
    const title = products[item].title    
    console.log(`#${item} title is ${title}`);
}



